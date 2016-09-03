package com.kangocovermobileweb.scenarios;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;



public class Main {

	public static void main(String[] args) throws Exception {

//		getTimeDiff("29/08/16", "8/9/2016");
		SimpleDateFormat myFormat = new SimpleDateFormat("dd/MM/yy");
		String inputString1 = "26/09/16";
		String inputString2 = "10/10/2016";

		Date date1 = myFormat.parse(inputString1);
		Date date2 = myFormat.parse(inputString2);
		long diff = date2.getTime() - date1.getTime();
		System.out.println ("Days: " + TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS));
		

	}
	
	
	
}
