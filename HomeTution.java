package opps_Practice;

public class HomeTution {
	String NameHead;
	String Address;
	int NoOfStudents;
	
	public HomeTution(String NameHead,String Address,int NoOfStudents) {
		this.NameHead=NameHead;
		this.Address=Address;
		this.NoOfStudents=NoOfStudents;
	
}
}
 class Hometution_Implementation{
	public static void main(String [] args) {
		HomeTution Balawadi = new HomeTution("Rahul Sir","Balawadi",350);
		HomeTution Kharadi = new HomeTution("Naresh dada","Kharadi",230);
		
		System.out.println(Balawadi.NameHead+" "+Balawadi.Address+" "+Balawadi.NoOfStudents);
		System.out.println(Kharadi.NameHead+" "+Kharadi.Address+" "+Kharadi.NoOfStudents);
	}
}

