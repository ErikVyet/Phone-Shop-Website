package com.source.request;

import java.util.List;

import jakarta.validation.constraints.Min;

public class ProductFilterRequest {
    
    private String brand;
    private List<String> screens;
    private List<String> rams;
    private List<String> storages;
    private double prices[];

    @Min(0)
    private int page;

    public ProductFilterRequest() { }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public List<String> getScreens() {
        return screens;
    }

    public void setScreens(List<String> screens) {
        this.screens = screens;
    }

    public List<String> getRams() {
        return rams;
    }

    public void setRams(List<String> rams) {
        this.rams = rams;
    }

    public List<String> getStorages() {
        return storages;
    }

    public void setStorages(List<String> storages) {
        this.storages = storages;
    }

    public double[] getPrices() {
        return prices;
    }

    public void setPrices(double prices[]) {
        this.prices = prices;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    

}