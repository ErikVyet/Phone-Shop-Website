package com.source.dto;

import java.io.Serializable;

import com.source.model.Product;

public class ProductDTO implements Serializable {
    private int id;
    private String name;
    private String brand;
    private double price;
    private String  image;
    private String description;
    private double screen;
    private String ram;
    private String storage;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public double getScreen() {
        return screen;
    }
    public void setScreen(double screen) {
        this.screen = screen;
    }
    public String getRam() {
        return ram;
    }
    public void setRam(String ram) {
        this.ram = ram;
    }
    public String getStorage() {
        return storage;
    }
    public void setStorage(String storage) {
        this.storage = storage;
    }
    public static ProductDTO fromEntity(Product product){
        ProductDTO dto= new ProductDTO();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setBrand(product.getBrand());
        dto.setPrice(product.getPrice());
        dto.setImage(product.getImage());
        dto.setDescription(product.getDescription());
        dto.setScreen(product.getScreen());
        dto.setRam(product.getRam());
        dto.setStorage(product.getStorage());
        return dto;
    }
}
