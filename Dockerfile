FROM node:18-alpine3.17 As frontend-build
WORKDIR /app
COPY ./frontend/ ./
RUN npm install
RUN npx vite build

FROM maven:3.9.4-eclipse-temurin-17-alpine AS backend-build
WORKDIR /app
COPY ./auction/pom.xml .
COPY ./auction/src/ ./src/
COPY --from=frontend-build /app/dist/ ./src/main/resources/static/
RUN mkdir ./src/main/resources/templates/
RUN  mv ./src/main/resources/static/index.html ./src/main/resources/templates/index.html
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
RUN adduser -D juser
WORKDIR /app
RUN mkdir images
COPY --from=backend-build /app/target/*.jar /app/app.jar
RUN chown juser:juser -R ./
USER juser
CMD "java" "-jar" "app.jar"