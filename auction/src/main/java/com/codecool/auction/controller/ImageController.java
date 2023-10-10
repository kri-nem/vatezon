package com.codecool.auction.controller;

import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
@RequestMapping("/api/pictures")
public class ImageController {

    @GetMapping(value = "{pic_name}")
    public @ResponseBody byte[] getPicture(@PathVariable String pic_name) throws IOException {
        InputStream in = new FileInputStream(System.getenv("image_folder") + pic_name);
        return IOUtils.toByteArray(in);
    }
}
