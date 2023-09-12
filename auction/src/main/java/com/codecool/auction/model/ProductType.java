package com.codecool.auction.model;

public enum ProductType {
    ROAD_CYCLING_SHOES("Road-Cycling-Shoes"),
    SCARF("Scarf"),
    WASHING_MACHINE("Washing machine");

    private final String text;

    ProductType(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public boolean hasSameText (String text) {
        return this.text.equals(text);
    }
}
