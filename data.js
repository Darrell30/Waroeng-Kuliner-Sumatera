const foodData = [
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
        id: "pempek",
        title: "Pempek Palembang",
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
    }
];