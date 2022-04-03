package com.example.isuuer.utils;

import org.junit.jupiter.api.Test;
import org.springframework.util.StringUtils;

import java.io.FileOutputStream;
import java.io.InputStream;
import java.nio.file.Paths;
import java.security.*;
import java.security.spec.ECGenParameterSpec;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;

import static org.junit.jupiter.api.Assertions.*;

class SignUtilsTest {


    @Test
    void loadFromFile() throws Exception {
        PrivateKey id_rsa = SignUtils.loadFromFile(Paths.get("/Users/ywb/Documents/github/chainlink-docker/issuer", "id_rsa"));
        System.out.println(id_rsa.toString());
    }

    @Test
    void sign() throws Exception {
        String data = "i am java";

        KeyPair keyPair = SignUtils.loadKeyPair("./");
        byte[] sign = SignUtils.Sign(keyPair.getPrivate(), data);

        boolean verify = SignUtils.verify(keyPair.getPublic(), data, sign);

        System.out.println(verify);

    }

    @Test
    void verify() throws Exception {

//        String file = classLoader.getResource("key/key").getFile();
//        System.out.println(file);
    }
}