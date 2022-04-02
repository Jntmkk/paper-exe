package com.example.isuuer.service;

import io.ipfs.api.MerkleNode;

import java.io.File;
import java.io.IOException;

public interface IPFSService {
    byte[] catFile(String hash) throws IOException;

    MerkleNode addFile(File file) throws IOException;

    MerkleNode addBytes(byte[] bytes) throws IOException;
}
