package com.kangocovermobileweb.scenarios;



import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


import com.kangocovermobileweb.utilities.WebConnector;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;


//********************This is to generate Cucumber html-repors which is normal report***************************************** 
//@RunWith(Cucumber.class)
//
//@CucumberOptions( format = {"pretty", "html:target/cucumber-htmlreport", "json:target/Destination/cucumber.json"})
//public class RunTest {
//	
//	@BeforeClass
//	public static void initialise() throws InterruptedException {
//		System.out.println("before run");
//		TestUtil.deleteScreenshots();
//	           
//	}
//	
//	@AfterClass
//	public static void tearDown() throws Exception{
//		TestUtil.ClearBrowserCache();
//		
//	}
//
//}

//************************This is to generate Cucumber html-reports which is recomended by team*******************************************
@RunWith(Cucumber.class)


@CucumberOptions(strict = false, features = "//Users//AnandJois//Documents//workspace//KangoCoverInsuranceMobileWebBDD//src//test//resources//com//KangoCover//Scenarios", plugin = "html:target/cucumber-html-reports",
			format = { "pretty",
		"html:target/site/cucumber-pretty",
		"json:target/cucumber.json",
		}, tags = { "~@ignore" })
public class RunTest {
	
	@BeforeClass
	public static void initialise() throws InterruptedException {
		System.out.println("before run");
		
		WebConnector.deleteScreenshots();
		
//		WebConnector.deleteDir(ReportFile);
	           
	}
	
	@AfterClass
	public static void tearDown() throws Exception{
//		TestUtil.ClearBrowserCache();
		
		WebConnector.quit();
		
	}

}


//************************Still need to work on this report
//@RunWith(ExtendedCucumber.class)
//@ExtendedCucumberOptions(jsonReport = "target/cucumber.json",
//retryCount = 3,
//detailedReport = true,
//detailedAggregatedReport = true,
//overviewReport = false,
//toPDF = false,
//outputFolder = "target")
//
//
//@CucumberOptions(plugin = { "html:target/cucumber-html-report",
//        "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt",
//        "usage:target/cucumber-usage.json",
//        "junit:target/cucumber-results.xml"
//        }, features = "C:\\workspace\\test-automation\\KangoCoverInsuranceBDD\\src\\test\\resources\\com\\KangoCover\\Scenarios", 
//        format = { "pretty", "html:target/site/cucumber-pretty",
//		"json:target/cucumber.json" }, tags = { "~@ignore" })
//public class RunTest {
//	
//	@BeforeClass
//	public static void initialise() throws InterruptedException {
//		System.out.println("before run");
//		TestUtil.deleteScreenshots();
//	           
//	}
//	
//	@AfterClass
//	public static void tearDown() throws Exception{
//		TestUtil.ClearBrowserCache();
//		
//	}
////
//}
