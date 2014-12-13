package com.self.fun;
public class GsonDemo {
	
	public static void main(String[] args) {
		Gson gson = new GsonBuilder().create();
		Car audi = new Car("Audi", "A4", 1.8, false);
		Car skoda = new Car("�koda", "Octavia", 2.0, true);
		Car[] cars = { audi, skoda };
		Person johnDoe = new Person("John", "Doe", 245987453, 35, cars);
		System.out.println(gson.toJson(johnDoe));
	}
}
