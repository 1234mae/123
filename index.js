const data = {
        duaa: [
            { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.", source: "دعاء مأثور" },
            { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى.", source: "صحيح مسلم: 2721" },
            { text: "يَا مُقَلِّبَ الْقُلُوبِ، ثَبِّتْ قَلْبِي عَلَى دِينِكَ.", source: "جامع الترمذي: 2140" },
            { text: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ.", source: "سنن أبي داود: 1522" },
            { text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.", source: "سورة البقرة: 201" },
            { text: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ.", source: "سورة الأعراف: 23" },
            { text: "اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي.", source: "صحيح مسلم: 2697" },
            { text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.", source: "صحيح البخاري: 6369" },
            { text: "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي.", source: "صحيح البخاري وصحيح مسلم" },
            { text: "اللَّهُمَّ مُصَرِّفَ الْقُلُوبِ، صَرِّفْ قُلُوبَنَا عَلَى طَاعَتِكَ.", source: "صحيح مسلم: 2654" },
            { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ.", source: "سنن أبي داود: 5074" },
            { text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ، وَمِنْ قَلْبٍ لَا يَخْشَعُ، وَمِنْ نَفْسٍ لَا تَشْبَعُ، وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا.", source: "صحيح مسلم: 2722" },
            { text: "رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي.", source: "سورة طه: 25-26" },
            { text: "رَبِّ زِدْنِي عِلْمًا.", source: "سورة طه: 114" },
            { text: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ.", source: "سورة آل عمران: 8" },
            { text: "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي.", source: "صحيح مسلم: 2725" },
            { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ.", source: "سنن أبي داود: 792" },
            { text: "يَا حَيُّ يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.", source: "المستدرك للحاكم: 2000" },
            { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنَ الْخَيْرِ كُلِّهِ، عَاجِلِهِ وَآجِلِهِ، مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ.", source: "سنن ابن ماجه: 3846" },
            { text: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ.", source: "سورة الأعراف: 126" },
            { text: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ.", source: "سورة المؤمنون: 118" }
        ],
        dailyDua: [
            { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى.", source: "صحيح مسلم: 2721" },
            { text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.", source: "سورة البقرة: 201" },
            { text: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ.", source: "سنن أبي داود: 1522" },
            { text: "رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي.", source: "سورة طه: 25-26" },
            { text: "اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي.", source: "صحيح مسلم: 2697" },
            { text: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ.", source: "سورة آل عمران: 8" },
            { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ.", source: "سنن أبي داود: 5074" }
        ],
        quran: [
            { text: "إِنَّ مَعَ الْعُسْرِ يُسْرًا.", source: "سورة الشرح: 6" },
            { text: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ.", source: "سورة الرعد: 28" },
            { text: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا ۝ وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ.", source: "سورة الطلاق: 2-3" },
            { text: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا.", source: "سورة البقرة: 286" },
            { text: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَى أَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا.", source: "سورة الزمر: 53" }
        ],
        azkar: [
            { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.", source: "100 مرة في اليوم، صحيح البخاري" },
            { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", source: "100 مرة، صحيح البخاري وصحيح مسلم" },
            { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", source: "100 مرة، صحيح البخاري وصحيح مسلم" },
            { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.", source: "3 مرات، صحيح مسلم: 2726" },
            { text: "سُبْحَانَ اللَّهِ الْعَظِيمِ وَبِحَمْدِهِ.", source: "صحيح البخاري وصحيح مسلم" },
            { text: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ.", source: "33 مرة لكل ذكر بعد الصلاة، صحيح البخاري وصحيح مسلم" },
            { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ...", source: "سيد الاستغفار، صباحًا ومساءً، صحيح البخاري: 6306" },
            { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ.", source: "من أذكار الصباح، صحيح مسلم" },
            { text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ.", source: "ذكر الصباح، سنن أبي داود والترمذي" },
            { text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.", source: "3 مرات صباحًا ومساءً، سنن أبي داود والترمذي" },
            { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.", source: "3 مرات صباحًا ومساءً، سنن أبي داود والترمذي" },
            { text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.", source: "3 مرات مساءً، صحيح مسلم: 2708" },
            { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ.", source: "من أذكار الصباح والمساء، سنن أبي داود" },
            { text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ.", source: "الصلاة على النبي ﷺ" },
            { text: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.", source: "كنز من كنوز الجنة، صحيح البخاري وصحيح مسلم" },
            { text: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ.", source: "من أحب الكلام إلى الله، صحيح مسلم" },
            { text: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ.", source: "4 مرات صباحًا، سنن أبي داود" },
            { text: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ.", source: "تملآن ما بين السماء والأرض، صحيح مسلم" },
            { text: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.", source: "عند النوم، سنن أبي داود والترمذي" },
            { text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.", source: "عند النوم، صحيح البخاري" }
        ],
        morningAzkar: [
            { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.", count: "مرة واحدة", source: "صحيح مسلم: 2723" },
            { text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.", count: "مرة واحدة", source: "سنن أبي داود: 5068، جامع الترمذي: 3391" },
            { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي؛ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.", count: "مرة واحدة", source: "صحيح البخاري: 6306 (سيد الاستغفار)" },
            { text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.", count: "3 مرات", source: "سنن أبي داود: 5072، جامع الترمذي: 3389" },
            { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.", count: "3 مرات", source: "سنن أبي داود: 5088، جامع الترمذي: 3388" },
            { text: "قُلْ هُوَ اللَّهُ أَحَدٌ، وَقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، وَقُلْ أَعُوذُ بِرَبِّ النَّاسِ.", count: "3 مرات لكل سورة", source: "سنن أبي داود: 5082، جامع الترمذي: 3575" }
        ],
        eveningAzkar: [
            { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.", count: "مرة واحدة", source: "صحيح مسلم: 2723" },
            { text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.", count: "مرة واحدة", source: "سنن أبي داود: 5068، جامع الترمذي: 3391" },
            { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي؛ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.", count: "مرة واحدة", source: "صحيح البخاري: 6306 (سيد الاستغفار)" },
            { text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.", count: "3 مرات", source: "سنن أبي داود: 5072، جامع الترمذي: 3389" },
            { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.", count: "3 مرات", source: "سنن أبي داود: 5088، جامع الترمذي: 3388" },
            { text: "قُلْ هُوَ اللَّهُ أَحَدٌ، وَقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، وَقُلْ أَعُوذُ بِرَبِّ النَّاسِ.", count: "3 مرات لكل سورة", source: "سنن أبي داود: 5082، جامع الترمذي: 3575" }
        ],
        prayerAzkar: [
            { text: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ.", count: "مرة واحدة", repeat: 1, source: "سنن أبي داود: 775، جامع الترمذي: 242" },
            { text: "سُبْحَانَ رَبِّيَ الْعَظِيمِ.", count: "٣ مرات", repeat: 3, source: "سنن أبي داود: 869" },
            { text: "سُبْحَانَ رَبِّيَ الْأَعْلَى.", count: "٣ مرات", repeat: 3, source: "سنن أبي داود: 872" },
            { text: "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي.", count: "مرتان", repeat: 2, source: "سنن أبي داود: 874" },
            { text: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ.", count: "مرة واحدة", repeat: 1, source: "صحيح البخاري: 831، صحيح مسلم: 402" }
        ],
        afterPrayerAzkar: [
            { text: "أَسْتَغْفِرُ اللَّهَ.", count: "٣ مرات", repeat: 3, source: "صحيح مسلم: 591" },
            { text: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.", count: "مرة واحدة", repeat: 1, source: "صحيح مسلم: 591" },
            { text: "سُبْحَانَ اللَّهِ.", count: "٣٣ مرة", repeat: 33, source: "صحيح مسلم: 597" },
            { text: "الْحَمْدُ لِلَّهِ.", count: "٣٣ مرة", repeat: 33, source: "صحيح مسلم: 597" },
            { text: "اللَّهُ أَكْبَرُ.", count: "٣٣ مرة", repeat: 33, source: "صحيح مسلم: 597" },
            { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", count: "مرة واحدة لإتمام المئة", repeat: 1, source: "صحيح مسلم: 597" },
            { text: "آيَةُ الْكُرْسِيِّ.", count: "مرة واحدة", repeat: 1, source: "النسائي في السنن الكبرى: 9848" },
            { text: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ.", count: "مرة واحدة", repeat: 1, source: "سنن أبي داود: 1522" },
            { text: "اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ.", count: "مرة واحدة", repeat: 1, source: "صحيح البخاري: 844، صحيح مسلم: 593" },
            { text: "قُلْ هُوَ اللَّهُ أَحَدٌ، وَقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، وَقُلْ أَعُوذُ بِرَبِّ النَّاسِ.", count: "مرة واحدة بعد الصلاة", repeat: 1, source: "سنن أبي داود: 1523" },
            { text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.", count: "مرة واحدة بعد صلاة الفجر", repeat: 1, source: "سنن ابن ماجه: 925" },
            { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", count: "١٠ مرات بعد الفجر والمغرب", repeat: 10, source: "جامع الترمذي: 3474، سنن أبي داود: 1523" }
        ],
        sleepAzkar: [
            { text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.", count: "مرة واحدة", repeat: 1, source: "صحيح البخاري: 6324" },
            { text: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.", count: "٣ مرات", repeat: 3, source: "سنن أبي داود: 5045" },
            { text: "آيَةُ الْكُرْسِيِّ.", count: "مرة واحدة", repeat: 1, source: "صحيح البخاري: 2311" },
            { text: "قُلْ هُوَ اللَّهُ أَحَدٌ، وَقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، وَقُلْ أَعُوذُ بِرَبِّ النَّاسِ.", count: "٣ مرات، مع النفث في الكفين والمسح على الجسد", repeat: 3, source: "صحيح البخاري: 5017" },
            { text: "سُبْحَانَ اللَّهِ.", count: "٣٣ مرة", repeat: 33, source: "صحيح البخاري: 6318، صحيح مسلم: 2727" },
            { text: "الْحَمْدُ لِلَّهِ.", count: "٣٣ مرة", repeat: 33, source: "صحيح البخاري: 6318، صحيح مسلم: 2727" },
            { text: "اللَّهُ أَكْبَرُ.", count: "٣٤ مرة", repeat: 34, source: "صحيح البخاري: 6318، صحيح مسلم: 2727" },
            { text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.", count: "مرة واحدة", repeat: 1, source: "صحيح البخاري: 6320، صحيح مسلم: 2714" },
            { text: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ.", count: "مرة واحدة", repeat: 1, source: "صحيح البخاري: 6311، صحيح مسلم: 2710" },
            { text: "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ... (آخر آيتين من سورة البقرة).", count: "مرة واحدة", repeat: 1, source: "صحيح البخاري: 5009، صحيح مسلم: 808" },
            { text: "اللَّهُمَّ رَبَّ السَّمَاوَاتِ السَّبْعِ وَرَبَّ الْأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ.", count: "مرة واحدة", repeat: 1, source: "صحيح مسلم: 2713" },
            { text: "اللَّهُمَّ أَنْتَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا.", count: "مرة واحدة", repeat: 1, source: "صحيح مسلم: 2712" },
            { text: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا، وَكَفَانَا وَآوَانَا، فَكَمْ مِمَّنْ لَا كَافِيَ لَهُ وَلَا مُؤْوِيَ.", count: "مرة واحدة", repeat: 1, source: "صحيح مسلم: 2715" },
            { text: "قُلْ يَا أَيُّهَا الْكَافِرُونَ.", count: "مرة واحدة", repeat: 1, source: "سنن أبي داود: 5055، جامع الترمذي: 3403" }
        ],
        wakingAzkar: [
            { text: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.", count: "مرة واحدة", repeat: 1, source: "صحيح البخاري: 6312" },
            { text: "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لِي بِذِكْرِهِ.", count: "مرة واحدة", repeat: 1, source: "جامع الترمذي: 3401" },
            { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.", count: "مرة واحدة عند الاستيقاظ ليلًا", repeat: 1, source: "صحيح البخاري: 1154" },
            { text: "اللَّهُمَّ اغْفِرْ لِي.", count: "مرة واحدة عند الاستيقاظ ليلًا", repeat: 1, source: "صحيح البخاري: 1154" }
        ],
        namesAllah: [
            "اللَّه", "الرَّحْمَن", "الرَّحِيم", "الْمَلِك", "الْقُدُّوس", "السَّلَام", "الْمُؤْمِن", "الْمُهَيْمِن", "الْعَزِيز", "الْجَبَّار",
            "الْمُتَكَبِّر", "الْخَالِق", "الْبَارِئ", "الْمُصَوِّر", "الْغَفَّار", "الْقَهَّار", "الْوَهَّاب", "الرَّزَّاق", "الْفَتَّاح", "الْعَلِيم",
            "الْقَابِض", "الْبَاسِط", "الْخَافِض", "الرَّافِع", "الْمُعِزّ", "الْمُذِلّ", "السَّمِيع", "الْبَصِير", "الْحَكَم", "الْعَدْل",
            "اللَّطِيف", "الْخَبِير", "الْحَلِيم", "الْعَظِيم", "الْغَفُور", "الشَّكُور", "الْعَلِيّ", "الْكَبِير", "الْحَفِيظ", "الْمُقِيت",
            "الْحَسِيب", "الْجَلِيل", "الْكَرِيم", "الرَّقِيب", "الْمُجِيب", "الْوَاسِع", "الْحَكِيم", "الْوَدُود", "الْمَجِيد", "الْبَاعِث",
            "الشَّهِيد", "الْحَقّ", "الْوَكِيل", "الْقَوِيّ", "الْمَتِين", "الْوَلِيّ", "الْحَمِيد", "الْمُحْصِي", "الْمُبْدِئ", "الْمُعِيد",
            "الْمُحْيِي", "الْمُمِيت", "الْحَيّ", "الْقَيُّوم", "الْوَاجِد", "الْمَاجِد", "الْوَاحِد", "الصَّمَد", "الْقَادِر", "الْمُقْتَدِر",
            "الْمُقَدِّم", "الْمُؤَخِّر", "الْأَوَّل", "الْآخِر", "الظَّاهِر", "الْبَاطِن", "الْوَالِي", "الْمُتَعَالِي", "الْبَرّ", "التَّوَّاب",
            "الْمُنْتَقِم", "الْعَفُوّ", "الرَّؤُوف", "مَالِكُ الْمُلْك", "ذُو الْجَلَالِ وَالْإِكْرَام", "الْمُقْسِط", "الْجَامِع", "الْغَنِيّ", "الْمُغْنِي", "الْمَانِع",
            "الضَّارّ", "النَّافِع", "النُّور", "الْهَادِي", "الْبَدِيع", "الْبَاقِي", "الْوَارِث", "الرَّشِيد", "الصَّبُور"
        ].map(text => ({ text })),
        hadith: [
            { text: "«إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى».", source: "صحيح البخاري: 1، صحيح مسلم: 1907" },
            { text: "«مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ».", source: "صحيح البخاري: 6018، صحيح مسلم: 47" },
            { text: "«لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ».", source: "صحيح البخاري: 13، صحيح مسلم: 45" },
            { text: "«لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ».", source: "صحيح البخاري: 6114، صحيح مسلم: 2609" },
            { text: "«الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ»." , source: "صحيح البخاري: 2989، صحيح مسلم: 1009" },
            { text: "«مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ»." , source: "صحيح البخاري وصحيح مسلم" },
            { text: "«مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ»." , source: "صحيح البخاري وصحيح مسلم" },
            { text: "«مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَصِلْ رَحِمَهُ»." , source: "صحيح البخاري وصحيح مسلم" },
            { text: "«أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ»." , source: "صحيح البخاري وصحيح مسلم" },
            { text: "«يَسِّرُوا وَلَا تُعَسِّرُوا، وَبَشِّرُوا وَلَا تُنَفِّرُوا»." , source: "صحيح البخاري وصحيح مسلم" },
            { text: "«الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ»." , source: "صحيح البخاري وصحيح مسلم" },
            { text: "«لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ»." , source: "صحيح البخاري وصحيح مسلم" },
            { text: "«مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ»." , source: "صحيح البخاري وصحيح مسلم" },
            { text: "«مَنْ لَا يَرْحَمْ لَا يُرْحَمْ»." , source: "صحيح البخاري وصحيح مسلم" },
            { text: "«اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ»." , source: "صحيح البخاري وصحيح مسلم" },
            { text: "«الدِّينُ يُسْرٌ»." , source: "صحيح البخاري" },
            { text: "«الْحَيَاءُ شُعْبَةٌ مِنَ الْإِيمَانِ»." , source: "صحيح البخاري وصحيح مسلم" },
            { text: "«الْمَرْءُ مَعَ مَنْ أَحَبَّ»." , source: "صحيح البخاري وصحيح مسلم" },
            { text: "«إِنَّ اللَّهَ لَا يَقْبِضُ الْعِلْمَ انْتِزَاعًا يَنْتَزِعُهُ مِنَ الْعِبَادِ، وَلَكِنْ يَقْبِضُ الْعِلْمَ بِقَبْضِ الْعُلَمَاءِ»." , source: "صحيح البخاري وصحيح مسلم" },
            { text: "«لَا يَدْخُلُ الْجَنَّةَ قَاطِعٌ»." , source: "صحيح مسلم: 2556" },
            { text: "«لَا تَغْضَبْ»." , source: "صحيح البخاري" },
            { text: "«سَدِّدُوا وَقَارِبُوا وَأَبْشِرُوا»." , source: "صحيح البخاري وصحيح مسلم" },
            { text: "«إِنَّ الرِّفْقَ لَا يَكُونُ فِي شَيْءٍ إِلَّا زَانَهُ»." , source: "صحيح مسلم" },
            { text: "«مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا، سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ»." , source: "صحيح مسلم: 2699" }
        ],
    };

    const currentIndexes = {};
    const remainingRepetitions = {};
    const sectionTitles = {
        duaa: 'أدعية',
        dailyDua: 'دعاء اليوم',
        quran: 'القرآن الكريم',
        azkar: 'أذكار',
        morningAzkar: 'أذكار الصباح',
        eveningAzkar: 'أذكار المساء',
        prayerAzkar: 'أذكار الصلاة',
        afterPrayerAzkar: 'أذكار بعد الصلاة',
        sleepAzkar: 'أذكار النوم',
        wakingAzkar: 'أذكار الاستيقاظ',
        namesAllah: 'أسماء الله الحسنى',
        hadith: 'أحاديث نبوية'
    };
    const englishSectionTitles = {
        duaa: 'Supplications',
        dailyDua: 'Dua of the Day',
        quran: 'The Holy Quran',
        azkar: 'Remembrance',
        morningAzkar: 'Morning Athkar',
        eveningAzkar: 'Evening Athkar',
        prayerAzkar: 'Prayer Athkar',
        afterPrayerAzkar: 'After-Prayer Athkar',
        sleepAzkar: 'Athkar Before Sleep',
        wakingAzkar: 'Athkar Upon Waking',
        namesAllah: 'Names of Allah',
        hadith: 'Prophetic Hadiths'
    };
    const englishHomeLabels = {
        duaa: '🤲 Supplications',
        dailyDua: '🌿 Dua of the Day',
        quran: '📖 The Holy Quran',
        azkar: '📿 Remembrance',
        morningAzkar: '🌅 Morning Athkar',
        eveningAzkar: '🌙 Evening Athkar',
        prayerAzkar: '🕌 Prayer Athkar',
        afterPrayerAzkar: '📿 After-Prayer Athkar',
        sleepAzkar: '🌙 Athkar Before Sleep',
        wakingAzkar: '🌅 Athkar Upon Waking',
        namesAllah: '✨ Names of Allah',
        hadith: '📜 Prophetic Hadiths'
    };
    const translations = {
        ar: {
            appTitle: '🕌 التطبيق الإسلامي',
            settings: 'الإعدادات',
            openSettings: 'فتح الإعدادات',
            fontSize: 'حجم الخط',
            decreaseFont: 'تصغير الخط',
            increaseFont: 'تكبير الخط',
            language: 'اللغة',
            backHome: 'العودة إلى الصفحة الرئيسية',
            back: 'الرجوع',
            next: 'التالي',
            remaining: 'المتبقي',
            record: 'تسجيل تكرار',
            complete: 'اكتمل الذكر',
            item: 'العنصر',
            of: 'من',
            dhikr: 'الذكر',
            source: 'المصدر',
            hadithLabel: 'حديث نبوي',
            quranLabel: 'آية من القرآن الكريم',
            duaLabel: 'دعاء',
            dailyDuaLabel: 'دعاء اليوم',
            verifyHadith: 'تحقق من الحديث في الموسوعة الحديثية',
            once: 'مرة واحدة',
            twice: 'مرتان',
            times: 'مرات',
            repeatCount: 'عدد مرات التكرار'
        },
        en: {
            appTitle: '🕌 Islamic App',
            settings: 'Settings',
            openSettings: 'Open settings',
            fontSize: 'Font size',
            decreaseFont: 'Decrease font size',
            increaseFont: 'Increase font size',
            language: 'Language',
            backHome: 'Return to home page',
            back: 'Previous',
            next: 'Next',
            remaining: 'Remaining',
            record: 'Count repetition',
            complete: 'Completed',
            item: 'Item',
            of: 'of',
            dhikr: 'Dhikr',
            source: 'Source',
            hadithLabel: 'Prophetic Hadith',
            quranLabel: 'Quran verse',
            duaLabel: 'Supplication',
            dailyDuaLabel: 'Dua of the Day',
            verifyHadith: 'Verify this hadith',
            once: 'Once',
            twice: 'Twice',
            times: 'times',
            repeatCount: 'Repetitions'
        }
    };
    let currentSection = null;
    let currentLanguage = 'ar';
    let fontScale = 1;

    function t(key) {
        return translations[currentLanguage][key];
    }

    function savePreference(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            // Preferences still apply for this page view when storage is unavailable.
        }
    }

    function applyLanguage(language) {
        currentLanguage = language === 'en' ? 'en' : 'ar';
        const isEnglish = currentLanguage === 'en';
        document.documentElement.lang = currentLanguage;
        document.documentElement.dir = isEnglish ? 'ltr' : 'rtl';
        document.title = isEnglish ? 'Islamic App' : 'تطبيقي الإسلامي';
        document.querySelector('h1').textContent = t('appTitle');
        document.getElementById('settingsTitle').textContent = t('settings');
        document.getElementById('settingsToggle').setAttribute('aria-label', t('openSettings'));
        document.getElementById('settingsToggle').title = t('settings');
        document.getElementById('fontSizeLabel').textContent = t('fontSize');
        document.getElementById('decreaseFont').setAttribute('aria-label', t('decreaseFont'));
        document.getElementById('increaseFont').setAttribute('aria-label', t('increaseFont'));
        document.querySelector('.setting-row[for="languageSelect"] span').textContent = t('language');
        document.querySelector('#languageSelect option[value="ar"]').textContent = isEnglish ? 'Arabic' : 'العربية';
        document.getElementById('homeArrow').setAttribute('aria-label', t('backHome'));
        document.getElementById('homeArrow').title = t('backHome');
        document.getElementById('backButton').textContent = t('back');
        document.getElementById('nextButton').textContent = t('next');
        document.querySelector('.content-navigation').setAttribute('aria-label', isEnglish ? 'Content navigation' : 'التنقل بين المحتوى');
        document.querySelectorAll('#homeScreen [data-section]').forEach(button => {
            if (!button.dataset.arLabel) button.dataset.arLabel = button.textContent;
            button.textContent = isEnglish ? englishHomeLabels[button.dataset.section] : button.dataset.arLabel;
        });
        document.getElementById('sectionTitle').textContent = currentSection
            ? (isEnglish ? englishSectionTitles[currentSection] : sectionTitles[currentSection])
            : '';
        updateSystemClock();
        if (currentSection) renderCurrentContent();
    }

    function applyFontScale(scale) {
        fontScale = Math.min(1.5, Math.max(1, scale));
        document.documentElement.style.setProperty('--font-scale', fontScale.toFixed(1));
        savePreference('islamicAppFontScale', fontScale.toFixed(1));
    }

    function getDorarSearchUrl(text) {
        const searchText = text.replace(/[«»]/g, '').replace(/[\u064B-\u065F\u0670]/g, '').trim();
        return `https://dorar.net/hadith/search?q=${encodeURIComponent(searchText)}`;
    }

    function getDhikrRepeatCount(item) {
        if (Number.isInteger(item.repeat)) return item.repeat;

        const countText = item.count || '';
        const sourceText = item.source || '';
        const countMatch = countText.match(/[0-9٠-٩۰-۹]+/);
        const sourceMatch = sourceText.match(/([0-9٠-٩۰-۹]+)\s*(?:مرّة|مرة|مرات|مرتين)/);
        const match = countMatch || sourceMatch;
        if (!match) {
            if (countText.includes('مرتين')) return 2;
            if (countText.includes('مرة')) return 1;
            return 1;
        }

        const normalizedNumber = match[1] || match[0];
        const repeat = Number(normalizedNumber.replace(/[٠-٩۰-۹]/g, digit =>
            String(digit.charCodeAt(0) >= 0x06f0 ? digit.charCodeAt(0) - 0x06f0 : digit.charCodeAt(0) - 0x0660)
        ));
        return Number.isSafeInteger(repeat) && repeat > 0 ? repeat : 1;
    }

    function formatRepeatCount(repeat) {
        const numberFormat = new Intl.NumberFormat(currentLanguage === 'en' ? 'en-US' : 'ar-EG');
        if (repeat === 1) return t('once');
        if (repeat === 2) return t('twice');
        return `${numberFormat.format(repeat)} ${currentLanguage === 'en' ? t('times') : repeat <= 10 ? t('times') : 'مرة'}`;
    }

    function renderDhikrList(section, content, displayBox) {
        const numberFormat = new Intl.NumberFormat(currentLanguage === 'en' ? 'en-US' : 'ar-EG');
        const sectionRepetitions = remainingRepetitions[section] || (remainingRepetitions[section] = {});
        displayBox.innerHTML = `<div class="dhikr-list">${content.map((item, index) => {
            const repeat = getDhikrRepeatCount(item);
            const remaining = sectionRepetitions[index] ?? repeat;
            const count = currentLanguage === 'en'
                ? formatRepeatCount(repeat)
                : item.count
                    ? item.count.replace(/[0-9]+/g, digits => numberFormat.format(Number(digits)))
                    : formatRepeatCount(repeat);
            return `<article class="dhikr-card">
                <div class="dhikr-number">${numberFormat.format(index + 1)}</div>
                <div class="dhikr-text">${item.text}</div>
                <span class="azkar-count">${count}</span>
                ${item.source ? `<span class="source-tag">${currentLanguage === 'en' ? `${t('source')}: ` : ''}${item.source}</span>` : ''}
                <div class="repeat-control">
                    <span>${t('remaining')}</span>
                    <strong aria-live="polite">${numberFormat.format(remaining)}</strong>
                    <button type="button" data-repeat-index="${index}" aria-label="${t('repeatCount')}"${remaining === 0 ? ' disabled' : ''}>${remaining === 0 ? t('complete') : t('record')}</button>
                </div>
            </article>`;
        }).join('')}</div>`;
    }

    function showSection(section) {
        if (!data[section]) {
            return;
        }

        currentSection = section;
        currentIndexes[section] = 0;
        document.getElementById('homeScreen').hidden = true;
        document.getElementById('contentPage').hidden = false;
        document.getElementById('sectionTitle').textContent = currentLanguage === 'en' ? englishSectionTitles[section] : sectionTitles[section];
        renderCurrentContent();
    }

    function renderCurrentContent() {
        const content = data[currentSection];
        const item = content[currentIndexes[currentSection]];
        const displayBox = document.getElementById('displayBox');
        const itemNumber = document.getElementById('itemNumber');
        const navigation = document.querySelector('.content-navigation');
        const isDhikrSection = currentSection.toLowerCase().includes('azkar');
        const isNamesSection = currentSection === 'namesAllah';
        const contentPage = document.getElementById('contentPage');
        contentPage.classList.toggle('dhikr-page', isDhikrSection);
        contentPage.classList.toggle('names-page', isNamesSection);
        itemNumber.hidden = isDhikrSection || isNamesSection;
        navigation.hidden = isDhikrSection || isNamesSection;

        if (isDhikrSection) {
            renderDhikrList(currentSection, content, displayBox);
            return;
        }
        if (isNamesSection) {
            const numberFormat = new Intl.NumberFormat(currentLanguage === 'en' ? 'en-US' : 'ar-EG');
                displayBox.innerHTML = `<div class="name-grid">${content.map((name, index) => `
                <article class="name-card">
                    <span class="name-number">${numberFormat.format(index + 1)}</span>
                    <span>${name.text}</span>
                </article>`).join('')}</div>`;
            return;
        }

        const numberFormat = new Intl.NumberFormat(currentLanguage === 'en' ? 'en-US' : 'ar-EG');
        const itemLabel = t('item');
        itemNumber.textContent = `${itemLabel} ${numberFormat.format(currentIndexes[currentSection] + 1)} ${t('of')} ${numberFormat.format(content.length)}`;
        let repeatControl = '';
        if (Number.isInteger(item.repeat)) {
            const sectionRepetitions = remainingRepetitions[currentSection] || (remainingRepetitions[currentSection] = {});
            const remaining = sectionRepetitions[currentIndexes[currentSection]] ?? item.repeat;
            repeatControl = `<div class="repeat-control"><span>${t('remaining')}</span><strong>${numberFormat.format(remaining)}</strong><button type="button" id="recordRepeatButton"${remaining === 0 ? ' disabled' : ''}>${remaining === 0 ? t('complete') : t('record')}</button></div>`;
        }
        const label = currentSection === 'hadith' ? t('hadithLabel')
            : currentSection === 'quran' ? t('quranLabel')
                : currentSection === 'dailyDua' ? t('dailyDuaLabel') : t('duaLabel');
        const source = `<span class="source-tag">${currentLanguage === 'en' ? `${t('source')}: ` : ''}${item.source}</span>`;
        const count = item.count ? `<span class="azkar-count">${item.count}</span>` : '';
        const hadithLink = currentSection === 'hadith'
            ? `<a class="dorar-link" href="${getDorarSearchUrl(item.text)}" target="_blank" rel="noopener noreferrer">${t('verifyHadith')}</a>`
            : '';

        displayBox.innerHTML = `<span class="hadith-tag">${label}</span><div>${item.text}</div>${count}${repeatControl}${source}${hadithLink}`;
    }

    function showHome() {
        document.getElementById('contentPage').hidden = true;
        document.getElementById('homeScreen').hidden = false;
        currentSection = null;
    }

    function updateSystemClock() {
        const clock = document.getElementById('systemClock');
        if (!clock) return;

        const now = new Date();
        const formatted = new Intl.DateTimeFormat(currentLanguage === 'en' ? 'en-US' : 'ar-EG', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZoneName: 'short'
        }).format(now);

        clock.textContent = formatted;
    }

    document.querySelector('.grid').addEventListener('click', event => {
        const sectionButton = event.target.closest('button[data-section]');
        if (sectionButton) {
            showSection(sectionButton.dataset.section);
        }
    });
    document.getElementById('backButton').addEventListener('click', () => {
        if (!currentSection) return;
        const contentLength = data[currentSection].length;
        currentIndexes[currentSection] = (currentIndexes[currentSection] - 1 + contentLength) % contentLength;
        renderCurrentContent();
    });
    document.getElementById('homeArrow').addEventListener('click', showHome);
    document.getElementById('displayBox').addEventListener('click', event => {
        const repeatButton = event.target.closest('[data-repeat-index], #recordRepeatButton');
        if (!repeatButton || !currentSection) return;
        const isDhikrList = currentSection.toLowerCase().includes('azkar');
        const index = isDhikrList ? Number(repeatButton.dataset.repeatIndex) : currentIndexes[currentSection];
        if (!Number.isInteger(index) || index < 0 || index >= data[currentSection].length) return;
        const item = data[currentSection][index];
        const repeat = isDhikrList ? getDhikrRepeatCount(item) : item.repeat;
        if (!Number.isInteger(repeat)) return;
        const sectionRepetitions = remainingRepetitions[currentSection] || (remainingRepetitions[currentSection] = {});
        const remaining = sectionRepetitions[index] ?? repeat;
        if (remaining > 0) {
            sectionRepetitions[index] = remaining - 1;
            if (isDhikrList) {
                renderDhikrList(currentSection, data[currentSection], document.getElementById('displayBox'));
            } else {
                renderCurrentContent();
            }
        }
    });
    document.getElementById('nextButton').addEventListener('click', () => {
        if (!currentSection) return;
        currentIndexes[currentSection] = (currentIndexes[currentSection] + 1) % data[currentSection].length;
        renderCurrentContent();
    });

    const settingsToggle = document.getElementById('settingsToggle');
    const settingsPanel = document.getElementById('settingsPanel');
    settingsToggle.addEventListener('click', () => {
        const isOpen = settingsPanel.hidden;
        settingsPanel.hidden = !isOpen;
        settingsToggle.setAttribute('aria-expanded', String(isOpen));
    });
    document.getElementById('increaseFont').addEventListener('click', () => applyFontScale(fontScale + 0.1));
    document.getElementById('decreaseFont').addEventListener('click', () => applyFontScale(fontScale - 0.1));
    document.getElementById('languageSelect').addEventListener('change', event => {
        savePreference('islamicAppLanguage', event.target.value);
        applyLanguage(event.target.value);
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !settingsPanel.hidden) {
            settingsPanel.hidden = true;
            settingsToggle.setAttribute('aria-expanded', 'false');
            settingsToggle.focus();
        }
    });

    try {
        const savedLanguage = localStorage.getItem('islamicAppLanguage');
        const savedFontScale = Number(localStorage.getItem('islamicAppFontScale'));
        if (savedFontScale >= 1 && savedFontScale <= 1.5) fontScale = savedFontScale;
        document.getElementById('languageSelect').value = savedLanguage === 'en' ? 'en' : 'ar';
    } catch (error) {
        document.getElementById('languageSelect').value = 'ar';
    }
    applyFontScale(fontScale);
    applyLanguage(document.getElementById('languageSelect').value);
    updateSystemClock();
    setInterval(updateSystemClock, 1000);
