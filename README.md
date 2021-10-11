# Vuejs-gkandemir-bootcamp

1- string interpolation -> vue js tarafında tanımlanan property'i , html tarafında(template) kullanmanızı sağlar.
 {{  }} yani bu tagler elementlerin içindeki text content'inin olduğu yerlerde çalışır. 
			- içinde Tek satırlık javascript kodu yazmamızıdı sağlar.
			- içine eklenen her şeyi stringe çevirir ekjrana basar		

	
2- .mount("#app") -> id'si app olan elementin sınırları içersinde çalışcak demektir.

3- v-bind:href=""   ile :href aynı şey demek. Yani bu vue nesnesinden dolacak demektir.

4- methods : {

}   

//Burda fonksiyonlarımızı yazarız



5- this. şu demek ->vue instance'taki demek.


6-   @mousemove="updateCoords($event,'mymove')"     -> standart eventin yanında, kendimize ait parametrede gönderebiliriz.

7- not -> name : {

}   şekli obje demek.




8- Eventler -> @ ile yakalanır.
   değerlere ise -> :    ile ulaşılır örn/   :href="eduflow.url"  gibi





9- bir elementin içinde -> v-xx varsa  bu directive dir.

v-on -> eventi bağlar (@)
v-bind -> attributenin değerinin nerden gelceğini ( : ) 



10- v-model -> data() içindeki bir değer ile çalışır. @ ve : olan iki işlemi  bizim için otomatik olarak yapar.
		- two way data binding yapar.



11- Vue instance değişim olunca, Virtual DOM değişiyor. 
Sonra DOM ile Virtual DOM arasında fark var diyor, Sonra DOM'u update ediyor. Bunada render etme deniyor.


_______________________________________________________________________________________________
						REACTIVITY ( Kendi kendine tetiklenecek demektir.)


1- computed: { }   -> 	-Bir fonksiyon gibi çalışan  değişkenlerdir diyebiliriz. 
			-Değişken gibi davranırlar, geriye bir değer return etmesi gerekir.
			** İlgili yeri update eder.
			-İçindeki bilgilere göre, değişimine göre  bir değer return etmek zorunda. 2 tane,3 tane,5 tane değere bakabilir.	

2- watch : { } -> Bizim data() {}, computed : {} 'da bulunan bir bilgiyi direk izlemeyi sağlar.
		 -Değer değiştiğide çalışır.
		** Tek bir değeri inceler, eski ve yeni bilgisini verir. değer döndürmek zorudna değildir.
		




**Not -> @keydown.enter="funkName"   -> şeklinde basılan tuş enter ise, o isimli fonksiyonu çalıştır.




****Not -> computed kullanabilceğin bir yerde, kesinlikle ve kesinlikle bunu kullanın. Başka alternatife kaymayın.



_______________________________________________________________________________________________________________________________________________

12- v-if="!showContainer"   -> false olduğunda işlem yapsın demektir.

13- v-else -> hiyerarşik olarak aynı seviyede olan elemanı gizler yada kapatır.



***14)   v-if ->  ile yaptığımızda koşullardan hangisi sağlıyor sadece o gözükür html sayfasında. Elementi DOM üzerinden tamamen kaldırıyor.
	v-show -> tüm koşullar html sayfasında gözükür. Şartı sağlamayanlar display:none şeklinde olur. Css ile elementi kaldırıyor.



