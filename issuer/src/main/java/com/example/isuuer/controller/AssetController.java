package com.example.isuuer.controller;

import com.example.isuuer.bean.DemoBean;
import com.example.isuuer.service.IPFSService;
import io.ipfs.api.IPFS;
import io.ipfs.multihash.Multihash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

/**
 *
 */
@RestController
@RequestMapping("/api/asset")
public class AssetController {
//    @Autowired
//    IPFSService ipfsService;

    @GetMapping("/valid")
    public DemoBean getPrice() {
        return new DemoBean(123, 123);
    }

//    @GetMapping("/")
//    public byte[] index(@RequestParam("id") String id) throws IOException {
//        byte[] bytes = ipfsService.catFile(id);
//        return bytes;
//    }
}
