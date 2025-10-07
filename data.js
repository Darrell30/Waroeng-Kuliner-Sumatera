const foodData = [
    //Bagian Sumatra Utara
    {
        id: "soto-medan",
        title: "Soto Medan",
        origin: "Sumatra Utara",
        image: "img/soto_medan.jpg",
        description: "Soto Medan adalah hidangan sup berkuah santan khas Sumatera Utara, terkenal dengan kuahnya yang kental, gurih, dan aromanya rempah kuat. Daging sapi atau ayam yang empuk berpadu dengan kentang rebus, tauge, dan santan kental menghasilkan rasa lezat yang kaya. Kuahnya berwarna kekuningan, pedas ringan, dan wangi rempah seperti kemiri, jahe, dan serai membuat Soto Medan sangat menggugah selera. Hidangan ini biasanya disajikan hangat sebagai sarapan atau makan siang, lengkap dengan emping, sambal, dan perasan jeruk nipis.",
        history: "Soto Medan berasal dari kota Medan, ibu kota Sumatera Utara, dan lahir dari perpaduan kuliner Melayu, Batak, dan pengaruh pedagang India yang datang ke wilayah ini. Penggunaan santan sebagai bahan kuah membuat Soto Medan berbeda dari soto-soto daerah lain yang biasanya bening. Dahulu, soto ini disajikan dalam acara keluarga, perayaan adat, dan pasar tradisional sebagai hidangan bergizi dan menghangatkan tubuh. Kini, Soto Medan menjadi salah satu ikon kuliner Sumatera Utara yang terkenal di seluruh Indonesia karena cita rasanya yang kaya dan lezat.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa daging sapi atau ayam kampung, tulang untuk kaldu, kentang, tauge, dan daun bawang.</li>
            <li>Rebus daging dan tulang dalam air bersih hingga empuk, sisihkan kaldu, dan potong daging sesuai selera.</li>
            <li>Haluskan bumbu tradisional: bawang merah, bawang putih, jahe, kunyit, kemiri, ketumbar, lada, dan sedikit garam.</li>
            <li>Tumis bumbu halus dengan minyak kelapa hingga harum, lalu masukkan ke dalam kaldu bersama serai, daun salam, dan daun jeruk.</li>
            <li>Tambahkan santan kental ke dalam kuah, masak dengan api kecil sambil diaduk perlahan agar santan tidak pecah.</li>
            <li>Masukkan potongan daging, kentang rebus, dan tauge ke dalam kuah santan, masak hingga semua bahan matang dan bumbu meresap.</li>
            <li>Sajikan Soto Medan hangat dengan taburan bawang goreng, irisan daun bawang, emping atau kerupuk, dan sambal sesuai selera.</li>
            <li>Tambahkan perasan jeruk nipis sebelum disantap untuk rasa lebih segar.</li>
        </ul>`
    },
    {
        id: "mie-gomak",
        title: "Mie Gomak",
        origin: "Sumatra Utara",
        image: "img/mie_gomak.jpg",
        description: "Mie Gomak adalah hidangan khas Batak Toba yang dikenal dengan kuah santan kental dan pedas. Mie ini bertekstur kenyal, berpadu dengan daging, sayuran segar, dan aroma rempah yang kuat. Rasa kuahnya gurih, pedas, dan sedikit manis dari santan, menciptakan perpaduan cita rasa yang kaya. Hidangan ini biasanya disajikan hangat sebagai sarapan atau makan siang yang mengenyangkan dan penuh rasa khas Batak.",
        history: "Mie Gomak berasal dari tradisi kuliner masyarakat Batak Toba, Sumatera Utara, yang memanfaatkan bahan lokal seperti mie telur, santan, dan sayuran segar. Kata “gomak” berarti “digenggam” atau “diguncang” dalam bahasa Batak, merujuk pada cara mie dan bahan dicampur bersama kuah santan kental. Dahulu, hidangan ini dibuat untuk acara adat atau hidangan keluarga sehari-hari, menjadi simbol kekayaan rasa dan kebersamaan masyarakat Batak. Kini, Mie Gomak tetap populer sebagai ikon kuliner Batak yang terkenal karena perpaduan pedas, gurih, dan aromanya yang khas.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa mie telur atau mie lidi khas Batak, daging sapi atau ayam, sayuran seperti kacang panjang, daun bawang, dan tauge.</li>
            <li>Haluskan bumbu tradisional: bawang merah, bawang putih, cabai merah, cabai rawit, jahe, kunyit, kemiri, ketumbar, dan garam.</li>
            <li>Tumis bumbu halus dengan sedikit minyak kelapa hingga harum dan matang.</li>
            <li>Tambahkan daging yang telah direbus atau dipotong kecil, aduk hingga bumbu meresap.</li>
            <li>Tuang santan kental ke dalam tumisan bumbu dan daging, masak dengan api kecil hingga kuah mengental.</li>
            <li>Rebus mie hingga matang, tiriskan, dan letakkan di mangkuk saji.</li>
            <li>Siram kuah santan pedas yang telah matang ke atas mie, tambahkan sayuran seperti tauge, kacang panjang, dan daun bawang.</li>
            <li>Tambahkan taburan bawang goreng dan perasan jeruk nipis atau jeruk limau sesuai selera sebelum disajikan.</li> 
        </ul>`
    },
    {
        id: "babi-panggang",
        title: "Babi Panggang Karo",
        origin: "Sumatra Utara",
        image: "img/babi_panggang_karo.jpg",
        description: "Babi Panggang Karo adalah hidangan tradisional Suku Karo, Sumatera Utara, yang menonjolkan babi panggang dengan kulit renyah dan daging empuk bercita rasa gurih dan pedas-rempah. Bumbu khas Karo memberi aroma harum dan rasa khas yang kaya, berpadu dengan rasa asap dari arang kayu yang digunakan untuk memanggang. Hidangan ini biasanya disajikan dalam acara adat, pesta keluarga, atau perayaan tertentu, dan menjadi simbol kelezatan kuliner tradisional Karo.",
        history: "Babi Panggang Karo lahir dari tradisi kuliner masyarakat Suku Karo di dataran tinggi Sumatera Utara, yang terkenal dengan hutan dan peternakan babi. Dahulu, hidangan ini disiapkan untuk acara adat penting seperti pesta pernikahan, kematian, dan upacara adat lainnya. Teknik memanggang dengan arang kayu dan bumbu rempah khas Karo diwariskan turun-temurun, menghasilkan rasa gurih, aromatik, dan kulit renyah yang menjadi ciri khas. Kini, Babi Panggang Karo tetap menjadi ikon kuliner Suku Karo, menonjolkan kekayaan rasa dan tradisi memasak masyarakat Batak.",
        cookingSteps: `<ul>
            <li>Siapkan babi utuh atau potongan babi segar, bersihkan bulu dan organ dalam, lalu potong sesuai selera.</li>
            <li>Haluskan bumbu tradisional Karo: bawang merah, bawang putih, jahe, lengkuas, kunyit, kemiri, ketumbar, cabai merah, garam, dan gula merah.</li>
            <li>Lumuri seluruh permukaan babi dengan bumbu halus secara merata, diamkan beberapa jam agar bumbu meresap.</li>
            <li>Panaskan tungku atau panggangan tradisional dari arang kayu agar asapnya memberi aroma khas.</li>
            <li>Panggang babi dengan api sedang sambil dibolak-balik agar matang merata dan kulit berwarna kecokelatan dan renyah.</li>
            <li>Sesekali olesi babi dengan bumbu sisa agar tetap lembap dan bumbu meresap sempurna.</li>
            <li>Masak hingga daging matang sempurna, kulit renyah, dan aroma rempah keluar merata.</li>
            <li>Angkat, potong-potong, dan sajikan hangat bersama nasi, sambal andaliman, dan lalapan.</li>
        </ul>`
    },
    {
        id: "nasi-kentut",
        title: "Nasi Kentut",
        origin: "Sumatra Utara",
        image: "img/nasi_kentut.jpg",
        description: "Nasi Kentut adalah hidangan nasi khas Sumatera Utara yang dimasak dengan santan dan rempah seperti daun pandan, daun salam, dan serai. Nasi ini pulen, harum, dan lembut, dengan cita rasa gurih khas santan yang menyatu dengan bumbu alami. Hidangan ini biasanya disajikan hangat sebagai pendamping lauk tradisional Batak atau Melayu, seperti dendeng, ayam goreng, gulai, dan sambal andaliman.",
        history: "Nasi Kentut Sumatera Utara berasal dari tradisi kuliner masyarakat Batak dan Melayu di wilayah ini, yang mengolah nasi dengan santan untuk menambah cita rasa dan aroma harum. Nama “kentut” konon berasal dari bunyi khas yang muncul saat proses pengukusan besar, meski rasanya tetap lezat dan gurih. Hidangan ini dulu sering disajikan dalam acara adat, perayaan keluarga, dan pesta masyarakat sebagai simbol kelezatan dan kreativitas dalam memasak nasi. Kini, Nasi Kentut tetap menjadi hidangan ikonik Sumatera Utara yang dikenal karena aroma, tekstur, dan cita rasanya yang khas.",
        cookingSteps: `<ul>
            <li>Siapkan beras, santan kental, daun pandan, daun salam, serai, dan sedikit garam.</li>
            <li>Cuci beras hingga bersih, tiriskan, dan sisihkan.</li>
            <li>Didihkan santan bersama daun pandan, daun salam, serai, dan garam agar harum dan gurih.</li>
            <li>Masukkan beras ke dalam santan, aduk rata sehingga setiap butir terbalut santan.</li>
            <li>Kukus beras dalam kukusan tradisional hingga matang dan nasi menjadi pulen.</li>
            <li>Setelah matang, aduk nasi sebentar agar uap keluar dan tekstur nasi lebih empuk.</li>
            <li>Sajikan hangat dengan lauk khas Sumatera Utara seperti ayam goreng, gulai, dendeng, atau sambal andaliman.</li>
        </ul>`
    },
    {
        id: "ayam-andaliman",
        title: "Ayam Andaliman",
        origin: "Sumatra Utara",
        image: "img/ayam_andaliman.jpg",
        description: "Ayam Andaliman adalah hidangan khas Batak Toba, Sumatera Utara yang menggunakan ayam kampung dimasak dengan rempah andaliman — rempah khas Batak yang memberikan rasa pedas, hangat, dan sedikit numpang di lidah. Kuah atau bumbu ayamnya gurih, pedas, dan aromanya harum karena perpaduan andaliman dan bumbu tradisional Batak. Hidangan ini biasanya disajikan hangat sebagai lauk utama, cocok dipadukan dengan nasi pulen atau nasi santan khas Batak.",
        history: "Ayam Andaliman lahir dari tradisi kuliner masyarakat Batak Toba, khususnya di daerah dataran tinggi dan pesisir Danau Toba. Andaliman, yang juga dikenal sebagai “merica Batak,” menjadi ciri khas masakan Batak karena memberikan sensasi pedas dan aroma unik yang tidak dimiliki bumbu lain. Dahulu, Ayam Andaliman dibuat untuk acara adat, pesta keluarga, atau perayaan khusus, melambangkan rasa pedas yang hangat dan gurih khas Batak. Kini, hidangan ini menjadi ikon kuliner Batak Toba yang mewakili kekayaan rempah lokal dan keunikan rasa tradisional Sumatera Utara.",
        cookingSteps: `<ul>
            <li>Siapkan ayam kampung segar, potong sesuai selera, cuci bersih, dan tiriskan.</li>
            <li>Haluskan bumbu tradisional: bawang merah, bawang putih, jahe, kunyit, cabai merah, cabai rawit, garam, dan andaliman (rempah khas Batak).</li>
            <li>Tumis bumbu halus dengan sedikit minyak kelapa hingga harum.</li>
            <li>Masukkan potongan ayam, aduk hingga bumbu meresap dan ayam berubah warna.</li>
            <li>Tambahkan sedikit air atau kaldu ayam, masak dengan api kecil hingga ayam empuk dan bumbu meresap sempurna.</li>
            <li>Sesuaikan rasa dengan garam, lada, dan tambahan cabai jika ingin lebih pedas.</li>
            <li>Angkat dan sajikan Ayam Andaliman hangat, taburi sisa andaliman sangrai untuk aroma khas.</li>
            <li>Sajikan dengan nasi hangat atau Nasi Kentut Sumatera Utara agar cita rasa rempah lebih terasa.</li>
        </ul>`
    },
    //Bagian Sumatra Barat
    {
        id: "rendang",
        title: "Rendang Daging",
        origin: "Sumatra Barat",
        image: "img/rendang_sumatra.jpg",
        description: "Rendang adalah mahakarya kuliner Minangkabau yang dimasak dengan metode tradisional 'merandang', yaitu memasak perlahan dalam waktu lama hingga kuah santan mengering dan menjadi dedak.",
        history: "Sejak dahulu, Rendang menjadi bekal bagi para perantau Minang karena daya simpannya yang lama. Proses memasak di atas tungku kayu selama berjam-jam tidak hanya mengempukkan daging, tetapi juga berfungsi sebagai metode pengawetan alami.",
        cookingSteps: `<ul>
            <li>Siapkan daging sapi segar, potong melawan serat agar tidak hancur saat dimasak lama.</li>
            <li>Giling semua bumbu rempah hingga lumat menggunakan <strong>batu gilingan</strong>. Aroma dari bumbu yang digiling manual akan lebih keluar.</li>
            <li>Siapkan <strong>kuali besi</strong> tebal di atas <strong>tungku kayu bakar</strong>. Nyalakan api hingga bara apinya stabil.</li>
            <li>Tuang santan segar dari perasan kelapa tua. Masukkan bumbu yang telah digiling, beserta daun kunyit, daun jeruk, dan serai yang sudah digeprek.</li>
            <li>Aduk santan perlahan hingga mengeluarkan minyak (disebut 'minyak tanak'). Ini adalah tanda santan sudah matang sempurna.</li>
            <li>Masukkan potongan daging, lalu aduk terus tanpa henti. Proses ini disebut 'merandang'. Jaga api <strong>tungku</strong> agar tidak terlalu besar.</li>
            <li>Lanjutkan proses merandang selama 4-6 jam. Kesabaran adalah kunci utama. Rendang matang sempurna saat bumbunya mengering dan berwarna coklat gelap.</li>
        </ul>`
    },
    {
        id: "sate-padang",
        title: "Sate Padang",
        origin: "Sumatra Barat",
        image: "img/sate_padang.jpg",
        description: "Sate Padang adalah kuliner khas Sumatera Barat yang dikenal dengan sate daging sapi atau jeroan yang disajikan dengan kuah kental khas Padang. Kuahnya berwarna kuning kecokelatan, pedas, dan gurih karena campuran rempah seperti kunyit, jahe, lengkuas, dan ketumbar, serta sedikit asam dari asam kandis. Dagingnya empuk, harum, dan bumbu meresap sempurna. Sate Padang biasanya disajikan hangat dengan ketupat atau lontong, sehingga cocok sebagai makanan utama atau santapan malam.",
        history: "Sate Padang berasal dari kota Padang Panjang dan sekitarnya di Sumatera Barat. Hidangan ini lahir dari kreativitas masyarakat Minangkabau dalam mengolah daging sapi dan jeroan menjadi sajian lezat berkuah rempah. Kata “Padang” menunjukkan asal daerahnya, sedangkan teknik memasak kuah kental dengan bumbu rempah merupakan ciri khas kuliner Minangkabau yang kaya rasa. Dahulu, Sate Padang disajikan dalam acara adat, pasar malam, dan festival kuliner sebagai hidangan cepat saji yang nikmat. Kini, Sate Padang menjadi ikon kuliner Minangkabau yang terkenal di seluruh Indonesia dan dicari oleh wisatawan karena perpaduan rasa pedas, gurih, dan aromanya yang khas.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa daging sapi (bagian paha atau sandung lamur) atau jeroan sapi yang dipotong kecil-kecil, serta tusuk sate dari bambu.</li>
            <li>Rebus daging hingga empuk dalam air mendidih, kemudian angkat dan tiriskan.</li>
            <li>Haluskan bumbu khas Padang: bawang merah, bawang putih, kunyit, jahe, lengkuas, ketumbar, cabai merah, dan asam kandis.</li>
            <li>Tumis bumbu halus hingga harum, kemudian masukkan sedikit kaldu rebusan daging untuk membuat kuah kental.</li>
            <li>Celupkan potongan daging ke dalam bumbu, diamkan beberapa saat agar meresap.</li>
            <li>Tusuk daging dengan bambu untuk sate, lalu bakar di atas bara arang sambil sesekali diolesi kuah bumbu agar tetap lembap dan beraroma harum.</li>
            <li>Siapkan kuah satenya: campur kaldu daging, bumbu halus, tepung beras sebagai pengental, dan masak hingga kental dan berwarna kuning kecokelatan.</li>
            <li>Sajikan Sate Padang di piring, siram kuah kental di atas sate, taburi bawang goreng, dan hidangkan bersama ketupat atau lontong.</li>
        </ul>`
    },
    {
        id: "dendeng-batokok",
        title: "Dendeng Batokok",
        origin: "Sumatra Barat",
        image: "img/dendeng_batokok.jpg",
        description: "Dendeng Batokok adalah hidangan khas Minangkabau yang terbuat dari daging sapi tipis yang ditumbuk, dibumbui rempah khas Padang, dan dipanggang hingga kering tetapi tetap empuk. Rasanya gurih, sedikit pedas, dan aromanya harum karena rempah yang meresap. Tekstur dendeng yang tipis dan kenyal membuat setiap gigitan mudah dikunyah dan sangat cocok dipadukan dengan sambal lado hijau atau nasi putih hangat. Hidangan ini sering disajikan sebagai lauk istimewa dalam acara adat atau santapan harian di Sumatera Barat.",
        history: "Dendeng Batokok berasal dari budaya kuliner Minangkabau, khususnya Sumatera Barat, dan dikenal sejak abad ke-19. Kata “batokok” berarti “ditumbuk” dalam bahasa Minang, merujuk pada teknik menipiskan dan melunakkan daging agar bumbu meresap sempurna. Dahulu, dendeng ini dibuat sebagai cara mengawetkan daging sapi agar tahan lama tanpa pendingin, sekaligus menjadi hidangan istimewa saat perayaan adat, pesta pernikahan, atau jamuan tamu penting. Kini, Dendeng Batokok menjadi ikon kuliner Minangkabau yang mewakili kelezatan, kreativitas, dan kearifan lokal dalam memanfaatkan bahan lokal menjadi hidangan lezat dan tahan lama.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa daging sapi bagian has atau sengkel yang dipotong tipis memanjang sekitar 0,5 cm.</li>
            <li>Rebus daging sebentar dalam air mendidih dengan sedikit garam hingga setengah empuk, kemudian angkat dan tiriskan.</li>
            <li>Haluskan bumbu tradisional Minangkabau: bawang merah, bawang putih, cabai merah, cabai rawit, jahe, lengkuas, ketumbar, dan sedikit gula merah.</li>
            <li>Tumis bumbu halus dengan sedikit minyak kelapa hingga harum.</li>
            <li>Oleskan bumbu tumis ke seluruh permukaan daging rebus secara merata.</li>
            <li>Siapkan alat pemukul kayu atau “batokok” untuk menumbuk daging tipis-tipis agar bumbu meresap sempurna dan tekstur dendeng lebih empuk.</li>
            <li>Panaskan wajan anti lengket atau datar, panggang dendeng sambil dibolak-balik hingga kering dan berwarna cokelat keemasan.</li>
            <li>Angkat dan sajikan Dendeng Batokok dengan taburan bawang goreng dan pelengkap seperti sambal lado hijau atau nasi hangat.</li>
        
        </ul>`
    },
    {
        id: "gulai-itiak",
        title: "Gulai Itiak Lado Mudo",
        origin: "Sumatra Barat",
        image: "img/gulai_itiak.jpg",
        description: "Gulai Itiak Lado Mudo adalah hidangan tradisional Minangkabau dari Sumatera Barat yang menggunakan daging bebek sebagai bahan utama, dimasak dengan bumbu gulai pedas hijau (lado mudo). Rasa gulainya pedas, gurih, dan segar dengan aroma khas rempah Minang. Daging itik yang empuk menyerap bumbu sehingga setiap gigitan kaya rasa. Hidangan ini biasanya disajikan hangat sebagai lauk utama bersama nasi putih atau ketupat, terutama dalam acara adat dan perayaan keluarga.",
        history: "Gulai Itiak Lado Mudo berasal dari tradisi kuliner Minangkabau, di mana masyarakat pedesaan memanfaatkan itik sebagai bahan utama lauk yang mudah didapat dari peternakan lokal. Kata “lado mudo” berarti cabai hijau, menandakan rasa pedas segar yang menjadi ciri khas gulai ini. Hidangan ini awalnya dibuat untuk acara adat, kenduri, dan perayaan keluarga sebagai simbol kemakmuran dan rasa syukur. Penggunaan santan, rempah, dan cabai hijau mencerminkan kekayaan kuliner Minangkabau yang memadukan rasa gurih, pedas, dan aroma rempah alami. Hingga kini, Gulai Itiak Lado Mudo tetap menjadi ikon masakan Minang yang populer di rumah makan tradisional maupun festival kuliner.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa itik (bebek) segar yang sudah dibersihkan, buang bulu dan isi perut, lalu potong sesuai selera.</li>
            <li>Haluskan bumbu tradisional: bawang merah, bawang putih, cabai hijau besar (lado mudo), cabai rawit hijau, jahe, lengkuas, kunyit, kemiri, dan sedikit garam.</li>
            <li>Panaskan sedikit minyak kelapa, tumis bumbu halus hingga harum dan matang.</li>
            <li>Masukkan potongan itik ke dalam wajan, aduk hingga daging tertutup bumbu rata.</li>
            <li>Tambahkan santan kental, daun salam, daun jeruk, serai, dan asam kandis untuk aroma dan rasa khas.</li>
            <li>Masak dengan api kecil hingga daging itik empuk dan bumbu meresap sempurna.</li>
            <li>Pastikan kuah gulai tetap agak kental dan berwarna hijau segar dari cabai hijau (lado mudo).</li>
            <li>Angkat dan sajikan Gulai Itiak Lado Mudo hangat dengan nasi putih atau ketupat.</li>
        </ul>`
    },
    {
        id: "ayam-pop",
        title: "Ayam Pop",
        origin: "Sumatra Barat",
        image: "img/ayam_pop.jpeg",
        description: "Ayam Pop adalah hidangan khas Minangkabau yang menonjolkan ayam goreng berwarna pucat dengan rasa gurih dan lembut. Berbeda dari ayam goreng biasa, Ayam Pop dimasak terlebih dahulu dengan bumbu rempah dan santan, kemudian digoreng sebentar untuk mempertahankan kelembutan dagingnya. Kuah bening yang menyertainya gurih dan ringan, cocok dipadukan dengan sambal lado merah. Tekstur ayam lembut, empuk, dan aromanya khas rempah Minang, sehingga menjadi favorit dalam masakan rumahan maupun restoran Padang.",
        history: "Ayam Pop berasal dari tradisi kuliner Minangkabau, khususnya Sumatera Barat, dan dikembangkan sebagai versi ayam goreng yang lembut dan gurih. Konon, hidangan ini awalnya dibuat untuk tamu istimewa dalam acara adat, sehingga daging tetap empuk dan kuahnya ringan agar lebih elegan saat disajikan. Nama “Pop” sendiri merujuk pada teknik memasak yang membuat ayam tetap pucat, berbeda dengan ayam goreng biasa yang kecokelatan. Kini, Ayam Pop menjadi ikon masakan Minang yang populer di seluruh Indonesia, terkenal karena kelembutan daging dan kuah gurihnya yang khas.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa ayam kampung segar, potong sesuai selera, cuci bersih dan tiriskan.</li>
            <li>Haluskan bumbu: bawang merah, bawang putih, jahe, lengkuas, kemiri, ketumbar, garam, dan sedikit gula.</li>
            <li>Rebus ayam dengan bumbu halus, serai, daun salam, dan santan encer hingga ayam empuk dan bumbu meresap.</li>
            <li>Setelah ayam empuk, angkat dan tiriskan, jangan terlalu lama agar tidak hancur.</li>
            <li>Panaskan sedikit minyak atau air panas untuk proses pemanggangan sebentar (tradisional menggunakan wajan datar) agar permukaan ayam tetap lembut namun matang.</li>
            <li>Ayam Pop disajikan dengan kuah santan bening khas Minang yang gurih, bukan kuah gulai pekat.</li>
            <li>Tambahkan sambal lado merah atau sambal rawit sesuai selera saat menyajikan.</li>
            <li>Sajikan Ayam Pop hangat dengan nasi putih, lalapan, dan taburan bawang goreng.</li>
        </ul>`
    },
    //Bagian Sumatra Selatan
    {
        id: "pempek",
        title: "Pempek",
        origin: "Sumatra Selatan",
        image: "img/pempek_palembang.jpg",
        description: "Pempek adalah hidangan ikonik Palembang. Adonan ikan giling segar dan tepung sagu diuleni secara manual untuk menjaga tekstur kenyalnya, lalu disajikan dengan kuah cuko yang diracik dari gula batok.",
        history: "Kisah pempek berawal di tepian Sungai Musi, di mana para 'apek' (lelaki tua Tionghoa) mengolah hasil tangkapan ikan sungai menjadi hidangan lezat. Adonan diuleni dengan tangan dan direbus dalam belanga besar di atas api kayu.",
        cookingSteps: `<ul>
            <li>Giling daging ikan tenggiri segar menggunakan alat penggiling manual. Campurkan dengan air dingin sedikit demi sedikit, uleni dengan telapak tangan hingga adonan terasa 'berat' dan menyatu.</li>
            <li>Di atas papan kayu, taburi tepung sagu. Tuang adonan ikan, lalu campurkan perlahan dengan sagu hingga tidak lengket. Jangan diuleni terlalu kuat agar pempek tidak keras.</li>
            <li>Bentuk adonan menjadi lenjer atau isi dengan kuning telur untuk membuat kapal selam.</li>
            <li>Didihkan air dalam <strong>belanga</strong> (panci tanah liat) atau panci besar di atas <strong>tungku</strong>.</li>
            <li>Rebus pempek hingga mengapung. Angkat menggunakan saringan bambu dan tiriskan.</li>
            <li>Untuk kuah cuko, rebus gula batok Linggau, cabai rawit yang sudah diulek kasar, bawang putih, dan asam jawa dalam kuali terpisah. Masak hingga mengental.</li>
            <li>Goreng pempek sesaat sebelum disajikan, lalu potong-potong dan siram dengan kuah cuko.</li>
        </ul>`
    },
    {
        id: "mie-celor",
        title: "Mie Celor",
        origin: "Sumatra Selatan",
        image: "img/mie_celor_palembang.jpeg",
        description: "Mie Celor adalah kuliner khas Palembang berupa mie kuning tebal yang disajikan dengan kuah santan gurih dan kaldu udang yang kental. Cita rasanya perpaduan antara gurih, manis, dan sedikit asin, dengan aroma rempah dan udang yang kuat. Hidangan ini biasanya disajikan bersama tauge, telur rebus, dan udang, memberikan sensasi rasa yang kaya dan lembut di lidah. Tekstur kuahnya yang kental membuat Mie Celor berbeda dari kebanyakan mie kuah di Indonesia, menjadikannya ikon kuliner khas Sumatera Selatan yang digemari dari generasi ke generasi.",
        history: "Mie Celor berasal dari kota Palembang, Sumatera Selatan, dan telah ada sejak masa perdagangan maritim di Sungai Musi pada abad ke-19. Nama “celor” berasal dari bahasa Palembang yang berarti dicelup sebentar dalam air panas, menggambarkan cara memasak mie yang hanya direbus sebentar agar tidak lembek. Awalnya, Mie Celor dibuat oleh pedagang Tionghoa lokal yang beradaptasi dengan bahan-bahan setempat seperti santan dan udang sungai, sehingga tercipta rasa khas Palembang. Makanan ini kemudian menjadi sajian sarapan dan kuliner kebanggaan masyarakat Palembang, melambangkan perpaduan budaya Melayu dan Tionghoa dalam cita rasa nusantara.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa mie kuning basah, udang segar, santan kental, telur rebus, tauge, dan daun seledri.</li>
            <li>Rebus mie kuning sebentar hingga empuk, tiriskan, lalu sisihkan.</li>
            <li>Rebus udang dalam air hingga matang, lalu angkat dan pisahkan daging udang dari kulit dan kepalanya. Simpan air rebusannya sebagai kaldu.</li>
            <li>Haluskan bumbu tradisional berupa bawang merah, bawang putih, merica, dan udang kering, lalu tumis dengan sedikit minyak hingga harum.</li>
            <li>Masukkan bumbu tumis ke dalam kaldu udang, tambahkan santan kental, garam, dan sedikit gula untuk menyeimbangkan rasa.</li>
            <li>Masak dengan api kecil sambil diaduk perlahan agar santan tidak pecah hingga kuah mengental dan beraroma gurih.</li>
            <li>Siapkan mangkuk saji, tata mie dan tauge di dasar mangkuk, lalu siram dengan kuah santan kental panas.</li>
            <li>Tambahkan potongan telur rebus, udang rebus, daun seledri, dan bawang goreng di atasnya sebagai pelengkap.</li>
            <li>Sajikan hangat dengan perasan jeruk kunci atau sambal untuk cita rasa lebih segar dan pedas.</li>
        </ul>`
    },
    {
        id: "laksan",
        title: "Laksan",
        origin: "Sumatra Selatan",
        image: "img/laksan_palembang.jpg",
        description: "Laksan adalah makanan tradisional khas Palembang yang terbuat dari adonan ikan tenggiri dan tepung sagu, mirip dengan pempek, namun disajikan dengan kuah santan berbumbu rempah. Rasanya gurih, sedikit pedas, dan kaya aroma santan, dengan tekstur kenyal dari potongan laksan. Warna kuahnya yang kuning keoranyean berasal dari campuran kunyit dan cabai merah. Laksan biasanya dinikmati sebagai sarapan atau hidangan utama, dan menjadi salah satu kuliner ikonik Palembang selain pempek dan model.",
        history: "Laksan berasal dari tradisi kuliner masyarakat Palembang yang berkembang dari budaya sungai dan hasil tangkapan ikan yang melimpah di Sungai Musi. Awalnya, masyarakat membuat pempek sebagai makanan pokok, lalu mengolah variasinya dengan kuah santan agar lebih mengenyangkan dan cocok disantap hangat di pagi hari. Hidangan ini dipengaruhi oleh perpaduan budaya Melayu dan Tionghoa, menciptakan cita rasa khas Palembang yang unik — gurih, pedas, dan lembut. Hingga kini, Laksan menjadi simbol kuliner rumahan dan sering disajikan dalam acara adat, hari raya, maupun jamuan tamu kehormatan di Sumatera Selatan.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa ikan tenggiri segar yang digiling halus dan dicampur dengan tepung sagu, garam, dan sedikit air hingga menjadi adonan kenyal seperti pempek.</li>
            <li>Bentuk adonan memanjang seperti pempek lenjer kecil, lalu rebus dalam air mendidih hingga mengapung dan matang. Angkat dan tiriskan.</li>
            <li>Untuk membuat kuahnya, haluskan bumbu tradisional berupa bawang merah, bawang putih, cabai merah, kemiri, dan kunyit.</li>
            <li>Tumis bumbu halus dengan sedikit minyak hingga harum, lalu tambahkan santan kental dan air secukupnya.</li>
            <li>Masukkan garam, gula merah, dan daun salam untuk menambah aroma dan rasa gurih manis khas Palembang.</li>
            <li>Masak dengan api kecil sambil diaduk agar santan tidak pecah hingga kuah mengental dan berwarna oranye kekuningan.</li>
            <li>Iris laksan rebus menjadi potongan miring, lalu tata dalam mangkuk saji.</li>
            <li>Siram dengan kuah santan panas, kemudian taburi bawang goreng dan potongan daun seledri di atasnya.</li>
            <li>Sajikan hangat sebagai hidangan utama, biasanya disantap bersama sambal atau kerupuk khas Palembang.</li>
        </ul>`
    },
    {
        id: "maksuba",
        title: "Kue Maksuba",
        origin: "Sumatra Selatan",
        image: "img/maksuba_palembang.jpeg",
        description: "Kue Maksuba adalah kue tradisional khas Palembang, Sumatera Selatan, yang memiliki rasa manis lembut dan tekstur padat berlapis. Terbuat dari bahan dasar telur, gula, susu, dan mentega tanpa tepung, kue ini dikenal karena kelembutannya dan aroma gurih manis yang khas. Warna kuning keemasan dan lapisan-lapisan yang rapi menjadi ciri utama Kue Maksuba. Setiap potongannya menghadirkan cita rasa kaya dan legit, menjadikannya simbol kemewahan dalam kuliner tradisional Palembang.",
        history: "Kue Maksuba memiliki akar sejarah dari masa Kesultanan Palembang Darussalam dan sering disajikan sebagai hidangan istimewa bagi tamu kehormatan atau pejabat kerajaan. Nama “Maksuba” berasal dari bahasa Arab maqsudah, yang berarti “maksud” atau “tujuan mulia”, melambangkan doa dan penghormatan bagi tamu. Karena bahannya menggunakan banyak telur dan tanpa campuran tepung, kue ini dahulu hanya bisa dibuat oleh kalangan bangsawan atau orang berada. Hingga kini, Kue Maksuba tetap menjadi ikon kuliner tradisional Sumatera Selatan yang melambangkan kemakmuran, keikhlasan, dan keindahan dalam setiap lapisannya.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa telur bebek atau telur ayam sebanyak 20 butir, gula halus, mentega cair, dan susu kental manis.</li>
            <li>Kocok telur dan gula menggunakan pengocok tangan tradisional (bukan mixer) hingga gula larut dan adonan mengembang ringan.</li>
            <li>Tambahkan mentega cair dan susu kental manis sedikit demi sedikit sambil terus diaduk hingga adonan halus dan rata.</li>
            <li>Siapkan loyang yang sudah dioles mentega dan dilapisi kertas roti agar kue tidak lengket.</li>
            <li>Panaskan oven tradisional atau tungku bara (seperti tungku tanah liat) untuk memanggang lapisan demi lapisan.</li>
            <li>Tuang satu sendok sayur adonan ke dalam loyang, ratakan, lalu panggang hingga kecokelatan di permukaan.</li>
            <li>Setelah lapisan pertama matang, tuang kembali adonan untuk lapisan berikutnya, lalu panggang kembali hingga matang — ulangi proses ini hingga adonan habis (biasanya 8–10 lapisan).</li>
            <li>Setelah semua lapisan matang, dinginkan kue hingga set sebelum dipotong dan disajikan.</li>
            <li>Sajikan Kue Maksuba sebagai hidangan khas saat hari besar seperti Idul Fitri, pernikahan, atau penyambutan tamu kehormatan.</li>
        </ul>`
    },
    {
        id: "tekwan",
        title: "Tekwan",
        origin: "Sumatra Selatan",
        image: "img/tekwan_palembang.jpeg",
        description: "Tekwan adalah sup ikan khas Palembang yang berisi bola-bola kecil dari adonan ikan tenggiri dan sagu, disajikan dalam kuah kaldu udang bening dengan pelengkap soun, jamur kuping, dan bengkuang. Rasa kuahnya gurih segar dengan aroma udang yang kuat, berpadu sempurna dengan lembutnya bola ikan. Tekwan biasanya disajikan hangat sebagai hidangan utama atau camilan berat, terutama pada sore hari. Teksturnya yang ringan dan cita rasa khas laut membuatnya menjadi salah satu ikon kuliner Palembang yang paling dikenal di seluruh Indonesia.",
        history: "Tekwan berasal dari tradisi masyarakat Palembang yang memanfaatkan hasil sungai dan laut yang melimpah, khususnya ikan tenggiri. Hidangan ini dipercaya terinspirasi dari masakan Tionghoa seperti bakso ikan atau fish ball soup, yang kemudian diadaptasi oleh masyarakat lokal dengan bahan dan rempah khas Palembang. Nama “Tekwan” diyakini berasal dari ungkapan dalam bahasa Hokkien tâi-wan (打丸) yang berarti “membentuk bulatan”. Awalnya, Tekwan hanya disajikan pada acara keluarga besar atau jamuan istimewa, tetapi kini telah menjadi makanan sehari-hari yang mencerminkan perpaduan budaya Melayu dan Tionghoa di Sumatera Selatan.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa daging ikan tenggiri segar yang digiling halus dan dicampur dengan tepung sagu, garam, dan air es hingga menjadi adonan kenyal seperti pempek.</li>
            <li>Bentuk adonan menjadi bulatan kecil seukuran kelereng menggunakan sendok, lalu masukkan langsung ke dalam air mendidih hingga mengapung dan matang. Angkat dan tiriskan.</li>
            <li>Untuk kuahnya, rebus kepala dan kulit udang dalam air hingga mendidih untuk menghasilkan kaldu udang yang gurih alami.</li>
            <li>Haluskan bumbu berupa bawang putih, merica, dan garam, lalu tumis dengan sedikit minyak hingga harum.</li>
            <li>Masukkan bumbu tumis ke dalam kaldu udang, tambahkan irisan jamur kuping, bengkuang, dan ebi yang sudah direndam.</li>
            <li>Masak kuah hingga semua bahan matang dan aroma udang menyatu sempurna dengan rempah.</li>
            <li>Siapkan mangkuk saji, masukkan bulatan tekwan, lalu siram dengan kuah panas.</li>
            <li>Tambahkan soun, irisan seledri, daun bawang, dan taburan bawang goreng di atasnya.</li>
            <li>Sajikan hangat dengan sambal dan sedikit perasan jeruk kunci untuk menambah cita rasa segar.</li>
        </ul>`
    },
    //Bagian Aceh
    {
        id: "kue-timphan",
        title: "Kue Timphan",
        origin: "Aceh",
        image: "img/kue_timphan_aceh.jpg",
        description: "Kue Timphan adalah kue tradisional khas Aceh yang terbuat dari campuran pisang raja dan tepung ketan, diisi dengan kelapa parut manis atau selai srikaya, lalu dibungkus daun pisang dan dikukus hingga matang. Teksturnya lembut, lengket, dan harum dengan cita rasa manis gurih yang khas. Kue ini biasanya berwarna hijau kekuningan dari daun pisang yang membungkusnya, dan aromanya sangat menggugah selera. Timphan sering disajikan dalam acara adat, hari raya Idul Fitri, atau saat menyambut tamu istimewa.",
        history: "Kue Timphan telah menjadi bagian penting dari budaya kuliner masyarakat Aceh sejak masa Kesultanan Aceh. Nama “Timphan” berasal dari kata timphoe, yang berarti “menindih” atau “menyatu”, menggambarkan proses pembentukan kue yang ditekan dan dilipat dalam daun pisang. Kue ini dulunya hanya dibuat saat perayaan besar atau acara adat, melambangkan kehormatan dan kehangatan tuan rumah terhadap tamunya. Penggunaan bahan lokal seperti pisang, kelapa, dan daun pisang mencerminkan kekayaan hasil alam Aceh serta kearifan masyarakatnya dalam mengolah bahan sederhana menjadi hidangan istimewa. Hingga kini, Timphan tetap menjadi simbol keramahan dan kebanggaan kuliner masyarakat Aceh.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa tepung ketan, pisang raja yang sudah matang, santan kental, dan minyak kelapa.</li>
            <li>Haluskan pisang raja menggunakan ulekan batu hingga menjadi adonan lembut, lalu campur dengan tepung ketan sedikit demi sedikit hingga kalis dan bisa dibentuk.</li>
            <li>Tambahkan sedikit santan dan minyak kelapa agar adonan lebih lembut dan tidak lengket.</li>
            <li>Siapkan daun pisang muda, layukan sebentar di atas api agar lentur dan mudah dilipat.</li>
            <li>Untuk isiannya, tumis kelapa parut dengan gula merah dan sedikit daun pandan hingga harum dan mengering — bisa juga diganti dengan selai srikaya khas Aceh.</li>
            <li>Ambil selembar daun pisang, olesi sedikit minyak, letakkan sepotong adonan, pipihkan, lalu isi dengan kelapa gula atau selai srikaya, kemudian lipat rapat seperti lontong.</li>
            <li>Kukus Timphan dalam dandang tradisional selama kurang lebih 30–40 menit hingga matang dan mengeluarkan aroma harum khas pisang dan daun.</li>
            <li>Angkat, biarkan agak dingin, dan sajikan Timphan dalam bungkus daun pisang untuk mempertahankan aroma dan kelembutannya.</li>
        </ul>`
    },
    {
        id: "keumamah",
        title: "Keumamah",
        origin: "Aceh",
        image: "img/keumamah_aceh.jpg",
        description: "Keumamah, atau dikenal juga sebagai Ikan Kayu, adalah masakan tradisional khas Aceh yang terbuat dari ikan tongkol yang dikeringkan, lalu dimasak kembali dengan bumbu rempah khas Aceh. Rasanya gurih, pedas, dan sedikit asam dengan aroma rempah yang kuat. Teksturnya agak keras di luar namun lembut di dalam karena proses pengeringan alami. Keumamah sering dijadikan lauk utama dalam hidangan harian masyarakat Aceh, terutama bagi mereka yang tinggal di pesisir atau yang sering bepergian jauh karena daya tahannya yang lama tanpa pengawet.",
        history: "Keumamah memiliki akar sejarah yang panjang sejak masa perang Aceh melawan kolonial Belanda. Makanan ini dibuat karena sifatnya yang tahan lama dan mudah dibawa oleh para pejuang Aceh ke medan perang. Proses pengeringan ikan dilakukan untuk mencegah pembusukan di daerah tropis tanpa lemari pendingin. Selain itu, penggunaan asam sunti dan rempah kuat berfungsi sebagai pengawet alami dan penambah cita rasa. Keumamah menjadi simbol ketangguhan, keuletan, dan kemandirian masyarakat Aceh dalam menghadapi masa sulit. Hingga kini, Keumamah tetap menjadi hidangan kebanggaan yang mencerminkan warisan kuliner dan semangat perjuangan rakyat Aceh.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa ikan tongkol segar (atau ikan kayu khas Aceh), garam, dan air secukupnya.</li>
            <li>Rebus ikan tongkol hingga matang, lalu angkat dan dinginkan.</li>
            <li>Setelah dingin, ikan dijemur di bawah sinar matahari selama 1–2 hari hingga benar-benar kering dan keras — proses ini disebut “pengayuan”.</li>
            <li>Setelah kering, iris ikan tipis-tipis atau suwir halus sesuai selera, lalu sisihkan.</li>
            <li>Haluskan bumbu tradisional berupa bawang merah, bawang putih, cabai merah, ketumbar, kunyit, jahe, dan asam sunti (asam khas Aceh dari belimbing wuluh kering).</li>
            <li>Tumis bumbu halus dengan minyak kelapa hingga harum dan matang sempurna.</li>
            <li>Masukkan ikan kering yang telah disuwir, aduk hingga bumbu meresap dan ikan menjadi kering kembali dengan warna kuning kecokelatan.</li>
            <li>Masak hingga bumbu benar-benar meresap dan sedikit berminyak, lalu angkat.</li>
            <li>Sajikan Keumamah dengan nasi hangat; hidangan ini bisa tahan berhari-hari tanpa basi, cocok untuk bekal perjalanan jauh.</li>  
        </ul>`
    },
        {
        id: "sate-matang",
        title: "Sate Matang",
        origin: "Aceh",
        image: "img/sate_matang_aceh.jpg",
        description: "Sate Matang adalah kuliner khas Aceh yang berasal dari daerah Matang, Kabupaten Bireuen, dengan ciri khas daging sapi atau kambing yang dibakar dan disajikan bersama kuah kari santan gurih. Berbeda dengan sate dari daerah lain, Sate Matang memiliki aroma rempah yang kuat dari jintan, ketumbar, dan kayu manis, serta cita rasa pedas gurih yang khas Aceh. Kuahnya yang kental dan harum membuat setiap potongan daging terasa lembut dan kaya rasa. Hidangan ini sering dijadikan santapan malam atau menu utama dalam acara keluarga dan jamuan tamu.",
        history: "Sate Matang berasal dari kota kecil Matang Geulumpang Dua di Kabupaten Bireuen, Aceh. Makanan ini muncul pada awal abad ke-20 sebagai hasil perpaduan budaya kuliner Melayu dan Timur Tengah yang masuk ke Aceh melalui jalur perdagangan. Awalnya, sate ini dibuat oleh para pedagang Aceh untuk sajian istimewa bagi tamu atau acara keagamaan. Keunikan Sate Matang terletak pada dua tahap pemasakan: daging dimasak dengan bumbu terlebih dahulu (pra-matang), baru kemudian dibakar — inilah yang memberi nama “Matang”. Hingga kini, Sate Matang menjadi ikon kuliner Aceh yang terkenal di seluruh Indonesia dan simbol keramahan masyarakat pesisir utara Aceh.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa daging sapi segar (bisa juga kambing) yang dipotong kecil-kecil, tusuk menggunakan tusuk sate dari bambu.</li>
            <li>Haluskan bumbu tradisional berupa bawang merah, bawang putih, ketumbar, jintan, lada, jahe, lengkuas, serai, dan garam — tumbuk menggunakan lesung batu agar aromanya lebih kuat.</li>
            <li>Campur potongan daging dengan bumbu halus dan sedikit minyak kelapa, lalu diamkan (marinasi) selama 1–2 jam agar bumbu meresap sempurna.</li>
            <li>Panggang sate di atas bara arang kelapa sambil dibolak-balik hingga matang dan mengeluarkan aroma harum khas bakaran tradisional.</li>
            <li>Untuk kuahnya, rebus kaldu daging dengan santan, bawang merah, bawang putih, ketumbar, jintan, lada, daun salam, dan kayu manis hingga mendidih dan harum.</li>
            <li>Tambahkan potongan kentang rebus yang dihaluskan ke dalam kuah untuk membuat tekstur sedikit kental, kemudian masak kembali hingga bumbu merata.</li>
            <li>Sajikan sate di piring, siram dengan kuah kari santan panas, lalu taburi bawang goreng dan irisan daun seledri di atasnya.</li>
            <li>Sate Matang biasanya disajikan dengan ketupat atau nasi putih hangat sebagai pelengkap.</li>
        </ul>`
    },
        {
        id: "sie_reuboh",
        title: "Sie Reuboh",
        origin: "Aceh",
        image: "img/sie_reuboh_aceh.jpeg",
        description: "Sie Reuboh adalah masakan tradisional khas Aceh Besar yang terbuat dari daging sapi dimasak dengan bumbu rempah dan asam sunti tanpa santan. Rasanya gurih, asam segar, dan sedikit pedas dengan aroma rempah yang kuat. Tekstur dagingnya empuk dan berminyak alami karena dimasak lama hingga bumbu meresap sempurna. Sie Reuboh sering dijadikan lauk khas dalam acara adat atau hari besar, dan dapat bertahan lama tanpa basi karena kandungan asam dan minyaknya yang berfungsi sebagai pengawet alami.",
        history: "Sie Reuboh berasal dari wilayah Aceh Besar dan telah dikenal sejak masa kesultanan sebagai makanan awetan tradisional. Kata “reuboh” dalam bahasa Aceh berarti “direbus” atau “dimasak hingga layu”. Masyarakat Aceh pada zaman dahulu menciptakan hidangan ini untuk mengawetkan daging hasil qurban atau panen ternak, karena proses perebusan dengan asam sunti dan minyak mampu membuat daging tahan hingga berhari-hari bahkan berminggu. Selain sebagai lauk harian, Sie Reuboh juga memiliki nilai budaya tinggi — sering disajikan dalam kenduri, perayaan, dan jamuan tamu kehormatan. Hingga kini, hidangan ini tetap menjadi simbol warisan kuliner Aceh yang sarat makna dan cita rasa autentik.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa daging sapi segar (biasanya bagian berlemak seperti sandung lamur atau iga) yang dipotong sedang-sedang.</li>
            <li>Rebus daging sebentar hingga setengah matang untuk menghilangkan kotoran, lalu tiriskan.</li>
            <li>Haluskan bumbu tradisional berupa bawang merah, bawang putih, cabai merah, ketumbar, jahe, kunyit, lengkuas, dan garam — tumbuk menggunakan ulekan batu agar aromanya kuat.</li>
            <li>Masukkan daging ke dalam wajan besar tanah liat atau periuk besi, tambahkan bumbu halus, air asam sunti (asam khas Aceh dari belimbing wuluh kering), dan sedikit minyak kelapa.</li>
            <li>Masak dengan api kecil tanpa santan hingga air menyusut dan daging berubah warna menjadi kecokelatan, sambil diaduk perlahan agar tidak gosong.</li>
            <li>Biarkan hingga bumbu meresap sempurna dan daging menjadi empuk serta berminyak alami dari lemaknya sendiri.</li>
            <li>Setelah matang, biarkan dingin — Sie Reuboh biasanya disimpan beberapa hari agar rasanya semakin meresap dan nikmat.</li>
            <li>Sajikan hangat bersama nasi putih atau nasi gurih khas Aceh.</li>
        </ul>`
    },
    {
        id: "mie-aceh",
        title: "Mie Aceh",
        origin: "Aceh",
        image: "img/mie_aceh.jpg",
        description: "Mie Aceh adalah cerminan jalur rempah di ujung Sumatra. Mie kuning tebal buatan sendiri ditumis di atas wajan besi dengan bumbu kari yang digiling dadakan, menghasilkan aroma yang tajam dan menggugah selera.",
        history: "Resep Mie Aceh adalah warisan dari interaksi budaya para pedagang Arab, India, dan Tiongkok dengan masyarakat lokal. Bumbu kari yang kuat berasal dari India, teknik menumis dari Tiongkok, dan penggunaan daging kambing adalah pengaruh Arab.",
        cookingSteps: `<ul>
            <li>Ulek kasar bumbu-bumbu kari (kapulaga, jintan, kunyit, cabai kering) menggunakan <strong>ulekan batu</strong>.</li>
            <li>Panaskan minyak samin dalam <strong>wajan besi cekung (kuali)</strong> di atas bara api dari arang.</li>
            <li>Tumis bawang yang sudah diiris hingga harum, masukkan bumbu yang sudah diulek, lalu tumis hingga matang dan mengeluarkan minyak.</li>
            <li>Masukkan potongan daging kambing atau udang segar, masak hingga berubah warna.</li>
            <li>Tambahkan mie kuning basah, irisan kol, dan tauge. Beri sedikit kaldu, kecap manis, dan cuka.</li>
            <li>Besarkan api, aduk cepat mie dengan dua sudip (sutil) agar bumbu merata dan aroma gosong khas dari wajan besi keluar.</li>
            <li>Sajikan segera selagi panas mengepul, taburi dengan bawang goreng dan emping melinjo.</li>
        </ul>`
    },
    //Bagian Bengkulu
    {
        id: "pendap",
        title: "Pendap",
        origin: "Bengkulu",
        image: "img/pendap.jpeg",
        description: "Pendap adalah lauk tradisional Bengkulu yang dibungkus daun talas berlapis-lapis. Proses memasaknya yang lama di atas bara api membuat bumbu meresap sempurna ke dalam ikan.",
        history: "Pendap merupakan cara masyarakat pesisir Bengkulu zaman dahulu untuk mengawetkan ikan. Ikan dibalut rapat dengan daun talas untuk melindunginya dari panas langsung api dan menjaga kelembapannya selama proses pematangan yang lambat.",
        cookingSteps: `<ul>
            <li>Haluskan bumbu (bawang, cabai, kelapa parut muda) menggunakan <strong>batu gilingan</strong>.</li>
            <li>Lumuri ikan segar yang sudah dibersihkan dengan bumbu halus hingga merata.</li>
            <li>Siapkan beberapa lembar daun talas muda. Letakkan ikan berbumbu di tengahnya, lalu bungkus rapat seperti pepes, ikat dengan tali dari pelepah pisang.</li>
            <li>Siapkan <strong>dandang kukusan</strong> di atas <strong>tungku</strong>. Kukus bungkusan pendap selama 4-5 jam dengan api kecil yang stabil.</li>
            <li>Setelah dikukus, angkat pendap. Proses ini membuat semua bahan matang dan bumbu meresap hingga ke tulang.</li>
            <li>Sajikan pendap dengan nasi hangat.</li>
        </ul>`
    },
    {
        id: "bagar-hiu",
        title: "Bagar Hiu",
        origin: "Bengkulu",
        image: "img/bagar_hiu_bengkulu.jpg",
        description: "Bagar Hiu adalah masakan khas Bengkulu berbahan dasar ikan hiu yang dimasak dengan bumbu rempah seperti cabai, bawang, kunyit, jahe, dan serai. Rasanya pedas gurih dan kaya rempah. Hidangan ini biasa disajikan pada acara adat atau untuk tamu kehormatan, mencerminkan kekayaan kuliner pesisir Bengkulu.",
        history: "Sejarah Bagar Hiu berasal dari tradisi masyarakat pesisir Bengkulu yang sejak lama memanfaatkan hasil laut, termasuk ikan hiu, sebagai bahan makanan utama. Dahulu, hidangan ini sering disajikan untuk menyambut tamu penting atau acara adat karena dianggap istimewa dan berharga. Penggunaan rempah-rempah khas Sumatra seperti cabai, kunyit, jahe, dan serai mencerminkan pengaruh budaya Melayu dan India yang kuat di wilayah pesisir. Kini, meski ikan hiu mulai langka, bagar hiu tetap menjadi simbol kuliner tradisional Bengkulu, dengan beberapa masyarakat menggantinya menggunakan ikan lain tanpa mengubah cita rasa aslinya.",
        cookingSteps: `<ul>
            <li>Siapkan 500 g daging ikan hiu, 200 ml santan kental, 3 lembar daun salam, 2 batang serai, 3 cm lengkuas, garam, gula, dan sedikit minyak.</li>
            <li>Haluskan 6 bawang merah, 4 bawang putih, 5 cabai merah, 10 cabai rawit, 3 kemiri sangrai, 1 sdt ketumbar, ½ sdt jintan, 3 cm kunyit, dan 2 cm jahe.</li>
            <li>Panaskan sedikit minyak di wajan.</li>
            <li>Tumis bumbu halus hingga harum dan matang.</li>
            <li>Masukkan daun salam, serai yang dimemarkan, dan lengkuas; aduk sebentar.</li>
            <li>Masukkan potongan ikan hiu ke wajan, aduk perlahan hingga ikan berubah warna.</li>
            <li>Tuang santan kental dan sedikit air, aduk perlahan agar santan tidak pecah.</li>
            <li>Masak dengan api kecil sampai ikan empuk dan kuah mulai mengental.</li>
            <li>Tambahkan garam dan gula secukupnya, koreksi rasa dan aduk rata.</li>
            <li>Angkat dan sajikan hangat dengan nasi putih.</li>
        </ul>`
    },
    {
        id: "kue-bay-tat",
        title: "Kue Bay Tat",
        origin: "Bengkulu",
        image: "img/kue_bay_tat_bengkulu.jpg",
        description: "Kue Bay Tat adalah kue tradisional khas Bengkulu yang berbentuk seperti tart mini dengan isian selai nanas di bagian tengahnya. Kue ini memiliki cita rasa manis, gurih, dan sedikit asam dari nanas yang menyatu dengan tekstur renyah lembut pada adonannya. Dahulu, Bay Tat merupakan hidangan istimewa yang hanya disajikan untuk keluarga kerajaan atau tamu kehormatan. Kini, kue ini menjadi oleh-oleh khas Bengkulu yang populer dan sering disajikan pada acara adat maupun hari besar. Bentuknya yang cantik dengan pola anyaman di atas selai nanas menjadi ciri khas yang membedakan Bay Tat dari kue tart pada umumnya.",
        history: "Sejarah Kue Bay Tat berawal dari masa kerajaan Bengkulu pada zaman dahulu. Kue ini pertama kali dibuat di lingkungan istana sebagai hidangan khusus bagi raja dan para bangsawan. Nama “Bay Tat” sendiri diyakini berasal dari bahasa Melayu Bengkulu, yang berarti “kue besar” atau “tart besar”, karena bentuknya menyerupai tart dengan ukuran yang lebih lebar dibanding kue pada umumnya. Awalnya, kue ini hanya disajikan pada acara penting kerajaan seperti penyambutan tamu agung dan perayaan adat. Namun seiring waktu, resepnya mulai menyebar ke masyarakat dan menjadi bagian dari tradisi kuliner Bengkulu. Kini, Bay Tat tidak hanya menjadi simbol kemewahan kuliner masa lampau, tetapi juga kebanggaan daerah yang melambangkan keramahan dan kehangatan masyarakat Bengkulu.",
        cookingSteps: `<ul>
            <li>Siapkan 250 gram tepung terigu, 150 gram margarin, 2 butir kuning telur, 50 gram gula halus, 1 sachet vanili bubuk, 1/2 sdt garam, dan selai nanas secukupnya.</li>
            <li>Kocok margarin dan gula halus hingga lembut dan rata.</li>
            <li>Masukkan kuning telur satu per satu sambil terus diaduk hingga tercampur merata.</li>
            <li>Tambahkan tepung terigu, vanili, dan garam; aduk hingga menjadi adonan yang bisa dipulung.</li>
            <li>Ambil sebagian adonan, gilas tipis dengan rolling pin, lalu letakkan di loyang yang telah dioles margarin.</li>
            <li>Oleskan selai nanas di atas adonan dasar secara merata.</li>
            <li>Buat potongan tipis dari sisa adonan, susun di atas selai membentuk pola anyaman seperti tart.</li>
            li>Panggang dalam oven bersuhu 170°C selama ±25–30 menit hingga matang dan berwarna keemasan.</li>
            <li>Angkat dan biarkan dingin sejenak agar teksturnya renyah.</li>
            <li>Sajikan Kue Bay Tat khas Bengkulu sebagai camilan manis dan legit.</li>
        </ul>`
    },
    {
        id: "lepek-binti",
        title: "Lepek Binti",
        origin: "Bengkulu",
        image: "img/lepek_binti_bengkulu.jpeg",
        description: "Kue Lepek Binti adalah makanan tradisional khas Bengkulu yang terbuat dari adonan tepung ketan berisi daging cincang berbumbu rempah, kemudian dibungkus dengan daun pisang dan dikukus hingga matang. Kue ini memiliki cita rasa gurih, lembut, dan sedikit harum dari daun pisang yang membungkusnya. Teksturnya kenyal di luar dengan isian daging yang kaya rasa di dalam, membuatnya menjadi kudapan yang mengenyangkan. Secara tradisional, Lepek Binti sering disajikan dalam acara adat, kenduri, dan hari besar keagamaan sebagai simbol kebersamaan dan kehangatan keluarga Bengkulu. Bentuknya yang sederhana namun aromanya yang khas menjadikan kue ini salah satu warisan kuliner yang masih lestari hingga kini.",
        history: "Kue Lepek Binti berasal dari Bengkulu dan telah ada sejak masa lampau sebagai hidangan tradisional pada acara adat, kenduri, dan perayaan keagamaan. Nama “Lepek Binti” berasal dari kata lepek yang berarti dibungkus dan binti yang merujuk pada isi daging cincang di dalamnya. Dahulu, kue ini dibuat secara gotong royong oleh para ibu di kampung menggunakan bahan alami seperti tepung ketan, santan, dan daun pisang. Selain menjadi makanan khas yang lezat dan harum, Lepek Binti juga melambangkan kebersamaan serta kehangatan dalam kehidupan masyarakat Bengkulu dan hingga kini tetap dijaga sebagai warisan kuliner daerah.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa tepung ketan, santan dari kelapa parut, sedikit garam, daging sapi cincang, bawang merah, bawang putih, serai, daun salam, dan daun pisang muda untuk membungkus.</li>
            <li>Haluskan bawang merah dan bawang putih, lalu tumis dengan sedikit minyak di kuali tanah atau wajan besi sampai harum.</li>
            <li>Masukkan daging cincang, serai yang dimemarkan, dan daun salam; aduk hingga daging berubah warna.</li>
            <li>Tambahkan garam dan sedikit gula agar rasanya gurih seimbang, masak sampai bumbu meresap dan daging matang, lalu sisihkan untuk isian.</li>
            <li>Di wadah lain, campurkan tepung ketan dengan santan hangat dan garam sedikit saja; uleni pelan dengan tangan hingga adonan kalis dan tidak lengket.</li>
            <li>Ambil selembar daun pisang yang telah dilayukan di atas api agar lentur, letakkan sedikit adonan ketan di atasnya lalu pipihkan dengan tangan.</li>
            <li>Beri satu sendok isian daging di tengah, kemudian tutup lagi dengan adonan ketan hingga tertutup rapat.</li>
            <li>Bungkus dengan daun pisang membentuk gulungan lonjong dan sematkan ujungnya dengan lidi atau tusuk bambu kecil.</li>
            <li>Kukus dalam dandang tradisional selama kurang lebih 30–40 menit hingga matang dan daun berubah warna kecokelatan.</li>
            <li>Angkat, biarkan hangat, lalu sajikan Kue Lepek Binti dengan aroma khas daun pisang dan rasa gurih daging yang lembut.</li>
        </ul>`
    },
    {
        id: "lemea",
        title: "Lemea",
        origin: "Bengkulu",
        image: "img/lemea_bengkulu.jpeg",
        description: "Lemea adalah makanan tradisional khas suku Rejang di Bengkulu yang terbuat dari ikan sungai dan rebung muda yang difermentasi dengan nasi. Rasanya unik — asam, gurih, dan sedikit pedas — hasil dari proses fermentasi alami yang menghasilkan aroma khas. Teksturnya lembut dan kuahnya kental, sering disajikan sebagai lauk pendamping nasi. Lemea mencerminkan kearifan lokal masyarakat Rejang dalam mengawetkan makanan secara alami tanpa bahan kimia, sekaligus menjaga cita rasa tradisional yang autentik dan berlapis aroma rempah.",
        history: "Lemea telah menjadi bagian dari budaya kuliner suku Rejang sejak ratusan tahun lalu. Awalnya, makanan ini dibuat sebagai cara tradisional untuk mengawetkan ikan hasil tangkapan sungai pada masa sebelum adanya pendingin. Masyarakat Rejang menggunakan fermentasi alami dari nasi dan rebung untuk menjaga ikan tetap tahan lama sekaligus menambah cita rasa khas. Lemea tidak hanya sekadar makanan, tetapi juga simbol kebersamaan dan kearifan lokal dalam memanfaatkan bahan alam sekitar. Hingga kini, Lemea masih disajikan dalam upacara adat Rejang seperti kenduri, pesta panen, dan penyambutan tamu kehormatan, menjadikannya warisan kuliner yang terus hidup di Bengkulu.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa ikan sungai segar (biasanya ikan semah, mujair, atau ikan kecil lainnya), potong kecil-kecil tanpa dibuang tulangnya.</li>
            <li>Siapkan bahan tambahan berupa potongan batang bambu muda (rebung), nasi atau beras yang sudah ditanak setengah matang, dan sedikit garam.</li>
            <li>Masukkan ikan, rebung, dan nasi ke dalam wadah tanah liat atau kendi besar, kemudian aduk hingga merata.</li>
            <li>Tambahkan sedikit air dan garam secukupnya untuk membantu proses fermentasi alami.</li>
            <li>Tutup rapat wadah menggunakan daun pisang atau tutup kayu, lalu simpan di tempat sejuk selama 3–5 hari agar proses fermentasi berjalan sempurna.</li>
            <li>Setelah terfermentasi, tumis bumbu halus berupa bawang merah, bawang putih, cabai merah, kunyit, lengkuas, dan serai hingga harum.</li>
            <li>Masukkan hasil fermentasi ikan dan rebung ke dalam wajan, tambahkan santan kental, lalu masak dengan api kecil hingga matang dan mengeluarkan aroma khas.</li>
            <li>Sajikan Lemea hangat bersama nasi putih, biasanya dihidangkan pada acara adat atau jamuan keluarga masyarakat Rejang.</li>
        </ul>`
    },
    //Bagian Lampung
    {
        id: "gulai-taboh",
        title: "Gulai Taboh Ikan",
        origin: "Lampung",
        image: "img/gulai_taboh_lampung.jpg",
        description: "Gulai Taboh Ikan adalah hidangan tradisional khas Lampung yang terbuat dari ikan segar yang dimasak dengan santan kental dan bumbu rempah seperti kunyit, jahe, serai, daun salam, dan cabai. Kuahnya berwarna kuning keemasan dengan aroma harum rempah yang khas. Rasa gulainya gurih, sedikit pedas, dan kaya santan, mencerminkan cita rasa kuliner Sumatra yang kuat. Hidangan ini biasanya disajikan sebagai lauk utama dalam jamuan keluarga, upacara adat, atau hari besar, dan menjadi simbol kehangatan serta kebersamaan dalam tradisi masyarakat Lampung.",
        history: "Gulai Taboh Ikan berakar dari budaya kuliner masyarakat Lampung yang dikenal kaya akan hasil laut dan perairan sungai. Secara tradisional, gulai ini dibuat oleh masyarakat pesisir dengan menggunakan ikan segar yang dimasak dalam santan kelapa hasil perasan tangan. Nama “taboh” sendiri dalam bahasa Lampung berarti rebusan santan berbumbu, yang menjadi dasar dari berbagai masakan khas daerah tersebut. Gulai Taboh awalnya disajikan pada acara adat seperti pernikahan, selamatan, dan penyambutan tamu penting. Hingga kini, hidangan ini tetap menjadi kebanggaan masyarakat Lampung dan melambangkan warisan kuliner turun-temurun yang mempertahankan cita rasa tradisional Nusantara",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa ikan segar (biasanya ikan gabus, tongkol, atau patin), santan dari kelapa tua, serai, daun salam, daun jeruk, lengkuas, kunyit, cabai, bawang merah, bawang putih, jahe, dan asam kandis.</li>
            <li>Haluskan bumbu seperti bawang merah, bawang putih, kunyit, jahe, dan cabai merah dengan cara ditumbuk menggunakan cobek batu agar aroma alaminya lebih kuat.</li>
            <li>Panaskan sedikit minyak dalam kuali tanah atau wajan besi, lalu tumis bumbu halus bersama serai, daun salam, daun jeruk, dan lengkuas hingga harum.</li>
            <li>Masukkan potongan ikan yang telah dibersihkan, aduk perlahan agar bumbu meresap ke dalam daging ikan.</li>
            <li>Tuang santan dari hasil perasan kelapa tua, aduk pelan agar santan tidak pecah selama proses memasak.</li>
            <li>Tambahkan asam kandis untuk memberi rasa segar khas gulai Lampung, serta sedikit garam dan gula untuk menyeimbangkan rasa.</li>
            <li>Masak dengan api kecil sambil sesekali diaduk hingga ikan matang, santan mengental, dan minyak mulai naik ke permukaan.</li>
            <li>Angkat gulai setelah bumbu benar-benar meresap dan kuah berwarna kuning keemasan.</li>
            <li>Sajikan Gulai Taboh Ikan dalam wadah tanah liat atau piring besar, nikmati bersama nasi hangat sebagai hidangan khas masyarakat Lampung.</li>
        </ul>`
    },
    {
        id: "seruit",
        title: "Seruit",
        origin: "Lampung",
        image: "img/seruit_lampung.jpg",
        description: "Seruit adalah makanan tradisional khas Lampung yang terdiri dari ikan bakar yang dicampur dengan sambal terasi pedas dan diberi tambahan tempoyak atau mangga muda sebagai pelengkap. Hidangan ini memiliki cita rasa yang unik — perpaduan antara gurih ikan, pedas sambal, dan asam segar dari jeruk atau tempoyak. Teksturnya lembut dengan aroma asap ikan bakar yang menggugah selera. Seruit biasanya disantap bersama nasi hangat dan lalapan, menjadikannya simbol kebersamaan dalam setiap jamuan makan keluarga atau acara adat masyarakat Lampung.",
        history: "Seruit berasal dari tradisi masyarakat Lampung Pepadun dan Saibatin yang menjunjung tinggi nilai kebersamaan. Dahulu, seruit disajikan dalam acara adat seperti begawi (pesta pernikahan), syukuran, atau musyawarah kampung. Proses membuatnya dilakukan bersama-sama — para lelaki menyiapkan dan membakar ikan, sedangkan perempuan membuat sambalnya. Nama “seruit” sendiri berasal dari kata “nyeruit” yang berarti makan bersama-sama dalam satu wadah. Tradisi ini mencerminkan filosofi hidup masyarakat Lampung yang menjunjung gotong royong, persaudaraan, dan kebersamaan. Hingga kini, Seruit tetap menjadi ikon kuliner Lampung dan simbol kehangatan dalam budaya mereka.",
        cookingSteps: `<ul>
            <li>Siapkan ikan sungai segar seperti ikan nila, baung, atau patin; bersihkan dan lumuri dengan garam serta jeruk nipis agar tidak amis.</li>
            <li>Bakar ikan di atas bara api atau panggangan tradisional dari arang hingga matang dan beraroma asap yang khas.</li>
            <li>Haluskan bumbu sambal seruit berupa cabai merah, cabai rawit, bawang merah, bawang putih, terasi bakar, dan garam dengan cara ditumbuk menggunakan cobek batu.</li>
            <li>Tambahkan sedikit gula merah dan air perasan jeruk limau untuk memberi rasa asam segar pada sambal.</li>
            <li>Masukkan daging ikan bakar yang telah disuwir ke dalam sambal, lalu aduk dan lumatkan perlahan hingga bumbu meresap.</li>
            <li>Seruit siap disajikan dengan nasi hangat, lalapan segar seperti mentimun, terong rebus, atau daun singkong, serta kadang diberi tambahan tempoyak (fermentasi durian) atau mangga muda cincang untuk rasa khas Lampung.</li>
        </ul>`
    },
    {
        id: "geguduh",
        title: "Geguduh",
        origin: "Lampung",
        image: "img/geguduh_lampung.jpg",
        description: "Geguduh adalah kue tradisional khas Lampung yang terbuat dari pisang matang yang dihaluskan dan dicampur dengan tepung serta gula, kemudian digoreng hingga berwarna keemasan. Teksturnya lembut di dalam dan renyah di luar dengan rasa manis alami dari pisang. Geguduh sering disajikan sebagai camilan sederhana di sore hari atau pada acara keluarga. Aroma pisang goreng yang khas dan cita rasa manis gurih membuatnya menjadi salah satu jajanan tradisional yang disukai semua kalangan di Lampung.",
        history: "Geguduh berasal dari tradisi masyarakat Lampung yang memanfaatkan hasil alam, terutama pisang, yang tumbuh melimpah di daerah tersebut. Sejak zaman dahulu, masyarakat membuat geguduh sebagai cara sederhana untuk mengolah pisang matang agar tidak terbuang. Pembuatan geguduh dilakukan dengan alat tradisional seperti cobek batu dan wajan besi, serta digoreng menggunakan minyak kelapa buatan sendiri. Makanan ini sering dihidangkan saat berkumpul bersama keluarga atau menjamu tamu. Hingga kini, Geguduh tetap menjadi simbol kesederhanaan dan kehangatan masyarakat Lampung yang memelihara nilai kebersamaan lewat cita rasa tradisional.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa pisang matang (biasanya pisang raja atau pisang kepok), tepung terigu, gula pasir, sedikit garam, dan minyak kelapa untuk menggoreng.</li>
            <li>Haluskan pisang menggunakan ulekan kayu atau tumbukan batu hingga lembut dan halus.</li>
            <li>Tambahkan tepung terigu secukupnya ke dalam adonan pisang untuk memberi tekstur padat namun tetap lembut.</li>
            <li>Masukkan sedikit gula dan garam agar rasanya manis gurih seimbang, lalu aduk rata hingga menjadi adonan kental.</li>
            <li>Panaskan minyak kelapa dalam wajan tanah atau besi tradisional hingga cukup panas.</li>
            <li>Ambil satu sendok adonan, bentuk bulat pipih atau lonjong sesuai selera, lalu goreng hingga berwarna kuning kecokelatan dan matang merata.</li>
            <li>Angkat, tiriskan dari minyak, dan sajikan hangat sebagai kudapan sore hari bersama teh atau kopi.</li>
        </ul>`
    },
    {
        id: "sayur-gabing",
        title: "Sayur Gabing",
        origin: "Lampung",
        image: "img/sayur_gabing_lampung.jpeg",
        description: "Sayur Gabing adalah makanan tradisional khas Lampung yang terbuat dari gabing atau batang kelapa muda yang dimasak dengan santan dan bumbu rempah seperti kunyit, serai, dan lengkuas. Sayur ini memiliki tekstur lembut dan sedikit renyah dengan cita rasa gurih, pedas ringan, serta aroma santan yang harum. Gabing yang masih muda memberikan rasa manis alami, menjadikan hidangan ini unik dan berbeda dari sayur santan pada umumnya. Biasanya disajikan sebagai lauk pendamping nasi dalam jamuan keluarga atau acara adat Lampung.",
        history: "Sayur Gabing berawal dari tradisi masyarakat pedesaan di Lampung yang memanfaatkan hasil alam sekitar, terutama batang kelapa muda yang biasanya diambil saat pohon ditebang. Daripada dibuang, bagian muda batang kelapa diolah menjadi masakan lezat dengan tambahan santan dan rempah-rempah. Hidangan ini dahulu sering dimasak untuk acara gotong royong, kenduri, dan perayaan panen. Gabing menjadi simbol kesederhanaan sekaligus kreativitas masyarakat Lampung dalam mengolah bahan alami menjadi makanan bergizi. Hingga kini, Sayur Gabing tetap menjadi kuliner warisan yang menggambarkan keakraban dan kearifan lokal masyarakat Lampung.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa gabing (batang kelapa muda), santan kental dan encer dari kelapa tua, daun salam, serai, lengkuas, dan cabai merah secukupnya.</li>
            <li>Siapkan juga bumbu halus berupa bawang merah, bawang putih, kunyit, ketumbar, dan sedikit garam, lalu tumbuk secara tradisional menggunakan cobek batu hingga halus.</li>
            <li>Potong gabing tipis-tipis atau sesuai selera, kemudian rebus sebentar agar empuk dan getahnya hilang.</li>
            <li>Panaskan sedikit minyak di wajan tanah atau panci besi, tumis bumbu halus bersama daun salam, serai, dan lengkuas hingga harum.</li>
            <li>Masukkan gabing yang sudah direbus, aduk hingga bumbu merata dan meresap.</li>
            <li>Tuang santan encer terlebih dahulu, masak dengan api sedang sambil sesekali diaduk agar santan tidak pecah.</li>
            <li>Tambahkan santan kental, aduk perlahan, dan biarkan mendidih hingga kuah mengental dan gabing benar-benar lembut.</li>
            <li>Koreksi rasa dengan garam dan sedikit gula sesuai selera, lalu angkat.</li>
            <li>Sajikan Sayur Gabing khas Lampung hangat-hangat dengan nasi putih sebagai lauk utama.</li>
        </ul>`
    },
        {
        id: "mie-khodon",
        title: "Mie Khodon",
        origin: "Lampung",
        image: "img/mie_khodon_lampung.jpg",
        description: "Mie Khodon adalah hidangan khas Lampung berupa mie kuning basah yang dimasak dengan bumbu rempah kuat dan disajikan bersama daging, udang, serta sayuran. Cita rasanya gurih, sedikit manis, dan pedas ringan dengan aroma khas tumisan bumbu tradisional. Teksturnya lembut dan kuahnya kental menyelimuti mie, menjadikannya hidangan yang menggugah selera. Mie ini sering disajikan sebagai makanan utama atau hidangan khas di warung tradisional Lampung yang sudah melegenda.",
        history: "Mie Khodon berasal dari Bandar Lampung dan telah menjadi ikon kuliner daerah sejak pertengahan abad ke-20. Nama “Khodon” diambil dari nama penjual pertama, yaitu Pak Khodon, yang mulai berjualan mie ini secara tradisional di sekitar Telukbetung, Lampung, pada tahun 1960-an. Ciri khasnya terletak pada penggunaan bumbu rempah tradisional dan cara memasak menggunakan kuali besar di atas tungku arang, yang memberi aroma khas pada mie. Seiring waktu, Mie Khodon menjadi terkenal hingga ke luar Lampung sebagai simbol cita rasa khas daerah yang memadukan pengaruh masakan Tionghoa dan tradisi kuliner lokal. Hingga kini, Mie Khodon tetap menjadi warisan kuliner Lampung yang dijaga keasliannya dari generasi ke generasi.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa mie kuning basah, daging sapi atau ayam suwir, udang kecil, tauge, kol, daun bawang, dan seledri.</li>
            <li>Siapkan bumbu halus tradisional berupa bawang merah, bawang putih, merica, cabai merah, kemiri, dan sedikit garam; tumbuk halus menggunakan cobek batu agar aromanya lebih kuat.</li>
            <li>Panaskan minyak di wajan besi atau kuali tanah, lalu tumis bumbu halus hingga harum dan matang.</li>
            <li>Masukkan daging suwir dan udang, aduk hingga bumbu meresap dan daging berubah warna.</li>
            <li>Tambahkan sedikit air kaldu atau air rebusan daging, kemudian masukkan mie kuning dan sayuran seperti kol serta tauge.</li>
            <li>Aduk hingga semua bahan tercampur rata dan bumbu meresap sempurna ke dalam mie.</li>
            <li>Tambahkan garam, merica, dan kecap manis secukupnya untuk menambah cita rasa khas Mie Khodon.</li>
            <li>Masak hingga kuah sedikit meresap dan mie matang sempurna, kemudian angkat.</li>
            <li>Sajikan Mie Khodon dengan taburan daun bawang, seledri, dan bawang goreng di atasnya.</li>
        </ul>`
    },
    //Bagian Jambi
    {
        id: "gulai-tepek-ikan",
        title: "Gulai Tepek Ikan",
        origin: "Jambi",
        image: "img/gulai_tepek_jambi.jpg",
        description: "Gulai Tepek Ikan adalah makanan khas Jambi yang terbuat dari adonan ikan segar yang diolah menjadi tepek (pindang ikan kukus) lalu dimasak kembali dengan kuah santan berbumbu rempah. Rasanya gurih, lembut, dan sedikit pedas dengan aroma khas dari serai dan daun jeruk. Teksturnya kenyal namun empuk karena perpaduan ikan dan sagu yang dikukus sempurna. Hidangan ini sering disajikan dalam upacara adat, pernikahan, dan perayaan penting sebagai simbol kemakmuran dan kebersamaan.",
        history: "Gulai Tepek Ikan berasal dari kerajaan Melayu Jambi pada masa lampau, di mana hidangan ini menjadi santapan istimewa keluarga bangsawan dan disajikan dalam upacara kerajaan. Kata “tepek” berasal dari bahasa Melayu Jambi yang berarti “ditekan” atau “dipadatkan”, menggambarkan proses pembentukan adonan ikan yang ditekan sebelum dikukus. Dahulu, hidangan ini hanya disajikan pada acara adat besar seperti pernikahan, khitanan, dan penyambutan tamu kehormatan. Kini, Gulai Tepek Ikan menjadi salah satu ikon kuliner tradisional Jambi yang mencerminkan kelezatan serta kearifan lokal masyarakat Melayu.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa ikan gabus atau ikan tenggiri segar yang telah dibersihkan dari durinya, lalu haluskan dagingnya dengan ulekan atau cobek batu.</li>
            <li>Campurkan ikan halus dengan sedikit tepung sagu, garam, dan air secukupnya hingga menjadi adonan yang kenyal.</li>
            <li>Bentuk adonan menjadi bulat pipih atau persegi, kemudian kukus hingga matang dan padat — inilah yang disebut “tepek ikan”.</li>
            <li>Setelah matang, potong tepek ikan menjadi bagian kecil sesuai selera dan sisihkan.</li>
            <li>Haluskan bumbu gulai tradisional berupa bawang merah, bawang putih, cabai merah, kunyit, kemiri, ketumbar, jahe, lengkuas, dan serai.</li>
            <li>Tumis bumbu halus dengan minyak kelapa hingga harum, lalu tuangkan santan kental dan aduk perlahan agar santan tidak pecah.</li>
            <li>Masukkan potongan tepek ikan, tambahkan daun salam, daun jeruk, dan asam kandis untuk memberi rasa segar.</li>
            <li>Masak dengan api kecil hingga bumbu meresap dan kuah mengental kekuningan.</li>
            <li>Sajikan Gulai Tepek Ikan hangat bersama nasi putih — hidangan ini sering disajikan dalam acara adat dan hari besar.</li>
        </ul>`
    },
    {
        id: "gelamai-perentak",
        title: "Gelemai Perentak",
        origin: "Jambi",
        image: "img/gelemai_perentak_jambi.jpg",
        description: "Gelemai Perentak adalah makanan tradisional khas Jambi, khususnya dari daerah Perentak di Kabupaten Merangin. Kudapan ini memiliki tekstur kenyal, lembut, dan sedikit berminyak dengan rasa manis legit dari gula merah. Gelemai mirip dengan dodol, tetapi lebih lembut dan beraroma khas santan kelapa yang dimasak lama. Biasanya disajikan pada acara adat, pernikahan, dan hari besar keagamaan sebagai simbol kebersamaan dan kemakmuran.",
        history: "Gelemai Perentak sudah ada sejak masa lampau sebagai salah satu makanan warisan masyarakat Melayu Jambi. Kata “gelemai” berarti adonan yang lembut dan elastis, sementara “Perentak” merujuk pada nama daerah asalnya. Dahulu, pembuatan Gelemai dilakukan secara bergotong royong menjelang acara adat besar seperti kenduri atau pesta panen. Karena proses pengadukannya yang berat dan panjang, pembuatan Gelemai menjadi simbol kekompakan dan kerja sama masyarakat. Kini, Gelemai Perentak tetap lestari sebagai salah satu kuliner kebanggaan Jambi yang mewakili kehangatan, rasa manis kehidupan, dan nilai gotong royong masyarakatnya.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa tepung ketan, santan kental, gula merah, dan sedikit garam sebagai penyeimbang rasa.</li>
            <li>Masak santan bersama gula merah di atas api kecil sambil diaduk perlahan hingga gula larut dan santan berubah menjadi cokelat pekat.</li>
            <li>Masukkan tepung ketan sedikit demi sedikit sambil terus diaduk agar tidak menggumpal dan adonan menjadi kalis serta kental.</li>
            <li>Terus aduk menggunakan sendok kayu besar hingga adonan mulai berat dan licin — proses ini bisa memakan waktu lama dan membutuhkan tenaga, sehingga dilakukan secara gotong royong.</li>
            <li>Setelah adonan mengental sempurna dan mengeluarkan minyak alami dari santan, angkat dari api.</li>
            <li>Tuangkan adonan ke dalam loyang atau wadah daun pisang yang sudah diolesi minyak agar tidak lengket.</li>
            <li>Ratakan permukaannya, biarkan hingga dingin dan mengeras.</li>
            <li>Potong-potong Gelemai Perentak sesuai selera, biasanya berbentuk persegi panjang atau belah ketupat, lalu sajikan sebagai kudapan manis tradisional.</li>
        </ul>`
    },
    {
        id: "nasi-gemuk",
        title: "Nasi Gemuk",
        origin: "Jambi",
        image: "img/nasi_gemuk_jambi.jpeg",
        description: "Nasi Gemuk adalah makanan khas Jambi yang mirip dengan nasi uduk, namun memiliki cita rasa lebih gurih dan kaya santan. Nasi ini dimasak menggunakan santan kental dan rempah seperti daun pandan serta serai, menghasilkan aroma harum yang khas dan tekstur nasi yang lembut serta berminyak. Hidangan ini biasanya disajikan pada pagi hari sebagai sarapan, lengkap dengan telur rebus, sambal, teri kacang, dan mentimun. Rasanya gurih, sedikit manis, dan mengenyangkan, mencerminkan kekayaan rasa kuliner Melayu Jambi.",
        history: "Nasi Gemuk berasal dari tradisi masyarakat Melayu di Jambi, Palembang, dan sekitarnya, dan telah menjadi simbol rasa syukur dalam berbagai acara adat seperti kenduri, selamatan, dan perayaan Maulid Nabi. Kata “gemuk” melambangkan kelimpahan dan kemakmuran, merujuk pada nasi yang dimasak dengan santan kental sehingga terasa “gemuk” atau berminyak. Pada masa lalu, Nasi Gemuk disajikan hanya pada acara-acara istimewa sebagai wujud rasa syukur kepada Tuhan atas rezeki yang melimpah. Kini, hidangan ini menjadi menu sarapan populer di Jambi yang tetap mempertahankan nilai tradisi dan cita rasa klasik Melayu.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa beras, santan kental, daun pandan, daun salam, serai, dan garam secukupnya.</li>
            <li>Cuci beras hingga bersih, lalu tiriskan.</li>
            <li>Masukkan beras ke dalam kukusan dan kukus setengah matang selama beberapa menit, lalu angkat.</li>
            <li>Didihkan santan bersama daun pandan, daun salam, serai, dan garam — aduk perlahan agar santan tidak pecah.</li>
            <li>Masukkan beras setengah matang ke dalam santan, aduk hingga santan meresap ke dalam beras.</li>
            <li>Kukus kembali hingga nasi matang dan mengeluarkan aroma harum khas santan — nasi akan terasa pulen dan gurih.</li>
            <li>Sajikan Nasi Gemuk dengan pelengkap tradisional seperti telur rebus, sambal teri kacang, irisan mentimun, dan taburan bawang goreng.</li>
            <li>Untuk acara adat atau syukuran, biasanya juga ditambahkan lauk seperti ayam goreng, rendang, atau sambal goreng hati.</li>
        
        </ul>`
    },
    {
        id: "rendang_cempedak",
        title: "Rendang Cempedak",
        origin: "Jambi",
        image: "img/rendang_cempedak_jambi.png",
        description: "Rendang Cempedak adalah salah satu kuliner unik khas Jambi yang menggunakan buah cempedak muda sebagai bahan utama pengganti daging. Rasanya gurih, pedas, dan sedikit manis dengan aroma khas buah cempedak yang berpadu sempurna dengan rempah dan santan. Teksturnya lembut namun berserat, mirip daging rendang pada umumnya. Hidangan ini mencerminkan kreativitas masyarakat Jambi dalam memanfaatkan hasil alam lokal menjadi sajian lezat bergizi tinggi tanpa bahan hewani.",
        history: "Rendang Cempedak berasal dari masyarakat pedalaman Melayu Jambi, terutama di daerah yang banyak tumbuh pohon cempedak. Dahulu, hidangan ini dibuat pada masa paceklik atau saat sulit mendapatkan daging, sehingga masyarakat menggantinya dengan cempedak muda yang memiliki tekstur mirip daging. Proses memasaknya yang lama dengan santan dan rempah mengikuti tradisi rendang Minangkabau, namun memiliki cita rasa khas Jambi yang lebih lembut dan aromatik. Kini, Rendang Cempedak menjadi salah satu simbol kuliner kreatif Jambi yang menggambarkan kearifan lokal, kesederhanaan, dan kemampuan masyarakatnya mengolah bahan alami menjadi hidangan istimewa.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa buah cempedak muda (belum terlalu matang) yang sudah dikupas, dibersihkan, dan dipotong-potong kecil.</li>
            <li>Rebus potongan cempedak muda sebentar hingga agak empuk, kemudian tiriskan dan sisihkan.</li>
            <li>Haluskan bumbu tradisional: bawang merah, bawang putih, cabai merah, jahe, lengkuas, kunyit, kemiri, ketumbar, dan sedikit garam.</li>
            <li>Panaskan minyak kelapa, lalu tumis bumbu halus hingga harum dan matang.</li>
            <li>Tuangkan santan kental ke dalam wajan besar, masukkan daun salam, daun jeruk, serai, dan asam kandis untuk menambah aroma dan cita rasa.</li>
            <li>Masukkan potongan cempedak muda yang sudah direbus ke dalam kuah santan berbumbu.</li>
            <li>Masak dengan api kecil sambil diaduk perlahan agar santan tidak pecah, hingga kuah mulai mengering dan berubah warna menjadi kecokelatan gelap.</li>
            <li>Lanjutkan memasak hingga bumbu meresap sempurna dan cempedak menjadi lembut serta berminyak seperti rendang daging.</li>
            <li>Angkat dan sajikan Rendang Cempedak bersama nasi putih hangat atau lontong.</li>   
        </ul>`
    },
    {
        id: "kue-padamaran",
        title: "Kue Padamaran",
        origin: "Jambi",
        image: "img/kue_padamaran.jpg",
        description: "Kue Padamaran adalah jajanan tradisional khas Jambi yang terbuat dari tepung beras, santan, dan gula merah, disajikan dalam wadah daun pisang berbentuk takir. Kue ini memiliki dua lapisan — bagian bawah manis dari gula merah cair dan bagian atas hijau lembut dari adonan tepung beras dan santan. Teksturnya lembut dan kenyal, dengan perpaduan rasa gurih dan manis yang harmonis. Aromanya yang harum berasal dari daun pandan dan daun pisang yang menjadi ciri khas jajanan tradisional Melayu Jambi.",
        history: "Kue Padamaran telah menjadi bagian dari warisan kuliner Melayu Jambi sejak masa lampau. Nama “padamaran” dipercaya berasal dari istilah lokal yang berarti “menyatu” atau “melebur”, melambangkan bersatunya rasa manis dan gurih dalam satu sajian. Kue ini dahulu sering disajikan dalam acara adat, kenduri, dan bulan Ramadan sebagai hidangan buka puasa. Penggunaan daun pisang sebagai wadah bukan hanya tradisi, tetapi juga cara alami untuk memberi aroma wangi dan menambah kelezatan. Hingga kini, Kue Padamaran tetap menjadi simbol keaslian dan kelembutan cita rasa kuliner tradisional Jambi.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa tepung beras, santan kental, daun pandan, daun suji (untuk pewarna hijau alami), gula merah, dan garam secukupnya.</li>
            <li>Peras daun pandan dan daun suji dengan sedikit air untuk mendapatkan air hijau alami.</li>
            <li>Campurkan tepung beras, santan encer, garam, dan air pandan suji, aduk hingga adonan hijau tercampur rata tanpa menggumpal.</li>
            <li>Panaskan santan kental terpisah hingga hangat, jangan sampai mendidih agar tidak pecah.</li>
            <li>Siapkan wadah daun pisang berbentuk mangkuk kecil (takir) — bentuknya dibuat dengan cara melipat dan menyematkan lidi di ujungnya.</li>
            <li>Tuang sedikit gula merah cair di dasar takir sebagai lapisan pertama.</li>
            <li>Tuangkan adonan hijau di atasnya hingga hampir penuh, lalu kukus di atas air mendidih selama 15–20 menit hingga matang dan mengeras.</li>
             <li>Angkat dan biarkan dingin. Kue Padamaran siap disajikan dengan aroma pandan dan rasa gurih manis yang lembut.</li>
        
        </ul>`
    },
    //Bagian Riau
    {
        id: "dodol-kedondong",
        title: "Dodol Kedondong",
        origin: "Riau",
        image: "img/dodol_kedondong_riau.png",
        description: "Dodol Kedondong adalah makanan manis khas Riau yang terbuat dari buah kedondong matang yang diolah bersama santan, gula merah, dan tepung ketan. Cita rasanya unik — perpaduan antara manis, gurih, dan sedikit asam segar dari buah kedondong. Teksturnya lembut, kenyal, dan sedikit berminyak dengan aroma khas buah tropis. Kudapan ini sering dijadikan oleh-oleh khas Riau, terutama dari daerah pedesaan yang masih mempertahankan cara pengolahan tradisionalnya.",
        history: "Dodol Kedondong adalah makanan manis khas Riau yang terbuat dari buah kedondong matang yang diolah bersama santan, gula merah, dan tepung ketan. Cita rasanya unik — perpaduan antara manis, gurih, dan sedikit asam segar dari buah kedondong. Teksturnya lembut, kenyal, dan sedikit berminyak dengan aroma khas buah tropis. Kudapan ini sering dijadikan oleh-oleh khas Riau, terutama dari daerah pedesaan yang masih mempertahankan cara pengolahan tradisionalnya.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa buah kedondong matang, gula merah, santan kental, tepung ketan, dan sedikit garam.</li>
            <li>Kupas kedondong, buang bijinya, lalu haluskan daging buahnya menggunakan parutan atau blender hingga menjadi bubur halus.</li>
            <li>Masak santan bersama gula merah dan garam di atas api kecil hingga gula larut dan santan mulai mengental.</li>
            <li>Masukkan bubur kedondong ke dalam campuran santan, aduk rata hingga menyatu sempurna.</li>
            <li>Tambahkan tepung ketan sedikit demi sedikit sambil terus diaduk agar adonan tidak menggumpal.</li>
            <li>Masak adonan di kuali besar dari tembaga atau wajan besi menggunakan api kecil sambil terus diaduk tanpa henti — proses ini bisa memakan waktu berjam-jam.</li>
            <li>Setelah adonan mulai mengental, licin, dan berwarna cokelat keemasan, angkat dari api.</li>
            <li>Tuangkan ke dalam loyang atau wadah daun pisang yang sudah diolesi minyak agar tidak lengket.</li>
            <li>Biarkan dingin hingga padat, kemudian potong-potong Dodol Kedondong sesuai selera sebelum disajikan atau dibungkus.</li>
        </ul>`
    },
    {
        id: "mie-lendir",
        title: "Mie Lendir",
        origin: "Riau",
        image: "img/mie_lendir_riau.jpg",
        description: "Mie Lendir adalah hidangan khas Riau, khususnya dari daerah Tanjung Pinang dan Pekanbaru, yang terkenal dengan kuahnya yang kental, gurih, dan sedikit manis. Kuahnya dibuat dari campuran santan, kacang tanah, dan bumbu rempah, menghasilkan tekstur licin seperti “lendir” — yang justru menjadi daya tarik utama. Mie Lendir biasanya disajikan bersama tauge dan telur rebus, menjadikannya sarapan khas yang sederhana namun kaya rasa dan mengenyangkan.",
        history: "Mie Lendir diyakini berasal dari perpaduan budaya kuliner Melayu dan Tionghoa di wilayah pesisir Riau sejak masa perdagangan di Selat Malaka. Nama “mie lendir” muncul dari penampilan kuahnya yang kental dan mengilap seperti lendir, namun rasanya sangat lezat dan gurih. Hidangan ini awalnya dijual oleh pedagang kaki lima di pelabuhan dan pasar tradisional sebagai makanan cepat saji untuk pekerja dan nelayan. Karena cita rasanya yang khas dan bahan-bahannya mudah didapat, Mie Lendir menyebar luas ke berbagai daerah di Riau dan Kepulauan Riau, dan kini menjadi ikon kuliner tradisional yang tak lekang oleh waktu.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa mie kuning basah (mie telur), tauge, dan telur rebus untuk pelengkap.</li>
            <li>Untuk membuat kuah kentalnya, haluskan bawang merah, bawang putih, cabai merah, kacang tanah goreng, dan sedikit udang kering (ebi).</li>
            <li>Tumis bumbu halus dengan sedikit minyak hingga harum dan matang.</li>
            <li>Tambahkan air secukupnya, lalu masukkan santan kental, gula merah, dan garam.</li>
            <li>Rebus dengan api kecil sambil diaduk perlahan agar santan tidak pecah.</li>
            <li>Tambahkan sedikit larutan tepung maizena atau tepung sagu untuk mengentalkan kuah hingga memiliki tekstur “lendir” yang khas — kental dan licin.</li>
            <li>Rebus mie kuning dan tauge secara terpisah, lalu tiriskan.</li>
            <li>Susun mie di dalam mangkuk, letakkan tauge di atasnya, kemudian siram dengan kuah kental panas.</li>
            <li>Tambahkan telur rebus yang dibelah dua, taburan bawang goreng, dan sedikit perasan jeruk limau sebelum disajikan.</li>
        </ul>`
    },
        {
        id: "mie-sagu",
        title: "Mie Sagu",
        origin: "Riau",
        image: "img/mie_sagu_riau.jpeg",
        description: "Mie Sagu adalah makanan khas Riau, terutama dari daerah Selatpanjang di Kepulauan Meranti, yang terkenal sebagai sentra penghasil sagu terbesar di Indonesia. Mie ini terbuat dari tepung sagu, menghasilkan tekstur kenyal, licin, dan sedikit transparan. Rasanya gurih dengan aroma khas udang kering dan bawang yang ditumis, berpadu dengan manis gurih kecap khas masakan Melayu pesisir. Mie Sagu biasanya disajikan sebagai sarapan atau makan malam sederhana yang menggugah selera.",
        history: "Mie Sagu lahir dari tradisi kuliner masyarakat Melayu pesisir Riau yang memanfaatkan sagu sebagai sumber karbohidrat utama sebelum beras meluas di wilayah tersebut. Masyarakat di Kepulauan Meranti, seperti di Selatpanjang dan Tebing Tinggi, mengolah sagu menjadi berbagai makanan, salah satunya mie sagu. Dahulu, mie ini dibuat secara manual dengan menekan adonan sagu melalui cetakan sederhana, lalu dikeringkan agar tahan lama. Mie Sagu menjadi simbol kemandirian dan kearifan lokal masyarakat pesisir yang hidup dari hasil bumi mereka sendiri. Hingga kini, Mie Sagu tetap menjadi ikon kuliner tradisional Riau yang menggambarkan kesederhanaan, cita rasa khas Melayu, dan kelestarian bahan pangan lokal.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa mie sagu kering (atau segar), tauge, daun kucai, dan ebi (udang kering) sebagai pelengkap.</li>
            <li>Rendam mie sagu dalam air hangat hingga lembut, lalu tiriskan dan sisihkan.</li>
            <li>Haluskan bumbu tradisional: bawang merah, bawang putih, cabai merah, dan sedikit garam.</li>
            <li>Tumis ebi hingga harum, kemudian masukkan bumbu halus dan tumis kembali hingga matang dan beraroma wangi.</li>
            <li>Tambahkan sedikit air atau kaldu udang, lalu masukkan mie sagu yang telah direndam.</li>
            <li>Tambahkan kecap asin dan sedikit gula merah untuk memberi cita rasa gurih manis khas Melayu.</li>
            <li>Masukkan tauge dan daun kucai, aduk rata hingga semua bahan matang dan tercampur sempurna.</li>
            <li>Masak hingga mie lembut, licin, dan tidak menggumpal — ciri khas mie sagu yang baik adalah kenyal namun tidak putus.</li>
            <li>Sajikan hangat dengan taburan bawang goreng dan irisan cabai jika suka pedas.</li>        
        </ul>`
    },
    {
        id: "sup-tunjang",
        title: "Sop Tunjang",
        origin: "Riau",
        image: "img/sup_tunjang_riau.jpg",
        description: "Sup Tunjang adalah kuliner khas Riau yang menggunakan bahan utama berupa kaki sapi (tunjang) yang direbus lama hingga empuk dan mengeluarkan kaldu kental alami. Kuahnya gurih, sedikit berlemak, dan harum rempah seperti serai, jahe, serta daun jeruk, menciptakan sensasi hangat dan nikmat. Daging dan urat tunjang yang lembut menjadi daya tarik utama hidangan ini. Sup Tunjang sering disajikan sebagai menu istimewa dalam jamuan keluarga, terutama di hari besar atau acara adat Melayu Riau.",
        history: "Sup Tunjang berasal dari tradisi kuliner masyarakat Melayu Riau yang gemar mengolah bagian sapi secara menyeluruh tanpa terbuang. Dahulu, kaki sapi dianggap bagian kurang berharga, namun masyarakat pesisir Riau yang kreatif mengolahnya menjadi hidangan berkelas dengan bumbu rempah Nusantara. Masakan ini mulai populer di daerah Pekanbaru dan sekitarnya, disajikan di warung-warung tradisional hingga rumah makan khas Melayu. Sup Tunjang melambangkan nilai kebersamaan, karena biasanya dimasak dalam porsi besar untuk disantap ramai-ramai. Kini, Sup Tunjang menjadi salah satu ikon kuliner berkuah dari Riau yang menunjukkan kekayaan rasa dan budaya masak tradisional masyarakatnya.",
        cookingSteps: `<ul>
            <li>Siapkan bahan utama berupa tunjang (kaki sapi), bawang merah, bawang putih, jahe, lengkuas, serai, daun salam, dan daun jeruk.</li>
            <li>Rebus tunjang dalam air mendidih selama beberapa menit untuk menghilangkan kotoran, lalu buang air rebusannya.</li>
            <li>Rebus kembali tunjang dengan air bersih hingga empuk (sekitar 2–3 jam secara tradisional menggunakan tungku kayu atau panci besar).</li>
            <li>Haluskan bumbu: bawang merah, bawang putih, jahe, dan sedikit ketumbar, lalu tumis hingga harum.</li>
            <li>Masukkan bumbu tumis ke dalam rebusan tunjang, tambahkan serai, daun salam, dan daun jeruk untuk aroma segar.</li>
            <li>Bumbui dengan garam, lada, dan sedikit kaldu bubuk atau penyedap alami seperti rebusan tulang sapi.</li>
            <li>Masak hingga kuah berwarna kekuningan dan berminyak alami dari sumsum dan lemak tunjang.</li>
            <li>Tambahkan potongan kentang dan wortel bila ingin versi lebih kaya isian.</li>
            <li>Sajikan panas dengan taburan daun bawang, bawang goreng, dan perasan jeruk nipis agar rasanya lebih segar.</li> 
        </ul>`
    },
    {
        id: "ikan-riau",
        title: "Ikan Baung Asam Pedas",
        origin: "Riau",
        image: "img/ikan_riau.jpg",
        description: "Ikan Baung Asam Pedas adalah hidangan tradisional Riau yang menggunakan ikan baung segar dimasak dalam kuah asam pedas beraroma rempah Melayu. Rasa kuahnya segar, pedas, dan asam alami dari asam jawa atau belimbing wuluh, berpadu dengan gurihnya ikan baung yang lembut dan manis. Tekstur ikan yang padat namun empuk membuat hidangan ini sangat digemari. Biasanya disajikan hangat sebagai lauk utama untuk makan bersama keluarga atau tamu.",
        history: "Ikan Baung Asam Pedas berasal dari tradisi kuliner masyarakat pesisir Riau, yang memanfaatkan ikan air tawar hasil tangkapan sungai seperti Baung dan Patin. Hidangan ini lahir dari kebutuhan masyarakat untuk mengawetkan rasa ikan dengan bumbu asam dan pedas, sekaligus menambah cita rasa agar tidak mudah basi di iklim tropis. Seiring waktu, resep ini menjadi populer dan diwariskan turun-temurun sebagai masakan khas Melayu Riau yang menggambarkan keseimbangan rasa asam, pedas, dan gurih yang menjadi ciri khas kuliner tradisional daerah tersebut.",
        cookingSteps: `<ul>
            <li>Siapkan ikan baung segar, bersihkan sisik, isi perut, dan buang insangnya, lalu kerat sedikit badan ikan agar bumbu meresap.</li>
            <li>Haluskan bumbu tradisional: bawang merah, bawang putih, cabai merah, cabai rawit, jahe, lengkuas, kunyit, kemiri, dan sedikit garam.</li>
            <li>Panaskan minyak kelapa, tumis bumbu halus hingga harum dan matang.</li>
            <li>Tambahkan air secukupnya, daun jeruk, daun salam, serai, dan asam jawa untuk memberi rasa asam pedas yang khas.</li>
            <li>Masukkan ikan baung ke dalam kuah, masak dengan api kecil agar ikan matang merata dan bumbu meresap tanpa hancur.</li>
            <li>Tambahkan tomat hijau atau belimbing wuluh jika ingin rasa asam lebih segar.</li>
            <li>Masak hingga kuah mengental sedikit dan rasa pedas-asam meresap sempurna ke ikan.</li>
            <li>Angkat dan sajikan hangat bersama nasi putih atau nasi uduk, taburi daun kemangi atau seledri sesuai selera.</li>
        </ul>`
    },
    {
        id: "gonggong",
        title: "Gonggong",
        origin: "Kepulauan Riau",
        image: "img/gonggong.jpg",
        description: "Gonggong adalah sejenis siput laut yang menjadi ikon kuliner Kepulauan Riau. Direbus sederhana dengan jahe dan serai, daging gonggong memiliki tekstur kenyal dan rasa gurih manis yang khas. Cara makannya pun unik, yaitu dengan mencungkil dagingnya menggunakan tusuk gigi. Disajikan dengan sambal asam pedas, gonggong menjadi hidangan pembuka atau camilan laut yang sangat digemari.",
        history: "Gonggong telah menjadi makanan masyarakat pesisir Kepulauan Riau sejak zaman dahulu. Sebagai hasil laut yang melimpah di perairan Bintan dan sekitarnya, gonggong menjadi sumber protein yang mudah didapat. Metode perebusan sederhana dipilih untuk mempertahankan rasa asli lautnya. Hidangan ini melambangkan kehidupan masyarakat bahari yang bersahaja namun kaya akan hasil alam.",
        cookingSteps: `<ul>
            <li>Cuci bersih cangkang gonggong dari pasir dan lumpur hingga benar-benar bersih.</li>
            <li>Siapkan panci besar, masukkan gonggong, air secukupnya hingga terendam.</li>
            <li>Geprek beberapa ruas jahe dan batang serai, lalu masukkan ke dalam rebusan. Tambahkan sedikit garam.</li>
            <li>Rebus di atas api sedang selama sekitar 15-20 menit atau hingga dagingnya matang. Jangan merebus terlalu lama agar daging tidak alot.</li>
            <li>Angkat dan tiriskan. Sajikan gonggong selagi hangat.</li>
            <li>Siapkan sambal pendamping: ulek cabai rawit, bawang putih, terasi bakar, dan garam. Beri perasan jeruk nipis atau cuka.</li>
            <li>Nikmati dengan cara mencungkil daging dari cangkangnya menggunakan tusuk gigi lalu cocolkan ke sambal.</li>
        </ul>`
    },
    {
        id: "otak-otak",
        title: "Otak-Otak Bakar",
        origin: "Kepulauan Riau",
        image: "img/otak_otak_kepri.jpeg",
        description: "Otak-otak khas Kepulauan Riau terkenal dengan adonan ikan tenggiri segar yang dicampur santan kental dan bumbu rempah. Adonan ini dibungkus daun kelapa atau pisang, lalu dibakar di atas bara arang. Hasilnya adalah penganan dengan aroma asap yang wangi, tekstur lembut dan kenyal, serta rasa gurih ikan yang kuat. Biasanya dinikmati dengan saus cuka merah atau saus kacang pedas.",
        history: "Otak-otak merupakan warisan kuliner maritim di Selat Malaka. Di Kepulauan Riau, hidangan ini disempurnakan dengan menggunakan ikan tenggiri segar dan dibungkus daun kelapa yang memberikan aroma khas saat dibakar. Awalnya, otak-otak adalah cara nelayan mengolah sisa tangkapan ikan menjadi camilan lezat. Kini, ia menjadi ikon oleh-oleh dan kuliner kebanggaan yang melambangkan kekayaan hasil laut.",
        cookingSteps: `<ul>
            <li>Haluskan daging ikan tenggiri segar menggunakan gilingan manual.</li>
            <li>Campurkan ikan giling dengan santan kental, tepung sagu, bawang putih halus, bawang merah iris, garam, dan gula. Uleni hingga adonan kalis.</li>
            <li>Siapkan daun kelapa muda atau daun pisang yang sudah dilayukan di atas api.</li>
            <li>Ambil satu sendok makan adonan, letakkan memanjang di atas daun, lalu bungkus dan sematkan ujungnya dengan lidi.</li>
            <li>Siapkan panggangan bara api dari arang tempurung kelapa untuk aroma terbaik.</li>
            <li>Bakar bungkusan otak-otak di atas bara api, bolak-balik hingga daunnya sedikit gosong dan adonan di dalamnya matang sempurna.</li>
            <li>Sajikan selagi hangat bersama saus cuka merah yang terbuat dari cabai, bawang putih, cuka, dan gula.</li>
        </ul>`
    },
    {
        id: "lakse-kuah",
        title: "Lakse Kuah",
        origin: "Kepulauan Riau",
        image: "img/lakse_kuah_kepri.jpg",
        description: "Lakse Kuah adalah hidangan mie sagu khas Melayu Kepulauan Riau yang disajikan dengan kuah kari ikan kental dan pedas. Kuahnya terbuat dari santan, ikan atau udang tumbuk, dan bumbu rempah seperti kunyit, lengkuas, dan serai. Tekstur mie sagu yang kenyal berpadu dengan kuah yang gurih dan kaya rasa, menciptakan hidangan yang hangat dan memuaskan.",
        history: "Lakse merupakan hidangan yang menunjukkan persilangan budaya antara Melayu, Tionghoa, dan India di wilayah pesisir. Resepnya diadaptasi dari hidangan 'laksa' yang populer di Asia Tenggara. Di Kepulauan Riau, khususnya di Lingga dan Natuna, lakse dibuat menggunakan bahan lokal utama yaitu sagu, yang diolah menjadi mie secara tradisional. Hidangan ini menjadi menu sarapan atau acara istimewa yang melambangkan kekayaan rempah dan hasil laut.",
        cookingSteps: `<ul>
            <li>Buat mie sagu secara tradisional: campurkan tepung sagu dengan air panas hingga menjadi adonan liat. Tekan adonan menggunakan cetakan kayu di atas air mendidih. Rebus hingga mie mengapung, angkat, dan sisihkan.</li>
            <li>Untuk kuah: rebus ikan (biasanya tongkol atau tenggiri), lalu ambil dagingnya dan tumbuk halus. Sisihkan kaldunya.</li>
            <li>Giling bumbu halus: cabai kering, bawang merah, bawang putih, kunyit, lengkuas, dan serai menggunakan batu gilingan.</li>
            <li>Tumis bumbu halus hingga harum. Masukkan ikan tumbuk dan aduk rata.</li>
            <li>Tuang kaldu ikan dan santan kental. Masak dengan api kecil sambil terus diaduk. Bumbui dengan garam.</li>
            <li>Masak hingga kuah mengental dan mengeluarkan minyak.</li>
            <li>Letakkan mie sagu dalam mangkuk, lalu siram dengan kuah lakse yang panas.</li>
            <li>Sajikan dengan taburan tauge segar dan sambal belacan.</li>
        </ul>`
    },
];