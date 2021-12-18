# Big-Oh ( O ) notation & Binary Search

Binary-search bu elemetn qidirishda bir nechta ulning biridir. 

Masaln quyida bizga elementlar berilgan:
![Before console.clear](/assets/binary_search/1.png)

Bu yerda savol shundan iborat 'e' harfi qaysi indexda joylashgan ?

Javobimiz oddiy bo'lishi mumkin ya'ni, biz har bir elementdan birma-bir o'tib biz javobni topgunimizcha iterate-qidirishimiz mumkin. 
![Before console.clear](/assets/binary_search/2.png)

Lekin bizning bu har birini ketma-ket qidirihsimiz qancha effektiv bo'lishi mumkin ?

Bu boshqa faktorlarga bog'liq ya'ni, biz ketadigan vaqtga etiborimizni qaratamizmi yoki bizning programmamiz qancha hotira sarflashigami ?

Hozircha vaqtni, qanchalik ketishini taxlil qilsak. 

Biz masalan sarfalangan vaqtni tanlagan komputer tilimizdan foydalanib o'lchashimiz mumkin, Lekin bu bizga, biz tutgan yo'limizni qnachalik effektive ekanligini aniq o'lchashmizga yodam bermasligi mumkin.

Uning o'rniga bizlar har bir harakatimiz uchun sarflanadigan vaqtni hisoblashimiz mumkin. Masalan yuqoridagi misolmizida arrayda berilgan elementlar sonidan va har bir elementdan o'tishimiz masalan 1 ms vaqt ketadi deb faraz qilamiz.

Ho'sh, bu misolda biz 3 ta elementni testdan o'tkazamiz, demak bizni qiladigan ammalr yig'indisi 3 ms vaqtni oladi. yomon emas ))

Lekin e'tibor bering, agar biz 'x' harfini qidirganimizda nima bo'lar edi?  Bu holda biz hamma elementlardan test qilib o'tishimizga to'g'ri keladi va endi bizni operatsiyamiz 7ms vaqtni oladi.

Ho'p, umuman olganda bizning bu linear algoritimimiz qancha vaqtni oladi har hil uzunlikdagi arraylar uchun? 

Taxlil qiladigan bo'lsak: Eng tez topadigan vaziyatni oladigan bo'lsak bu biz qidiryotgan element 1 - o'rinda turgan bo'lsa, bitta test faqat. Eng ko'p test bo'ladigan holat bo'ladigan bo'lsa biz qidiryotgan elementimiz arrayning eng oxirgi elementi bo'lganda, hamma elementlar testdan o'tkaziladi.

![Before console.clear](/assets/binary_search/3.png)


---

Biz algoritmlarni ishlash vaqti haqida gapirganimizda odatda eng qiyin holat haqida gapiramiz. Tasavvur qiling bizning arraymiz uzunligi 7 mln ta elementdan iborat.

Demak biz bundan hulosa qilsak, bizning ushbu algoritm ishlash vaqti array uzunligiga to'g'ri proporsional:

![Before console.clear](/assets/binary_search/4.png)

Odatda bizlarga bunaqangi grafik ko'rinshdagi taxlillar shart emas, Uning o'rniga matematik ifoda yani _O(n)_ "Big Oh of n" funksiyasini ishlatishimiz mumkin. 

Bu formulamiz bizga shuni aytadi: Agara elemetnlar soni `n` bo'lsa bizning sarflaydigan vaqtimiz `proprotional` ekanligini bildiradi.

_Sweeper algorithm_ demak vaqt formulasi `O(n)`

Tasavvur qilaylik agar bizning algoritmimiz elementlar soni n ga teng bo'ladigan bo'lsa va keltirgan algoritmimiz 2-marta ko'p vaqt sarflasa, formula `O(2n)` ko'rinishida ifodalanadi.

lekin _Big Oh notation_ formulasi konstantalarga unchalik ham etibor bermayd va:

![Before console.clear](/assets/binary_search/5.png)

**Biz yozgan logika Algoritmimiz budany natijaga ham olib kelishi mumkin**
![Before console.clear](/assets/binary_search/6.png)

 
Biz bundan yaxshi ko'rsatkichga erishishimiz mumkinmi ?

Tasavvur qiling siz telefon raqamlari yozilgan katta kitobdan kimnidur izlayapsiz, va bir narsaga etibor qaratishimiz mumkin, **nomlar alifo tartibida**. Va biz buni bilgan holda shunchaki harflar ketma-ketligidan foydalanib qidirishni yengillatishimiz mumkin.

![Before console.clear](/assets/binary_search/7.png)

Deylik biz Mirzabek isimli shaxsning telefon raqamini qidyapmiz.  Bizning strategiaymiz bunday bo'lishi mumkin: Kitobning o'rtasini chamalab ochamiz: 

![Before console.clear](/assets/binary_search/8.png)

Agar siz ochgan varaqdan qaraydigan bo'lsak va siz bosh harfi siz qidiyotgan shaxs isming bosh harfidan oldin kelgan bo'lsa siz o'ng qismidan izlash kerakligini tushunasiz:

![Before console.clear](/assets/binary_search/9.png)

Va biz kuzatishimiz mumkin ki biz qidirsh doirasini yarmga qisqartirdik!

Va biz tushunamizki bu jaryonni yana qolgan o'ng qismi uchun ham takrorlashimiz mumkin. Va biz o'ng qismini ham chamalab o'rtasidan ochamiz. 
 
![Before console.clear](/assets/binary_search/10.png)

Va biz qidirgan harfimiz qolganning chap qismida ekanligini bilioshmiz mumkin ))

![Before console.clear](/assets/binary_search/11.png)

Va biz Mizobekni topamiz.

Bu strategiyamizning ishlash vaqti qanday ekan?

Biz buni _Ajratish, Bo'lish_ strategiyasi deylik.

Yuqoridagi holatda bu algoritm 3 ta testdan iborat bo'ldi, lekin eng qiyin sharoitda vaqt qanday bo'ladi?

![Before console.clear](/assets/binary_search/12.png)

Agar biz yuqoridagi grafga qaraydigan bo'lsak arraynign uzunligi oshgani sari ikkinchi strategiyamiz yaxshiroq eknaligini kuzatishimiz mumkin.   

Biz bu grafdan o'sishning buncha sekin ekanligini ko'rib uchubu formulani olshimiz mumkin.

![Before console.clear](/assets/binary_search/13.png)
