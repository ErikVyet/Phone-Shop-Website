package com.source.dto;

import java.io.Serializable;

import com.source.model.About;

public class AboutDTO implements Serializable {
    
    private int id;
    private String section;
    private String title;
    private String content;
    private String image;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }
   
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public static AboutDTO fromEntity(About about) {
        AboutDTO dto = new AboutDTO();
        dto.setId(about.getId());
        dto.setSection(about.getSection());
        dto.setTitle(about.getTitle());
        dto.setContent(about.getContent());
        dto.setImage(about.getImage());
        return dto;
    }

}