package com.example.isuuer.service.impl;

import com.example.isuuer.service.IPFSService;
import io.ipfs.api.MerkleNode;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.File;
import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class IPFSServiceImplTest {
    @Autowired
    IPFSService ipfsService;

    @Test
    void catFile() {
    }

    @Test
    void addFile() throws IOException {
        String ipfs = ipfsService.addString("i miss you");
        System.out.println(ipfs);
    }

    @Test
    void addBytes() {
    }
}