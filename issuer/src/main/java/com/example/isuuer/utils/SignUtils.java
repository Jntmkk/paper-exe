package com.example.isuuer.utils;

import org.apache.commons.io.IOUtils;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.security.*;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;

/**
 * @author ywb
 */
public class SignUtils {
    public static byte[] Sign(PrivateKey privateKey, String data) throws Exception {

        Signature signature = Signature.getInstance("SHA1withRSA");
        signature.initSign(privateKey);
        signature.update(data.getBytes(StandardCharsets.UTF_8));
        byte[] signData = signature.sign();
        return signData;
    }

    public static boolean verify(PublicKey publicKey, String data, byte[] signData) throws Exception {
        Signature signature = Signature.getInstance("SHA1withRSA");

        signature.initVerify(publicKey);
        signature.update(data.getBytes(StandardCharsets.UTF_8));
        boolean status = signature.verify(signData);
        return status;
    }

    public static KeyPair loadKeyPair(String path) throws Exception {
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();

        byte[] pub = IOUtils.toByteArray(classLoader.getResourceAsStream("key/key.pub"));
        byte[] pri = IOUtils.toByteArray(classLoader.getResourceAsStream("key/key"));

        // Generate KeyPair.
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        X509EncodedKeySpec publicKeySpec = new X509EncodedKeySpec(
                pub);
        PublicKey publicKey = keyFactory.generatePublic(publicKeySpec);

        PKCS8EncodedKeySpec privateKeySpec = new PKCS8EncodedKeySpec(
                pri);
        PrivateKey privateKey = keyFactory.generatePrivate(privateKeySpec);

        return new KeyPair(publicKey, privateKey);
    }

    public static PrivateKey loadFromFile(Path path) throws Exception {
        byte[] keyBytes = Files.readAllBytes(path);
        PKCS8EncodedKeySpec spec =
                new PKCS8EncodedKeySpec(keyBytes);
        KeyFactory kf = KeyFactory.getInstance("RSA");
        return kf.generatePrivate(spec);
    }

    public static byte[] sign(PrivateKey privateKey, String message) throws Exception {
        Signature signature = Signature.getInstance("SHA1withRSA");
        signature.initSign(privateKey);

        signature.update(message.getBytes());

        return signature.sign();
    }


    public static boolean verify(PublicKey publicKey, byte[] signed, String message) throws Exception {
        Signature signature = Signature.getInstance("SHA1withECDSA");
        signature.initVerify(publicKey);

        signature.update(message.getBytes());

        return signature.verify(signed);
    }
}
