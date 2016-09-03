package com.kangocover.utilities;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigParser {
	public static String browser;
	public static String domain;
	public static String env;
	public static Properties ENV = null;
	public static Properties OR = null;
	public Properties CONFIG = null;

	public static void readConfig() {
		try {

			ENV = new Properties();
			FileInputStream fp = new FileInputStream(
					System.getProperty("user.dir") + "\\src\\test\\java\\com\\kangocover\\config\\ENV.properties");
			ENV.load(fp);
			OR = new Properties();
			if (ENV.getProperty("ENV").equalsIgnoreCase("STAGING")) {
				fp = new FileInputStream(System.getProperty("user.dir")
						+ "\\src\\test\\java\\com\\kangocover\\config\\Staging.properties");
				OR.load(fp);
			} else if (ENV.getProperty("ENV").equalsIgnoreCase("PRODUCTION")) {
				fp = new FileInputStream(System.getProperty("user.dir")
						+ "\\src\\test\\java\\com\\kangocover\\config\\production.properties");
				OR.load(fp);
			} else if (ENV.getProperty("ENV").equalsIgnoreCase("GLF_STAG")) {
				fp = new FileInputStream(System.getProperty("user.dir")
						+ "\\src\\test\\java\\com\\kangocover\\config\\GLF_STAGING.properties");
				OR.load(fp);
			}
		} catch (Exception e) {
			e.getMessage();
		}

		env = ENV.getProperty("ENV");
		browser = ENV.getProperty("BROWSER");
		domain = OR.getProperty("URL");

	}

	public static String getDomain() {
		if (domain == null) {
			readConfig();
		}
		return domain;
	}

	public static String getBrowser() {
		if (browser == null) {
			readConfig();
		}
		return browser;
	}

}
