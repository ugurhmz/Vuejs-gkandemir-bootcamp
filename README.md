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

________________________________________________________________________________________________________________________________________________
							COMPONENT

1- import edildiğim yere, Parentıma bilgi atıyorum diyorum --> this.$emit("yollanan_event_ismi", "eventin_içerdiği_data")
şeklinde event yolluyoruz, parentta ise   @yollanan_event_ismi şeklinde=""  şeklinde yakalıyoruz.

   Parentten -> Childe =>   props: ["yolanan_props"] şeklinde.
   Childden -> Parenta =>   $emit


2- @delete-item-event="$emit('delete-item', $event)    //Bu şu demektir:

    1- aşağıdan gelen @delete-item-event i al. 
    2- Onu $emit ile parenta yolla.
    3- delete-item eventi isminde yolla.
    4- yollanacak veri ise -> aşağıdan gelen olduğunu gösermek için $event şeklinde yapıyopruz


3- @ -> Event olduğunu gösterir.


4- provide yaklaşımı şu ->  Siz ana Parent  üzerinden datayı provide edersiniz. İstediğiniz, ihtiyacınız nerde ise 
                            Onu inject edersiniz.
                          


   inject ilede -> Parenttan gelen, provide edileni ~~> nerde kullanacaksam orada yapıyorum. 





1- import edildiğim yere, Parentıma bilgi atıyorum diyorum --> this.$emit("yollanan_event_ismi", "eventin_içerdiği_data")
şeklinde event yolluyoruz, parentta ise   @yollanan_event_ismi şeklinde=""  şeklinde yakalıyoruz.

   Parentten -> Childe =>   props: ["yolanan_props"] şeklinde.
   Childden -> Parenta =>   $emit


2- @delete-item-event="$emit('delete-item', $event)    //Bu şu demektir:

    1- aşağıdan gelen @delete-item-event i al. 
    2- Onu $emit ile parenta yolla.
    3- delete-item eventi isminde yolla.
    4- yollanacak veri ise -> aşağıdan gelen olduğunu gösermek için $event şeklinde yapıyopruz


3- @ -> Event olduğunu gösterir.


4- provide yaklaşımı şu ->  Siz ana Parent  üzerinden datayı provide edersiniz. İstediğiniz, ihtiyacınız nerde ise 
                            Onu inject edersiniz.
                          


   inject ilede -> Parenttan gelen, provide edileni ~~> nerde kullanacaksam orada yapıyorum. 








5- pushlama işlemi için data() { return {  } } -> kullanılmalı


6- provide  işlemi data içinde yollanır.


_________________________________________________________________________________________________________________________________
                                            SLOT İLE GÖNDERME 

Yukardan aşağı prop gibi html içerikleri yollama.

1-  
    App.vue bu şekilde

 <Modal>
        <template #title>  
            <h3>Slot ile gelen  Title lorem ipsum</h3>
        </template>
  </Modal>

    
    alt tarafta yollamak için  kullanımı ise :

    <slot name="title" />


not -> #title ile v-slot:title aynı şey.



_________________________________________________________________________________________________________________________________
                                            DYNAMIC COMPONENT
1-
  <component :is="activeComponent" msg="Red Component 2">
            <h3 class="bg-green text-white">Green Component</h3>
  </component>



    activeComponent -> data()'da tanımlanan, msg ise props şeklinde, h3 ise slot şeklinde gider.



2- Componentin bilgisini tutmak istiyorsak, 

<keep-alive> </keep-alive> sarmalaması yapılır.


keep-alive ile birlikte mounted olmaz. Yani life-cycle hooku kaybettim.
bunun çözümü ise -> biz keep-alive kullandığımızda bize 2 tane life-cycle hook veriyor onlarda :




3- json-server kurduktan sonra bunu db gibi kullanmak için terminalde:

json-server --watch mydb.json



4- axios kullanımı : 

const saveObject = {
                title : e.target.value,
                created_at : new Date(),
                completed : false
            }     

axios.post("http://localhost:3000/items", saveObject)


burdaki localhost -> json-server ile çalıştırdığımız fake db.




5- axios promise  yöntemi ile çalışır. Yani bu istek gerçekleştikten sonra yapılacak callback verir
onada then() ile ulaşırız.

*Yani axios işleminden sonra .then ile response karşılanır.

6- axios ile yapılan o post isteğinde, eklenen her şeyi mydb.jsona ekleyecek. yani bir dbye ekliyor gibi



7- mounted() -> mantık şu: vue uygulumamız render edildikten sonra, doma yapıştırıldıktan sonra, siz başka elemente
native olarak erişmek istiyorsanız, kaydınızda buna göre çekilecekse işte o zaman mounted daha doğru. yoksa 
created ilede yapılabilir.


8- this.itemsList = this.itemsList.filter( i => i.id !== item.id)  bu şu demek :


Sildiğim eleman hariç hepsini al o listeden, benim yeni listemi oluştur diyorum burda.





