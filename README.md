[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?style=for-the-badge)](http://www.gnu.org/licenses/gpl-3.0)
[![LinkedIn][linkedin-shield]][linkedin-url]

# Vatezon

## About The Project
Vatezon is a full-stack web-shop application, using Spring Boot and Postgres for its back end and React.js with MUI for its front end. The build process uses Docker, and You can run the demo using Docker Compose.

In Vatezon you can browse and filter listed products. After registration, you can upload a new product with a new picture. Planned features include buying products and an auction system.

Our team [fulopco](https://github.com/fulopco), [gyenesboti](https://github.com/gyenesboti) and [kri-nem](https://github.com/kri-nem) built this project as the last project of @github/CodecoolGlobal 's 10 month long full-time full-stack course.

### Built With
* [![Java](https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)](https://openjdk.org/)
* [![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=fff)](https://spring.io/)
* [![Postgres](https://img.shields.io/badge/Postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
* [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/javascript)
* [![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
* [![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
* [![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

## Getting Started
To get a local copy up and running follow these simple example steps.

### Prerequisites
The only things You need to have are Docker with Compose installed on your system and a browser.


### Installing & Running
Clone the repo and open a terminal in the project's root folder. First, you need to have some variables set with proper values. For demo porpuses using default values on used docker images use the following:
```sh
expert DB_HOST=postgres
export DB_PORT=5432
export DB_NAME=postgres
export DB_USER=postgres
export DB_PASSWORD=password
export secret_key=sick_rat_key
```
In the same shell session, You can simply run:
```sh
docker compose up
```
Which will build the project. After the build completes visit <a href="http://localhost:5000">http://localhost:5000</a>

[contributors-shield]: https://img.shields.io/github/contributors/kri-nem/vatezon.svg?style=for-the-badge
[contributors-url]: https://github.com/kri-nem/vatezon/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kri-nem/vatezon.svg?style=for-the-badge
[forks-url]: https://github.com/kri-nem/vatezon/network/members
[stars-shield]: https://img.shields.io/github/stars/kri-nem/vatezon.svg?style=for-the-badge
[stars-url]: https://github.com/kri-nem/vatezon/stargazers
[issues-shield]: https://img.shields.io/github/issues/kri-nem/vatezon.svg?style=for-the-badge
[issues-url]: https://github.com/kri-nem/vatezon/issues
[license-shield]: https://img.shields.io/github/license/kri-nem/vatezon.svg?style=for-the-badge
[license-url]: https://github.com/kri-nem/vatezon/blob/development/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kristof-nemeth-developer
