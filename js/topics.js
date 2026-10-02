/**
 * German B2 Sprechen Teil 2 (Thema präsentieren) & Teil 3 (Gemeinsam planen)
 * Complete with authentic German texts and Arabic translations.
 */

const EXERCISES_TEIL2 = [
    {
        id: "t2-wohngemeinschaft",
        teil: 2,
        title: "Leben in einer Wohngemeinschaft (WG)",
        text: "Das Leben in einer Wohngemeinschaft, einer WG: Man liebt es oder man hasst es.\nUnd nicht jeder ist dafür gemacht.\nDennoch sammeln viele Menschen im Laufe ihres Lebens Erfahrungen mit Wohngemeinschaften.\nMit Gleichgesinnten oder Freunden zusammen zu wohnen bringt allerdings Konflikte mit sich.\nWährend unter Studenten noch Berge ungespülten Geschirrs zum Zank führen, sind die Reibungspunkte zwischen älteren Menschen ganz andere.\nDabei blicken ältere Menschen auf ein wesentlich längeres Leben zurück.\nAndere Aspekte lassen das Ideal der Pflege-WGs erstrebenswert erscheinen: ein selbstbestimmtes, möglichst unabhängiges Leben in Gemeinschaft führen, der gefürchteten Alterseinsamkeit entgehen und trotzdem professionelle Unterstützung erhalten.\nDie sozialen Verbände fürchten hingegen eine Verschlechterung der aktuellen Pflegesituation und sprechen von einer Lösung, bei der schwer pflegebedürftige Menschen aus Kostengründen in WGs abgeschoben werden sollen.\nAuch Pflegebedürftige, die in einer Wohngemeinschaft leben, werden weiter auf ambulante Pflege oder eine angestellte Pflegekraft angewiesen sein.\nViele pflegebedürftige Menschen wünschen sich aber genau das: lediglich Hilfestellungen, um ein durch Selbstständigkeit geprägtes Leben und den eigenen Wohnstil so weit wie möglich beibehalten zu können.\nEin verklärter Blick auf ein vermeintlich selbstbestimmtes Leben in Pflege-Wohngemeinschaften mag naiv erscheinen, für den einen oder anderen kann es aber genau das Richtige sein.",
        ar: "الحياة في سكن مشترك (WG): تجربة يعيشها الكثيرون، خاصة في فترة الدراسة أو في الكبر ضمن مساكن الرعاية المشتركة. تجمع بين تقليل التكاليف ومحاربة العزلة، لكنها قد تسبب خلافات حول النظافة والخصوصية واستقلالية المعيشة."
    },
    {
        id: "t2-antibiotika",
        teil: 2,
        title: "Einsatz von Antibiotika und Resistenzen",
        text: "Als Antibiotika werden Medikamente bezeichnet, die gegen krankmachende Bakterien eingesetzt werden.\nFrüher starben auch in Deutschland Menschen an Halsentzündungen oder Lungenentzündungen.\nDas ist durch Antibiotika heute kaum noch der Fall.\nDoch in den letzten Jahren haben Ärzte und Patienten immer öfter festgestellt, dass Antibiotika nicht mehr wirken.\nBestimmte Bakterien lassen sich nicht mehr mit Antibiotika bekämpfen.\nSie sind gegen Antibiotika resistent geworden und wieder gefährlicher als früher.\nGründe für diese Resistenzentwicklung sind einerseits darin zu sehen, dass Antibiotika oft verschrieben werden, obwohl es gar nicht nötig ist, etwa bei einer banalen Erkältung mit Halsweh, Husten und Schnupfen, die in der Regel nicht durch Bakterien verursacht wird.\nDer Einsatz von Antibiotika in der Tierhaltung fördert auch über unsere Nahrung die Resistenzentwicklung.\nAuf der anderen Seite kann sicherlich auch die unsachgemäße Anwendung durch die Patienten für die schwindende Wirksamkeit der Antibiotika mitverantwortlich gemacht werden.\nInsbesondere ein vorzeitiger Abbruch der Therapie bei scheinbar verschwundenen Krankheitssymptomen kann dazu führen, dass überlebende Keime sich erneut vermehren und dabei noch Resistenzen gegen das Medikament entwickeln, was beim nächsten Einsatz schlimme Folgen haben kann.\nFür viele bakteriell verursachte Beschwerden können zunächst Heilpflanzen eingesetzt werden.\nSo hilft Salbei bei Entzündungen im Mund- und Rachenraum und Thymian gegen Husten oder Teebaumöl bei Hautinfektionen.",
        ar: "أهمية المضادات الحيوية في علاج الأمراض البكتيرية، ومخاطر تطور المقاومة البكتيرية الناتجة عن الإفراط في وصفها أو إيقاف العلاج مبكرًا، واستخدام الأعشاب كبديل أولي."
    },
    {
        id: "t2-rentenalter-75",
        teil: 2,
        title: "Renteneintrittsalter: Arbeiten bis 75?",
        text: "Das Rentensystem in seiner derzeitigen Form ist auf Dauer nicht finanzierbar.\nDoch ist „Arbeiten bis 75“ die Lösung?\nIn der Debatte um das Renteneintrittsalter wird stets darauf hingewiesen, dass in Deutschland wie auch im übrigen Europa die Rente im Durchschnitt deutlich vor dem gesetzlichen Rentenalter angetreten wird.\nEs sei gar nicht notwendig, das Rentenalter zu erhöhen; es würde reichen, es auch tatsächlich einzuhalten.\nDem kann man entgegenhalten, dass das Pensionssystem vor 100 Jahren eingeführt wurde und dringend angepasst werden muss.\nDie Lebenserwartung ist seit den 1970er-Jahren von 70 auf 81 Jahre angestiegen, und der Rentenzeitraum hat sich von sieben auf 23 Jahre verlängert.\nDiesen veränderten Gegebenheiten sollte Rechnung getragen werden.\nDoch schon jetzt haben es ältere Arbeitnehmer schwer, eine Beschäftigung zu finden.\nSpätestens ab 50 gelten Arbeitslose als kaum vermittelbar.\nZudem kann nicht jeder bis ins hohe Alter arbeiten.\nAuch wenn die Menschen heute länger gesund bleiben, steigt die Neigung zu Krankheiten ab 65 dennoch stark an.\nDeshalb empfehlen viele Experten, das Rentenalter flexibel zu gestalten.",
        ar: "الجدل حول رفع سن التقاعد إلى 75 عامًا لمواجهة زيادة متوسط العمر، مقابل الصعوبات الصحية لكبار السن وضعف فرص التوظيف بعد سن الخمسين."
    },
    {
        id: "t2-hausfrau",
        teil: 2,
        title: "Hausfrau als Lebensentwurf",
        text: "Die bürgerliche Hausfrau war über Jahrhunderte eine machtvolle Person.\nSie war Wirtschafterin – das Wort „Haushalt“ bedeutet ja nichts anderes als „Ökonomie“.\nSie war Schneiderin, Wäscherin, Bäuerin, Krankenschwester und Lehrerin.\nUnd heute?\nHausfrau sein kann ein alternativer Lebensentwurf sein, ein Widerstand gegen alle Aufdringlichkeiten des Zeitgeistes.\nDie bewusste Hausfrau habe, was Kinder zum Großwerden brauchen, sagen Befürworter dieses Lebensentwurfs: Zeit.\nZeit zum Spazierengehen, zum Plätzchenbacken, zum Basteln, zum Vorlesen.\nDie Entscheidung einer Frau, sich für den absehbaren Rest ihres Lebens nur noch um die Familie und den Haushalt zu kümmern, betreffe nicht nur ihr eigenes Leben, sondern auch das des Mannes, lautet ein Einwand gegen diese Vorstellung.\nSie verpasse ihm die alleinige Rolle des Ernährers, was nicht mehr zeitgemäß sei.\nZudem würde in die Bildung von Mädchen Geld investiert, und diese Bildung solle der Gesellschaft zugutekommen.\nDiesem Einwand kann man entgegenhalten, dass die Ausbildung nicht brachliegt, sondern in die Erziehung der Kinder einfließt.",
        ar: "دور ربة المنزل كخيار واعٍ لتوفير الرعاية والوقت للأبناء، مقابل الاعتراضات التي ترى ضرورة استثمار تعليم المرأة ومشاركتها في سوق العمل والاستقلال المالي."
    },
    {
        id: "t2-kinderuni",
        teil: 2,
        title: "Kinderuniversität – Lernen in den Ferien",
        text: "Lernen in den Ferien?\nFür über 500 Kinder, die sich im großen Hörsaal der Universität Tübingen versammelt haben, beginnt eine aufregende Zeit.\nSeit 2002 bietet die Universität Tübingen als erste deutsche Universität Lehrveranstaltungen für Kinder an.\nGelernt wird hier in den Sommerferien – ohne Schulstress ohne Noten.\nEs wird gelacht, gefragt und gestaunt.\nDer Besuch der Veranstaltungen ist freiwillig.\nDas Angebot richtet sich an besonders interessierte Kinder im Alter von acht bis zwölf Jahren.\nTypische Veranstaltungstitel sind zum Beispiel: Warum ist Spielen wichtig? Warum müssen wir sterben? Warum sind wir schlauer als Roboter?\nHeute sind die Kinderuniversitäten aus dem Uni-Alltag nicht mehr wegzudenken.\nÜber 50 Kinderuniversitäten gibt es mittlerweile in Deutschland.\nDoch die Idee findet nicht nur Befürworter.\nKinderärzte warnen davor, dass Kinder sich in den Ferien auch ausreichend bewegen und Sport treiben müssen.\nEltern merken an, dass oft nur ohnehin gute Schüler teilnehmen.",
        ar: "جامعات الأطفال التي تقدم محاضرات علمية مبسطة في العطلة دون درجات أو ضغط، بين تشجيع الفضول العلمي لدى الصغار وضرورة تخصيص وقت كافٍ للرياضة واللعب."
    },
    {
        id: "t2-schuluniform",
        teil: 2,
        title: "Schuluniformen an Schulen",
        text: "Der Gruppenzwang unter den Jugendlichen ist ein Problem, das man mit allen möglichen Mitteln zu bekämpfen versucht.\nWer die falschen Klamotten trägt, kann schnell zum Außenseiter werden.\nIst die Schuluniform vielleicht eine Hilfe?\nSeit Jahren klagt man gegen die zunehmende Markenorientierung von Schülern und die damit verbundene soziale Ausgrenzung.\nDer dadurch entstehende soziale Druck, teure und angesagte Marken zu tragen, ist für Schülerinnen und Schüler extrem hoch und trägt nicht selten zum angespannten Arbeitsklima und zur abgeschwächten Konzentration im Unterricht bei.\nEine einheitliche Schulkleidung würde das Zusammengehörigkeitsgefühl der Schülerinnen und Schüler untereinander stärken.\nAuf der anderen Seite sind Schuluniformen kein Allheilmittel.\nAggressionen und soziale Konflikte lassen sich durch Uniformen nicht einfach beseitigen.\nDie Vermittlung von gegenseitigem Respekt kann nur im Dialog erfolgen, weshalb viele ein staatliches Uniformverbot ablehnen.",
        ar: "إيجابيات الزي المدرسي الموحد في تقليل التفرقة والضغط النفسي الناتج عن الماركات باهظة الثمن، مقابل الآراء التي تراه تقييدًا لشخصية الطالب ولا يحل أصل المشكلة."
    },
    {
        id: "t2-woche-ohne-netz",
        teil: 2,
        title: "Eine Woche ohne Internet",
        text: "Das Experiment heißt: eine Woche ohne Netz.\nAb sofort gibt es keinen Zugang mehr zu Suchmaschinen, kein Online-Shopping und keine Social-Media-Nachrichten.\nAm Ende der Woche hatte ich Rückenschmerzen, weil ich ohne Lieferservice Getränkekisten selbst tragen musste.\nAm Bahnhof dauerte der Fahrkartenkauf am Schalter ein Vielfaches der Zeit im Vergleich zum 3-Minuten-Onlinekauf.\nZu einer Party fanden wir den Weg kaum, und weil die Bar spontan verlegt wurde, standen wir vor verschlossener Tür, da die Absage per E-Mail kam.\nAm Ende der Woche notierte ich: Das Internet ist wie ein allwissender Helfer, der Menschen verbindet und den Alltag enorm erleichtert, auch wenn ein bewusster Umgang wichtig bleibt.",
        ar: "تجربة الانقطاع عن الإنترنت لمدة أسبوع: التحديات اليومية في شراء التذاكر والتسوق والتواصل، وتوضيح مدى اعتماد حياتنا المعاصرة على الشبكة."
    },
    {
        id: "t2-konzernsprache-englisch",
        teil: 2,
        title: "Konzernsprache Englisch",
        text: "Für international tätige Firmen ist die Konzernsprache Englisch selbst in anderssprachigen lokalen Märkten selbstverständlich geworden.\nDas Internet hat diese Entwicklung noch weiter beschleunigt.\nFaktum ist, dass Englisch die Sprache der Wirtschaft und Wissenschaft geworden ist.\nKritiker wenden ein, dass Sprache mehr sei als bloße Information. Die farblose Verwendung von oft unzulänglich beherrschtem Englisch sei nicht geeignet, echte Brücken zu schlagen.\nDem halten Befürworter entgegen, dass Englisch die Kommunikation über Kulturgrenzen hinweg überhaupt erst ermöglicht und enorme Kosten für Dolmetscher spart.\nAllerdings fühlen sich Mitarbeiter in einer Fremdsprache oft in ihrer Ausdrucksfähigkeit gehemmt und das volle Potenzial von Ideen kann nicht immer ausgeschöpft werden.",
        ar: "اعتماد الإنجليزية لغة رسمية في الشركات العالمية، بين تسهيل التعاون الدولي وتوفير التكاليف، وبين ضعف التعبير الدقيق وتهميش اللغات المحلية."
    },
    {
        id: "t2-fastfood-sucht",
        teil: 2,
        title: "Macht Fast Food süchtig?",
        text: "Fettiges Essen kann offenbar ebenso süchtig machen wie Drogen.\nUS-Forscher vergleichen exzessives Essen stark fetthaltiger Speisen inzwischen mit Drogenkonsum.\nWer sich hemmungslos mit Fett und Zucker vollstopft, verhält sich ähnlich wie ein Junkie – für das Gehirn wird extrem kalorienreiches Essen auf die gleiche Weise wie Drogenkonsum verarbeitet.\nWenn die Hirnzentren für Wohlbefinden überreizt werden, passt sich das System an und schraubt seine Aktivität zurück.\nWie bei einer Sucht verändert sich das Gehirn durch Junkfood, um nicht in einem Dauerzustand negativer Gefühle zu bleiben.",
        ar: "دراسات علمية تكشف أن الوجبات السريعة الغنية بالدهون والسكريات تؤثر على مراكز المكافأة في الدماغ بطريقة تشبه الإدمان وتدفع للإفراط في الأكل."
    },
    {
        id: "t2-fernsehen-bildung",
        teil: 2,
        title: "Fernsehen und Bildung",
        text: "Weit verbreitet ist die Ansicht, dass das Fernsehen nicht zur Bildung beiträgt, sondern seine Zuschauer verdummt.\nDer Großteil der Fernsehsendungen besteht aus Unterhaltung: Serien, Talkshows und Reality-TV.\nAnders sieht es bei Informations- und Wissenssendungen aus, welche durchaus bildend wirken können.\nBilder und Filmbeiträge wirken oft viel eindringlicher als bloß gelesene Texte.\nUm beim Fernsehen einen Lerneffekt zu erzielen, kommt es auf die Programmauswahl und Selbstdisziplin an.\nFür unbeaufsichtigte Kinder ist der Nutzen jedoch meist gering.",
        ar: "دور التلفاز بين الترفيه السطحي والبرامج الوثائقية التثقيفية، وأهمية الاختيار الواعي للبرامج لتنمية المعرفة."
    },
    {
        id: "t2-fernsehen-kinder",
        teil: 2,
        title: "Fernsehkonsum bei Kindern",
        text: "Wer als Kind viel fernsieht, erreicht als junger Erwachsener im Schnitt einen schwächeren Schulabschluss als jene, die seltener fernsehen.\nJe früher und häufiger Kinder vor dem Fernseher sitzen, desto schwächer sind oft ihre späteren Lernleistungen.\nPassiver TV-Konsum verführt Kinder zu körperlicher Inaktivität und lenkt von den Hausaufgaben ab.\nExperten raten daher zu maximal einer Stunde Bildschirmzeit täglich und einem fernsehfreien Schlafzimmer.",
        ar: "تأثير الإفراط في مشاهدة التلفاز على الأطفال من حيث قلة النشاط البدني وتشتت الانتباه أثناء أداء الواجبات المدرسية."
    },
    {
        id: "t2-ganztagsschulen",
        teil: 2,
        title: "Ganztagsschulen",
        text: "In Deutschland gibt es einen starken Trend hin zu Ganztagsschulen von der Grundschule bis zur zehnten Klasse.\nViele Eltern befürworten das Modell, da es ihnen ermöglicht, Beruf und Familie besser zu vereinbaren.\nZudem können Hausaufgaben unter fachlicher Aufsicht erledigt werden und Freizeitaktivitäten wie Musik und Sport integriert werden.\nKritiker betonen jedoch, dass den Kindern weniger freie Zeit für Familie und eigene Hobbys bleibt und die Qualität der Betreuung stark variiert.",
        ar: "نظام المدارس اليومية الكاملة: دعم الأسر العاملة ومساعدة الطلاب في الواجبات والأنشطة، مقابل تقليص وقت العائلة والراحة."
    },
    {
        id: "t2-generation-praktikum",
        teil: 2,
        title: "Generation Praktikum",
        text: "Wenig oder gar kein Geld, kaum Karrierechancen, aber zufrieden: Zu diesem Ergebnis kommt eine Befragung von Praktikanten in Deutschland.\nPraktika sollen praktisches Wissen im künftigen Beruf vermitteln.\nGerade Hochschulabsolventen kennen zwar viel Theorie, haben aber oft keine Praxiserfahrung.\nKritiker warnen vor der Ausbeutung junger Arbeitskräfte, die von einem unbezahlten Praktikum ins nächste wechseln, ohne eine Festanstellung zu erhalten.",
        ar: "قضية التدريب العملي (Praktikum) للشباب والخريجين: اكتساب الخبرة العملية الضرورية مقابل ضعف الأجور وتأخر التوظيف الدائم."
    },
    {
        id: "t2-hausaufgaben",
        teil: 2,
        title: "Sinn und Zweck von Hausaufgaben",
        text: "Hausaufgaben sind ein ewiges Streitthema zwischen Schülern, Eltern und Pädagogen.\nGegner fordern die Abschaffung, da Schüler nach einem langen Schultag müde sind und sozial benachteiligte Kinder oft keine Hilfe zu Hause bekommen.\nBefürworter argumentieren, dass das selbstständige Wiederholen des Lehrstoffs zu Hause für das Behalten unerlässlich ist und Selbstdisziplin sowie Problemlösungskompetenz fördert.",
        ar: "الجدل حول الواجبات المدرسية: دورها في تثبيت المعلومات وبناء الانضباط الذاتي مقابل زيادة الضغط والإرهاق وتعميق الفوارق الاجتماعية."
    },
    {
        id: "t2-haustausch",
        teil: 2,
        title: "Haustausch im Urlaub",
        text: "Haustausch im Urlaub bietet die Chance, ein fremdes Land so zu erleben, als würde man selbst dort wohnen – und das bei minimalen Übernachtungskosten.\nAllerdings erfordert das Konzept großes Vertrauen, da keine offiziellen Verträge geschlossen werden und bei Schäden oft keine Haftung greift.\nAusführliche Absprachen und Fotos im Vorfeld sind unerlässlich, um Enttäuschungen zu vermeiden.",
        ar: "تبادل المنازل في العطلات كطريقة اقتصادية للعيش كأحد السكان المحليين في بلد آخر، مع ضرورة الحذر وتوضيح قواعد المسؤولية."
    },
    {
        id: "t2-heiraten-klein",
        teil: 2,
        title: "Heiraten im kleinen Kreis",
        text: "Viele Paare entscheiden sich heute ganz bewusst gegen eine große, kostspielige Hochzeit mit Hunderten von Gästen.\nStattdessen heiraten sie nur zu zweit oder im engsten Familienkreis an einem besonderen Ort, etwa an der Küste.\nDas spart tausende Euro, vermeidet enormen Organisationsstress und ermöglicht ein sehr persönliches, intimes Erlebnis, auch wenn manche Verwandte zunächst enttäuscht sein mögen.",
        ar: "الاتجاه المعاصر للزواج في حفل بسيط ومقتصر على المقربين لتجنب الديون والضغوط التنظيمية، مع التركيز على جو المحبة الحقيقي."
    },
    {
        id: "t2-convenience-food",
        teil: 2,
        title: "Convenience Food – Fertiggerichte",
        text: "Vorgefertigte Lebensmittel und Tiefkühlgerichte sparen im hektischen Alltag viel Zeit und sind bequem zuzubereiten.\nKritiker weisen jedoch auf den Verlust von Nährstoffen, das erhöhte Müllaufkommen sowie hohe Mengen an Salz, Zucker und ungesunden Fetten hin, die Zivilisationskrankheiten begünstigen.\nZudem gehe die traditionelle Kochkultur und das gemeinsame Zubereiten von Mahlzeiten verloren.",
        ar: "الأطعمة الجاهزة والمجمدة وسرعة تحضيرها، مقابل أضرارها الصحية على المدى الطويل وفقدان متعة الطهي المنزلي الطازج."
    },
    {
        id: "t2-schulqualitaet",
        teil: 2,
        title: "Messung von Schulqualität (PISA)",
        text: "Schulleistungstests wie PISA und bundesweite Vergleichsarbeiten sollen Stärken und Schwächen des Schulsystems aufdecken.\nKritiker befürchten jedoch, dass Lehrer nur noch für die Tests unterrichten („Teaching to the test“) und wichtige soziale Kompetenzen, Teamfähigkeit und Kreativität auf der Strecke bleiben.",
        ar: "اختبارات قياس جودة المدارس مثل PISA: بين تحديد مكامن الخلل في التعليم وبين التركيز السطحي على نتائج الامتحانات وإهمال الإبداع."
    },
    {
        id: "t2-handy-kinder",
        teil: 2,
        title: "Handy- und Internetnutzung bei Jugendlichen",
        text: "Fast alle Jugendlichen besitzen heute ein Smartphone.\nObwohl sie mit der Technik vertraut sind, unterschätzen viele die Gefahren im Netz wie Cybermobbing, unbedachte Foto-Veröffentlichungen und Datenmissbrauch.\nEltern und Schulen müssen Jugendliche für einen verantwortungsvollen Umgang mit digitalen Medien sensibilisieren.",
        ar: "استخدام الهواتف الذكية بين الأطفال والمراهقين: الفوائد في التواصل والتعلم مقابل مخاطر التنمر الرقمي وإدمان الشاشات."
    },
    {
        id: "t2-kinderkonto",
        teil: 2,
        title: "Bankkonto für Kinder",
        text: "Ein eigenes Giro- oder Sparkonto kann Kindern frühzeitig vermitteln, dass Geld nicht unbegrenzt aus dem Automaten kommt, sondern erarbeitet werden muss.\nEltern nutzen dies, um den Umgang mit Taschengeld zu schulen, während Kritiker davor warnen, dass Banken damit vor allem frühzeitig Neukunden an sich binden wollen.",
        ar: "فتح حساب بنكي للأطفال لتعليمهم إدارة المصروف وقيمة الادخار، مع ضرورة إشراف الأهل لحمايتهم من الإغراءات الاستهلاكية."
    },
    {
        id: "t2-doping-sport",
        teil: 2,
        title: "Doping im Leistungssport",
        text: "Die Debatte um Doping im Spitzensport reißt nicht ab.\nEinige argumentieren provokant, dass bei einer Freigabe unter ärztlicher Kontrolle die Verlogenheit ein Ende hätte, da ohnehin in vielen gesellschaftlichen Bereichen Aufputschmittel genutzt würden.\nDie Mehrheit betont jedoch, dass Doping die Gesundheit zerstört, den Geist des fairen Sports pervertiert und die Vorbildfunktion für Jugendliche gefährdet.",
        ar: "تعاطي المنشطات في الرياضة: الآثار الصحية الخطيرة على الرياضيين ومبدأ اللعب النظيف وقدوة الرياضيين للشباب."
    },
    {
        id: "t2-mehrsprachigkeit",
        teil: 2,
        title: "Mehrsprachige Erziehung im Kindesalter",
        text: "Kinder, die mehrsprachig aufwachsen, entwickeln früh ein Gefühl für Sprachsysteme und lernen spätere Fremdsprachen oft leichter.\nExperten warnen jedoch vor übertriebenem Ehrgeiz: Mehrsprachigkeit funktioniert am besten, wenn eine emotionale Bindung zur Sprache besteht und das Kind nicht unter künstlichen Leistungsdruck gesetzt wird.",
        ar: "تنشئة الأطفال بأكثر من لغة: الفوائد المعرفية في تنمية الذكاء وسهولة تعلم لغات إضافية، وتجنب الضغط النفسي الزائد."
    },
    {
        id: "t2-lernmethoden",
        teil: 2,
        title: "Erfolgreiches Lernen und Behalten",
        text: "Mehrkanaliges Lernen – durch Lesen, Hören, Sprechen und aktives Tun – verankert Wissen am nachhaltigsten im Gedächtnis.\nDas Zusammenfassen in eigenen Worten sowie zeitlich gestaffelte Wiederholungen („Spaced Repetition“) sind wissenschaftlich belegte Methoden, um Wissen dauerhaft abzurufen.",
        ar: "أساليب التعلم الفعالة: الجمع بين القراءة والاستماع والتحدث والتطبيق، واستخدام التكرار المتباعد لتثبيت المعلومات في الذاكرة."
    },
    {
        id: "t2-blutspenden",
        teil: 2,
        title: "Bedeutung von Blutspenden",
        text: "Täglich werden in Krankenhäusern tausende Blutkonserven für Operationen und Unfallopfer benötigt, doch nur ein kleiner Prozentsatz der Bevölkerung spendet regelmäßig Blut.\nBlutspenden ist unkompliziert, schmerzarm und rettet Leben. Aufklärungskampagnen sind nötig, um Engpässe zu vermeiden.",
        ar: "الحاجة المستمرة للتبرع بالدم لإنقاذ المصابين في الحوادث والعمليات، وأهمية نشر الوعي للتغلب على نقص بنوك الدم."
    },
    {
        id: "t2-selber-kochen",
        teil: 2,
        title: "Selbst kochen vs. Fertiggerichte",
        text: "Immer mehr Menschen schätzen das Kochen am eigenen Herd: Man bestimmt selbst über frische Zutaten, verzichtet auf künstliche Zusatzstoffe und kann Allergien gezielt berücksichtigen.\nKochen fördert die Achtsamkeit beim Essen und stärkt das familiäre Miteinander.",
        ar: "أهمية الطبخ في المنزل بالخضار والمكونات الطازجة لصحة الجسم والعائلة مقارنة بوجبات المطاعم السريعة والأطعمة المصنعة."
    },
    {
        id: "t2-klassenfahrten",
        teil: 2,
        title: "Bedeutung von Klassenfahrten",
        text: "Klassenfahrten stärken das Gemeinschaftsgefühl und ermöglichen es Schülern und Lehrern, sich abseits des Unterrichts kennenzulernen.\nSie fördern die Selbstständigkeit und bieten kulturelle Bildung durch Besichtigungen, sollten jedoch finanzierbar bleiben, damit kein Kind ausgeschlossen wird.",
        ar: "الرحلات المدرسية ودورها التربوي في تعزيز روح الفريق والتعرف على المعالم التاريخية، وضرورة مراعاة ميزانية جميع الأسر."
    },
    {
        id: "t2-ebooks-schule",
        teil: 2,
        title: "E-Books und digitale Medien im Unterricht",
        text: "Elektronische Schulbücher lassen sich unkompliziert aktualisieren, bieten interaktive Übungen und entlasten den schweren Schulranzen.\nGegner verweisen auf die hohen Anschaffungskosten, technische Abhängigkeit und die Ablenkung durch digitale Geräte.",
        ar: "استخدام الكتب الإلكترونية والأجهزة اللوحية في المدارس: ميزة التحديث الفوري وتقليل وزن الحقيبة مقابل التكلفة والتشتت."
    },
    {
        id: "t2-schoenheits-op",
        teil: 2,
        title: "Schönheitsoperationen bei Jugendlichen",
        text: "Politiker fordern ein Verbot unnötiger Schönheitsoperationen bei Minderjährigen, da unrealistische Schönheitsideale aus den sozialen Medien junge Menschen unter Druck setzen.\nAusnahmen sollten nur bei medizinischer Notwendigkeit oder schweren Entstellungen nach Unfällen gelten.",
        ar: "دعوات حظر العمليات التجميلية غير العلاجية للمراهقين لحمايتهم من الهوس بالمظاهر السطحية والمخاطر الجراحية."
    },
    {
        id: "t2-sparen-kinder",
        teil: 2,
        title: "Geldanlagen und Sparen für Kinder",
        text: "Klassische Sparbücher werfen kaum noch Zinsen ab.\nExperten raten Eltern und Großeltern daher vermehrt zu breit gestreuten ETF-Sparplänen mit langfristigem Horizont, um für Ausbildung oder Führerschein des Nachwuchses vorzusorgen.",
        ar: "طرق الادخار والاستثمار للأبناء: التحول من الحسابات التقليدية ذات الفائدة الضعيفة إلى خطط الاستثمار المتنوعة طويلة الأجل."
    },
    {
        id: "t2-hochbegabung",
        teil: 2,
        title: "Förderung von hochbegabten Kindern",
        text: "Hochbegabte Kinder benötigen gezielte geistige Förderung, um ihr Potenzial zu entfalten und nicht unter Unterforderung in der Schule zu leiden.\nDie Debatte dreht sich darum, ob Spezialschulen oder die individuelle Förderung in Regelschulen der bessere Weg ist.",
        ar: "رعاية الأطفال فائقي الذكاء والموهبة: تلبية شغفهم بالمعرفة وتجنب شعورهم بالملل في الفصول الدراسية العادية."
    },
    {
        id: "t2-haus-im-gruenen",
        teil: 2,
        title: "Wohnen: Haus im Grünen vs. Stadtwohnung",
        text: "Viele Familien zieht es aus der beengten Stadt ins Haus im Grünen mit Garten und Ruhe für die Kinder.\nDies führt jedoch oft zu langen Pendelzeiten, Zersiedelung der Natur und der Notwendigkeit mehrerer Autos, während die Stadt kurze Wege und kulturelle Vielfalt bietet.",
        ar: "المقارنة بين السكن في الريف وسط الطبيعة وبين شقة في المدينة، من حيث الهدوء والمساحة مقابل مسافات التنقل والخدمات."
    },
    {
        id: "t2-taetowierungen",
        teil: 2,
        title: "Tätowierungen in der Gesellschaft",
        text: "Tattoos haben ihr früheres Schmuddel-Image verloren und sind in allen Gesellschaftsschichten beliebt.\nDennoch sollte die Entscheidung für Körperschmuck gut überlegt sein, da sichtbare Tätowierungen in manchen Berufsfeldern Vorbehalte auslösen und die Laserentfernung schmerzhaft und teuer ist.",
        ar: "انتشار الوشم كفن وتعبير عن الذات في المجتمع الحديث، مع مراعاة تأثيره في بعض الوظائف وصعوبة وتكلفة إزالته."
    },
    {
        id: "t2-teilzeit-maenner",
        teil: 2,
        title: "Teilzeitarbeit für Männer",
        text: "Immer mehr Väter entscheiden sich für Teilzeitarbeit, um mehr Zeit für die Erziehung der Kinder zu haben.\nUnternehmen profitieren von flexiblen, motivierten Mitarbeitern, auch wenn traditionelle Rollenbilder und Gehaltseinbußen mancherorts noch Hürden darstellen.",
        ar: "عمل الرجال بدوام جزئي للمشاركة في تربية الأطفال، وكسر الصورة النمطية للمعيل الوحيد لتحقيق توازن أفضل بين العمل والأسرة."
    },
    {
        id: "t2-haustier-geschenk",
        teil: 2,
        title: "Haustiere als Geschenk",
        text: "Ein Hundewelpe oder Kätzchen zu Weihnachten scheint die perfekte Überraschung zu sein.\nOft wird jedoch vergessen, dass ein Tier jahrelange Verantwortung, Kosten und Pflege bedeutet, weshalb Spontankäufe oft im Tierheim enden.",
        ar: "إهداء الحيوانات الأليفة في الأعياد: التحذير من الشراء العاطفي دون إدراك للمسؤولية والرعاية والالتزام لسنوات طويلة."
    },
    {
        id: "t2-tierversuche",
        teil: 2,
        title: "Pro und Contra: Tierversuche in der Forschung",
        text: "Befürworter betonen, dass viele lebensrettende Medikamente und Krebstherapien ohne Tierversuche nicht entwickelt werden könnten.\nGegner halten das Quälen und Töten von Lebewesen für ethisch nicht vertretbar und fordern die stärkere Nutzung künstlicher Organe und Computersimulationen.",
        ar: "الجدل حول التجارب على الحيوانات في الطب: بين ضرورتها لاكتشاف علاجات للأمراض المستعصية وبين المعايير الأخلاقية والبدائل التكنولوجية."
    },
    {
        id: "t2-trinkgeld",
        teil: 2,
        title: "Trinkgeld geben: Geste oder Verpflichtung?",
        text: "In der Gastronomie oder im Taxi ist Trinkgeld eine anerkannte Geste für guten Service und bessert das oft knappe Grundgehalt des Personals auf.\nKritiker meinen hingegen, dass Arbeitgeber faire Löhne zahlen sollten, anstatt die Bezahlung auf die Kunden abzuwälzen.",
        ar: "ثقافة دفع الإكرامية (Trinkgeld): بين كونها مكافأة اختيارية للخدمة الجيدة أو تعويضًا عن تدني الأجور في قطاع المطاعم والخدمات."
    },
    {
        id: "t2-gewalt-spiele",
        teil: 2,
        title: "Verbot von gewaltverherrlichenden Computerspielen",
        text: "Nach Gewalttaten wird oft ein Verbot sogenannter 'Killerspiele' gefordert, da befürchtet wird, dass virtuelle Gewalt die Hemmschwelle senkt.\nKritiker eines Verbots betonen, dass Ursachen von Gewalt viel komplexer sind und im sozialen Umfeld, der Familie und mangelnder Vorbildfunktion liegen.",
        ar: "المطالبات بحظر ألعاب الفيديو العنيفة: المخاوف من تأثيرها على سلوك المراهقين مقابل التركيز على أسباب العنف الأسرية والاجتماعية."
    },
    {
        id: "t2-rauchen-jugendliche",
        teil: 2,
        title: "Rauchen bei Jugendlichen",
        text: "Rauchen übt auf viele Jugendliche eine magische Anziehungskraft aus, um erwachsen und 'cool' zu wirken oder dem Druck der Clique standzuhalten.\nAufklärung über die schweren gesundheitlichen Folgen und Rauchverbote an Schulen sind wichtige Gegenmaßnahmen.",
        ar: "تدخين المراهقين وسعي الشباب لإثبات الذات أو مجاراة الأصدقاء، وأهمية التوعية المبكرة بأضرار النيكوتين على الصحة."
    },
    {
        id: "t2-ausgehzeiten",
        teil: 2,
        title: "Ausgehzeiten für Jugendliche",
        text: "Der Streit um Ausgehzeiten ist ein Klassiker in Familien.\nEltern wollen ihre Kinder vor Gefahren schützen, während Jugendliche mehr Freiraum fordern.\nEin ausgewogenes Verhältnis zwischen Schutz und schrittweiser Eigenverantwortung gelingt am besten auf Vertrauensbasis.",
        ar: "أوقات عودة المراهقين إلى المنزل ليلاً: التوفيق بين رغبة الأبناء في السهر وحرص الأهل على سلامتهم وفق قانون حماية الشباب."
    },
    {
        id: "t2-bilingualismus",
        teil: 2,
        title: "Zweisprachige Erziehung (Bilingualismus)",
        text: "Die Mehrheit der Menschheit wächst zwei- oder mehrsprachig auf.\nKinder lernen Sprachen intuitiv und mühelos, entwickeln eine starke interkulturelle Kompetenz und haben später klare Vorteile im Beruf und auf Reisen.",
        ar: "التنشئة ثنائية اللغة للأطفال: سهولة اكتساب اللغات في سن مبكرة، الانفتاح الثقافي، والمزايا الكبيرة في المستقبل المهني."
    }
];

const EXERCISES_TEIL3 = [
    {
        id: "3-t-gige-fahrradtour",
        teil: 3,
        title: "3-tägige Fahrradtour",
        text: "Sie möchten mit einigen Teilnehmern aus Ihrem Sprachkurs eine 3-tägige Fahrradtour durch eine schöne Landschaft in Deutschland oder Ihrem Heimatland machen.\nPlanen Sie gemeinsam den Aufenthalt der Gruppe.\nWenn Sie aus unterschiedlichen Heimatländern kommen, einigen Sie sich bitte schnell auf ein Reiseziel.\nÜberlegen Sie, wie weit Sie täglich fahren möchten, was Sie dabei eventuell besichtigen können und wo und wie Sie übernachten wollen.\nWie sollte das optimale Reisegepäck aussehen?",
        ar: "تريد القيام مع بعض المشاركين من دورة اللغة بجولة بالدراجات لمدة ثلاثة أيام عبر منطقة جميلة في ألمانيا أو في بلدك. خططوا معًا لإقامة المجموعة. وإذا كنتم من بلدان مختلفة، فاتفقوا بسرعة على وجهة سفر. فكّروا في المسافة التي تريدون قطعها يوميًا، وما الذي يمكنكم زيارته أثناء الطريق، وأين وكيف ستبيتون. كيف ينبغي أن تكون أمتعة السفر المثالية؟"
    },
    {
        id: "ausstellung-ber-ihr-land",
        teil: 3,
        title: "Ausstellung über Ihr Land",
        text: "Sie möchten bei der Planung einer Ausstellung über Ihr Land in einem Kulturzentrum helfen.\nSie könnten informative Materialien wie Poster gestalten, interaktive Elemente einbringen und Exponate organisieren, um die Vielfalt Ihrer Kultur zu präsentieren.\nZudem wäre eine gezielte Werbung über soziale Medien oder lokale Medien wichtig, um Besucher anzulocken und eine ansprechende Erfahrung zu bieten.",
        ar: "تريد المساعدة في التخطيط لمعرض عن بلدك في مركز ثقافي. يمكنكم إعداد مواد إعلامية مثل الملصقات، وإضافة عناصر تفاعلية، وتنظيم معروضات تُظهر تنوع ثقافتكم. كما يمكن أن يكون الإعلان عبر وسائل التواصل الاجتماعي أو وسائل الإعلام المحلية مهمًا لجذب الزوار وتقديم تجربة ممتعة."
    },
    {
        id: "austauschprogramm-vier-wochen",
        teil: 3,
        title: "Austauschprogramm - vier Wochen",
        text: "Ihre Schule nimmt an einem Austauschprogramm mit deutschen Schülerinnen und Schülern teil.\nDie ausländischen Gastschüler bleiben vier Wochen in Ihrem Land.\nOrganisieren Sie den gesamten Aufenthalt mit Programmvorschlägen!",
        ar: "تشارك مدرستكم في برنامج تبادل مع تلاميذ ألمان. سيبقى الضيوف الأجانب أربعة أسابيع في بلدكم. نظّموا الإقامة كاملة واقترحوا برنامجًا مناسبًا."
    },
    {
        id: "betriebsausflug",
        teil: 3,
        title: "Betriebsausflug",
        text: "Ihre Kollegen und Sie möchten einen Betriebsausflug organisieren. Überlegen Sie gemeinsam verschiedene Ausflugsideen und klären Sie Ziele, Kosten, Transport und Verpflegung. Teilen Sie Ihrem Partner/Ihrer Partnerin Ihre Vorschläge mit und einigen Sie sich auf einen Plan.",
        ar: "تريدون أنتم وزملاؤكم تنظيم رحلة خاصة بالشركة. فكّروا معًا في أفكار مختلفة للرحلة، وحددوا الوجهة والتكاليف ووسيلة النقل والطعام. قدّموا اقتراحاتكم لشريككم واتفقوا على خطة."
    },
    {
        id: "buch-in-der-klasse-vorstellen",
        teil: 3,
        title: "Buch in der Klasse vorstellen",
        text: "Sie sollen gemeinsam ein Buch in Ihrer Klasse vorstellen.\nÜberlegen Sie, welches Buch Sie präsentieren möchten und wie Sie die Präsentation strukturieren (kapitelweise, gesamt).",
        ar: "عليكم أن تقدّموا معًا كتابًا أمام صفكم. فكّروا في الكتاب الذي تريدون تقديمه وكيف تريدون تنظيم العرض، مثل عرضه فصلًا فصلًا أو تقديمه بشكل عام."
    },
    {
        id: "buchmesse",
        teil: 3,
        title: "Buchmesse",
        text: "An einem Kulturzentrum in Ihrer Stadt wird eine Buchmesse stattfinden.\nSie wollen bei der Planung helfen.\nÜberlegen Sie, was Sie tun können.\nDenken Sie beispielsweise an Informationsmaterial oder Poster.",
        ar: "ستُقام في مركز ثقافي في مدينتكم معرض للكتب. تريدون المساعدة في التخطيط له. فكّروا فيما يمكنكم القيام به، مثل إعداد مواد إعلامية أو ملصقات."
    },
    {
        id: "b-cherspenden-f-r-die-lokale-bibliothek",
        teil: 3,
        title: "Bücherspenden für die lokale Bibliothek",
        text: "Sie organisieren eine Veranstaltung, bei der Sie Bücherspenden für die lokale Bibliothek in Ihrer Straße sammeln möchten. Überlegen Sie sich Ideen für diese gemeinsame Aktion und teilen Sie die Aufgaben untereinander auf.",
        ar: "تنظمون فعالية لجمع التبرعات بالكتب للمكتبة المحلية في شارعكم. فكّروا في أفكار لهذه المبادرة المشتركة ووزّعوا المهام بينكم."
    },
    {
        id: "dreit-gige-reise-ans-meer",
        teil: 3,
        title: "Dreitägige Reise ans Meer",
        text: "Sie möchten mit einigen Teilnehmern aus Ihrem Sprachkurs eine dreitägige Reise ans Meer machen.\nÜberlegen Sie, was Sie alles dazu brauchen.\nPlanen Sie gemeinsam den Aufenthalt der Gruppe.",
        ar: "تريدون القيام مع بعض المشاركين من دورة اللغة برحلة إلى البحر لمدة ثلاثة أيام. فكّروا فيما تحتاجونه وخططوا معًا لإقامة المجموعة."
    },
    {
        id: "flohmarkt-im-stadtviertel",
        teil: 3,
        title: "Flohmarkt im Stadtviertel",
        text: "Zum Frühlingsbeginn möchten Sie in Ihrem Stadtviertel einen Flohmarkt organisieren.\nSie wollen Ihre Nachbarn zum gemeinsamen Organisieren einladen und den Ablauf überlegen.\nWie können Sie möglichst viele Leute dazu bewegen, mitzumachen?\nMachen Sie Ihrem Partner oder Ihrer Partnerin Vorschläge.\nLegen Sie gemeinsam ein passendes Datum und geeignete Örtlichkeiten fest und besprechen Sie die organisatorischen Details, um die Nachbarn zum Mitmachen zu bewegen.\nFinde Informationen dazu.",
        ar: "تريدون تنظيم سوق للسلع المستعملة في حيّكم مع بداية الربيع. تريدون دعوة الجيران للمساعدة في التنظيم والتفكير في سير الفعالية. كيف يمكنكم تشجيع أكبر عدد ممكن من الناس على المشاركة؟ قدّموا اقتراحات لشريككم. حدّدوا معًا موعدًا مناسبًا ومكانًا مناسبًا وناقشوا التفاصيل التنظيمية."
    },
    {
        id: "geburtstag-eines-kursteilnehmers",
        teil: 3,
        title: "Geburtstag eines Kursteilnehmers",
        text: "Ein Teilnehmer aus Ihrem Sprachkurs hat am Wochenende Geburtstag.\nDabei werden noch überlegen, was der Kurs dem Teilnehmer schenken könnte und wie die Feier ablaufen könnte.\nTeilen Sie Ihrem Partner oder Ihrer Partnerin Ihre Ideen mit und entwickeln Sie dann gemeinsam Ihre Vorschläge für das Geschenk und das Programm für die Feier am Wochenende.",
        ar: "أحد المشاركين في دورة اللغة لديه عيد ميلاد في نهاية الأسبوع. عليكم التفكير فيما يمكن أن تقدمه الدورة له كهدية وكيف يمكن أن تسير الاحتفالية. شاركوا أفكاركم ثم طوّروا معًا اقتراحات للهدية وبرنامج الاحتفال."
    },
    {
        id: "hochzeits-berraschung",
        teil: 3,
        title: "Hochzeitsüberraschung",
        text: "Ein gemeinsamer Freund heiratet, und ihr möchtet eine Hochzeitsüberraschung für ihn organisieren.\nÜberlegen Sie, was für Überraschungsideen Sie anbieten können, und machen Sie Ihrem Partner/Ihrer Partnerin Vorschläge.",
        ar: "سيتزوج صديق مشترك، وتريدون تنظيم مفاجأة له في حفل الزفاف. فكّروا في أفكار للمفاجأة وقدّموا اقتراحاتكم لشريككم."
    },
    {
        id: "informationsveranstaltung-schule-ausbildung-und-beruf",
        teil: 3,
        title: "Informationsveranstaltung Schule, Ausbildung und Beruf",
        text: "Für eine Informationsveranstaltung zur Schule, Ausbildung und Beruf an Ihrer Schule sollten Sie geeignete Referenten wie Lehrer, Berufsberater, Vertreter von Universitäten oder Fachhochschulen, Fachleute aus verschiedenen Berufsfeldern oder ehemalige Schüler einladen.\nDenken Sie an die Rahmenbedingungen wie den Zeitpunkt, Räumlichkeiten innerhalb der Schule, Dauer der Veranstaltung, Verpflegung und benötigte technische Ausstattung wie Projektoren oder Mikrofone.\nPrüfen Sie rechtzeitig die Verfügbarkeit der Referenten und kümmern Sie sich um Raumreservierungen sowie eventuelle Genehmigungen.\nEine frühzeitige Planung und Kommunikation sind entscheidend für den Erfolg der Veranstaltung.",
        ar: "تريدون تنظيم فعالية إعلامية حول المدرسة والتدريب المهني والمهنة في مدرستكم. فكّروا في دعوة أشخاص مناسبين مثل المعلمين أو مستشاري المهن أو ممثلي الجامعات أو المتخصصين من مجالات مهنية مختلفة أو طلاب سابقين. فكّروا أيضًا في الموعد والقاعات ومدة الفعالية والطعام والتجهيزات التقنية مثل أجهزة العرض والميكروفونات. تأكدوا مبكرًا من توفر المشاركين واحجزوا القاعات واستكملوا الموافقات اللازمة."
    },
    {
        id: "infotag-arbeitsalltag-in-verschiedenen-berufen",
        teil: 3,
        title: "Infotag Arbeitsalltag in verschiedenen Berufen",
        text: "In einer Schule in Ihrer Stadt ist ein Infotag über Arbeitsalltag in verschiedenen Berufen geplant.\nSie möchten daran teilnehmen und überlegen gemeinsam, wie Sie sich einbringen können.\nDas kann die Gestaltung eines Vortrags, die Vorführung von Videos oder praktische Beispiele beinhalten.\nÜberlegen Sie, welches Material oder welche Gegenstände für die Schülerinnen und Schüler interessant sein könnten.\nDenken Sie darüber nach, welche Berufe Sie präsentieren möchten und wie Sie den Arbeitsalltag in diesen Berufen darstellen können.\nÜberlegen Sie, welche Informationen Sie überbringen möchten und wie Sie den Schülern einen praxisnahen Einblick in verschiedene Berufsfelder ermöglichen können.\nVielleicht haben Sie auch Materialien oder Gegenstände, die Sie für eine anschauliche Präsentation der Berufe mitbringen könnten.",
        ar: "من المقرر تنظيم يوم معلومات في مدرسة بمدينتكم حول الحياة اليومية في مهن مختلفة. تريدون المشاركة والتفكير معًا في كيفية المساهمة. يمكن أن يكون ذلك من خلال عرض أو فيديوهات أو أمثلة عملية. فكّروا في المواد أو الأدوات التي قد تكون مفيدة للطلاب، وفي المهن التي تريدون تقديمها وكيف يمكنكم توضيح طبيعة العمل فيها بطريقة عملية."
    },
    {
        id: "infotag-gesundheit",
        teil: 3,
        title: "Infotag Gesundheit",
        text: "An einer Gesundheitszentrale in Ihrer Stadt soll ein Infotag zum Thema Gesundheit stattfinden.\nSie sollen bei der Planung helfen und überlegen, was Sie tun können.\nDenken Sie beispielsweise an Aufklärungskampagnen, Vorträge oder Ernährungspläne.\nPlanen Sie gemeinsam, was Sie organisieren können.",
        ar: "سيُقام في مركز صحي بمدينتكم يوم معلومات حول موضوع الصحة. عليكم المساعدة في التخطيط. فكّروا فيما يمكنكم القيام به، مثل حملات التوعية أو المحاضرات أو خطط التغذية، وخططوا معًا لما ستنظمونه."
    },
    {
        id: "infotag-lernen-mit-musik",
        teil: 3,
        title: "Infotag Lernen mit Musik",
        text: "Ihre Sprachschule möchte einen Infotag zum Thema 'Lernen mit Musik' durchführen.\nSie sollen bei der Planung helfen.\nÜberlegen Sie, was Sie tun können, und denken Sie z. B. auch an Unterrichtsbeispiele.\nPlanen Sie gemeinsam, was zu tun ist.",
        ar: "تريد مدرسة اللغة تنظيم يوم معلومات حول موضوع «التعلم بالموسيقى». عليكم المساعدة في التخطيط. فكّروا فيما يمكنكم القيام به، مثل تقديم أمثلة من الدروس، وخططوا معًا لما يجب إنجازه."
    },
    {
        id: "infotag-neue-medien",
        teil: 3,
        title: "Infotag Neue Medien",
        text: "An einem Bildungsinstitut in Ihrer Stadt soll ein Infotag zum Thema Neue Medien, wie Internet, Handys/Smartphones und mehr, stattfinden.\nSie sollen bei der Planung helfen.\nÜberlegen Sie, was Sie tun können.\nDenken Sie beispielsweise an Informationsmaterial oder Poster, Vorträge/Präsentationen, aber auch an Werbung für den Infotag.",
        ar: "سيُقام في مؤسسة تعليمية بمدينتكم يوم معلومات حول الوسائط الجديدة مثل الإنترنت والهواتف الذكية وغيرها. عليكم المساعدة في التخطيط. فكّروا في المواد الإعلامية والملصقات والعروض التقديمية وكذلك الإعلان عن الفعالية."
    },
    {
        id: "interview-mit-s-nger",
        teil: 3,
        title: "Interview mit Sänger",
        text: "Sie haben als Journalisten einer großen Zeitung die Chance, einen sehr bekannten Sänger zu interviewen.\nBereiten Sie gemeinsam einen Fragenkatalog vor.\nEinigen Sie sich auf eine Person, die Sie interviewen wollen.\nDann überlegen Sie gemeinsam, was Sie beruflich oder privat von dieser Person wissen möchten.",
        ar: "أُتيحت لكم بصفتكم صحفيين في صحيفة كبيرة فرصة إجراء مقابلة مع مغنٍ معروف جدًا. أعدّوا معًا قائمة بالأسئلة. اتفقوا على الشخص الذي ستجرون معه المقابلة، ثم فكّروا فيما تريدون معرفته عنه مهنيًا أو شخصيًا."
    },
    {
        id: "kind-schlechte-noten",
        teil: 3,
        title: "Kind schlechte Noten",
        text: "Das dreizehnjährige Kind eines Freundes hat schlechte Noten in der Schule.\nÜberlegen Sie, was Sie tun können, um ihm zu helfen, die Noten zu verbessern.\nEntwickeln Sie dann gemeinsam einen Plan, wie das Kind in der Schule erfolgreicher werden kann.",
        ar: "طفل يبلغ من العمر ثلاثة عشر عامًا لأحد أصدقائكم يحصل على درجات سيئة في المدرسة. فكّروا فيما يمكنكم فعله لمساعدته على تحسين درجاته، ثم ضعوا معًا خطة تساعده على النجاح أكثر في المدرسة."
    },
    {
        id: "kindergartens-2",
        teil: 3,
        title: "Kindergartens 2",
        text: "Ihr Partner/Ihre Partnerin und Sie organisieren eine Spendenaktion zur Renovierung des Kindergartens.\nGemeinsam könnten Sie ein Programm entwickeln, das die Aufmerksamkeit auf diese Spendenaktion lenkt und die Gemeinschaft einbezieht.\nÜberlegen Sie, wie Sie das Event gestalten wollen:\nMöchten Sie eine Spendenkampagne online starten, ein lokales Event organisieren oder vielleicht eine Kombination aus beidem?\nKönnten Sie Flyer, Plakate oder Social-Media-Kampagnen nutzen, um die Menschen auf die Spendenaktion aufmerksam zu machen?\nVielleicht könnten Sie einen Tag der offenen Tür im Kindergarten veranstalten, um den Zustand und die Bedürfnisse des Kindergartens zu zeigen und die direkte Interaktion mit den Spendern zu ermöglichen.\nDenken Sie darüber nach, wie Sie die Menschen dazu motivieren können, zu spenden.\nWürden Sie beispielsweise eine Tombola, Verkaufsstände oder spezielle Aufführungen für die Kinder organisieren?\nDas Ziel ist es, eine kreative und inspirierende Spendenaktion zu gestalten, die die Gemeinschaft mobilisiert und zur Renovierung des Kindergartens beiträgt.\nGemeinsam können Sie Wege finden, wie die Menschen motiviert werden können, sich zu engagieren und einen Beitrag zu leisten.",
        ar: "تنظمون معًا حملة تبرعات لتجديد روضة الأطفال. فكّروا في برنامج يجذب الانتباه إلى الحملة ويشرك المجتمع. هل تبدأون حملة تبرعات عبر الإنترنت، أم تنظمون فعالية محلية، أم تجمعون بين الطريقتين؟ هل تستخدمون المنشورات والملصقات ووسائل التواصل الاجتماعي؟ يمكنكم أيضًا تنظيم يوم مفتوح لعرض احتياجات الروضة. فكّروا في كيفية تحفيز الناس على التبرع، مثل تنظيم يانصيب أو أكشاك بيع أو عروض للأطفال. الهدف هو تنظيم حملة إبداعية تشجع المجتمع على المشاركة."
    },
    {
        id: "kindergartens",
        teil: 3,
        title: "Kindergartens",
        text: "Ihr Partner/Ihre Partnerin und Sie organisieren eine Spendenaktion zur Renovierung des Kindergartens.\nGemeinsam könnten Sie ein Programm entwickeln, das die Aufmerksamkeit auf diese Spendenaktion lenkt und die Gemeinschaft einbezieht.\nÜberlegen Sie, wie Sie das Event gestalten wollen:\nMöchten Sie eine Spendenkampagne online starten, ein lokales Event organisieren oder vielleicht eine Kombination aus beidem?\nKönnten Sie Flyer, Plakate oder Social-Media-Kampagnen nutzen, um die Menschen auf die Spendenaktion aufmerksam zu machen?\nVielleicht könnten Sie einen Tag der offenen Tür im Kindergarten veranstalten, um den Zustand und die Bedürfnisse des Kindergartens zu zeigen und die direkte Interaktion mit den Spendern zu ermöglichen.\nDenken Sie darüber nach, wie Sie die Menschen dazu motivieren können, zu spenden:\nWürden Sie beispielsweise eine Tombola, Verkaufsstände oder spezielle Aufführungen für die Kinder organisieren?\nDas Ziel ist es, eine kreative und inspirierende Spendenaktion zu gestalten, die die Gemeinschaft mobilisiert und zur Renovierung des Kindergartens beiträgt.\nGemeinsam können Sie Wege finden, wie die Menschen motiviert werden können, sich zu engagieren und einen Beitrag zu leisten.",
        ar: "تنظمون معًا حملة تبرعات لتجديد روضة الأطفال. فكّروا في برنامج يجذب الانتباه إلى الحملة ويشرك المجتمع. يمكنكم إطلاق حملة عبر الإنترنت أو تنظيم فعالية محلية أو استخدام الطريقتين معًا، والاستعانة بالمنشورات والملصقات ووسائل التواصل الاجتماعي. يمكن أيضًا تنظيم يوم مفتوح لعرض حالة الروضة واحتياجاتها. فكّروا في طرق تحفيز الناس على التبرع، مثل اليانصيب أو أكشاك البيع أو عروض الأطفال."
    },
    {
        id: "kinderkrankenhaus-2",
        teil: 3,
        title: "Kinderkrankenhaus 2",
        text: "Sie organisieren einen Besuch im Kinderkrankenhaus und Sie sollen bei der Planung helfen.\nÜberlegen Sie, wie der Besuch im Kinderkrankenhaus ablaufen sollte.\nEntwickeln Sie dann gemeinsam einen Plan, wie Sie für die Kinder Vergnügung bringen.\nNicht nur mit Material helfen, sondern auch für Unterhaltung sorgen.",
        ar: "تنظمون زيارة إلى مستشفى للأطفال وعليكم المساعدة في التخطيط. فكّروا في كيفية سير الزيارة، ثم ضعوا معًا خطة لإسعاد الأطفال، ليس فقط من خلال تقديم المواد، بل أيضًا من خلال توفير الترفيه لهم."
    },
    {
        id: "kinderkrankenhaus",
        teil: 3,
        title: "Kinderkrankenhaus",
        text: "Sie organisieren einen Besuch im Kinderkrankenhaus und Sie sollen bei der Planung helfen.\nÜberlegen Sie, wie der Besuch im Kinderkrankenhaus ablaufen sollte.\nEntwickeln Sie dann gemeinsam einen Plan, wie Sie für die Kinder Vergnügung bringen.",
        ar: "تنظمون زيارة إلى مستشفى للأطفال وعليكم المساعدة في التخطيط. فكّروا في كيفية سير الزيارة، ثم ضعوا معًا خطة لإسعاد الأطفال."
    },
    {
        id: "kinobesuch-am-letzten-kurstag",
        teil: 3,
        title: "Kinobesuch am letzten Kurstag",
        text: "Am kommenden Freitag ist der letzte Tag des Deutschkurses, und Sie planen, gemeinsam ins Kino zu gehen.\nSchmieden Sie mit Ihrem Partner oder Ihrer Partnerin einen Plan für das aktuelle Kinoprogramm.\nÜberlegen Sie gemeinsam, was Sie machen können, und bringen Sie Vorschläge ein.",
        ar: "يوم الجمعة القادم هو آخر يوم في دورة اللغة الألمانية، وتخططون للذهاب معًا إلى السينما. ضعوا مع شريككم خطة للذهاب إلى السينما مع مراعاة البرنامج الحالي، وفكّروا معًا فيما يمكنكم فعله وقدّموا اقتراحات."
    },
    {
        id: "kochparty",
        teil: 3,
        title: "Kochparty",
        text: "Sie organisieren eine kochabendige Party in Ihrem Deutschkurs.\nPlanen Sie mit Ihrem Partner / Ihrer Partnerin ein Programm für die Kochabend-Party.\nÜberlegen Sie, was für Programme Sie anbieten können, und machen Sie gemeinsam Vorschläge.",
        ar: "تنظمون حفلة طبخ في دورة اللغة الألمانية. خططوا مع شريككم لبرنامج حفلة الطبخ. فكّروا في الأنشطة التي يمكن تقديمها وقدّموا اقتراحات مشتركة."
    },
    {
        id: "kursraum-freundlicher-gestalten",
        teil: 3,
        title: "Kursraum freundlicher gestalten",
        text: "Ihre Kursleiterin möchte den Kursraum freundlicher gestalten. Es gibt ein kleines Budget, und sie fragt, wer helfen kann und welche Ideen umsetzbar sind. Überlegen Sie gemeinsam, was Sie verbessern können, welche Kosten entstehen und wie Sie die Aufgaben verteilen.",
        ar: "تريد معلمة الدورة جعل قاعة الدرس أكثر راحة وجاذبية. توجد ميزانية صغيرة، وهي تسأل من يستطيع المساعدة وما الأفكار القابلة للتنفيذ. فكّروا معًا فيما يمكن تحسينه، وما التكاليف، وكيف ستوزعون المهام."
    },
    {
        id: "kurztrip-in-eine-europ-ische-stadt",
        teil: 3,
        title: "Kurztrip in eine europäische Stadt",
        text: "Sie sollen für Ihre Klassenfirma einen Kurztrip über das Wochenende in eine europäische Stadt organisieren.\nDie Interessen in der Gruppe sind sehr verschieden:\nEinige möchten Kultur und Geschichte erleben, andere wollen wandern gehen und die Naturlandschaft genießen, und wieder andere hätten nichts dagegen, auch mal durch Geschäfte zu bummeln.\nIn welche Stadt könnte man entspannt einen Tag verbringen, z. B. am Strand oder fürs Sightseeing?\nWie planen Sie die Reise, damit möglichst alle Teilnehmer zufrieden sind?\nFinden Sie gemeinsam eine Lösung.",
        ar: "عليكم تنظيم رحلة قصيرة في عطلة نهاية الأسبوع إلى مدينة أوروبية لصالح مجموعتكم. اهتمامات المشاركين مختلفة: بعضهم يريد الثقافة والتاريخ، وآخرون يريدون المشي والاستمتاع بالطبيعة، والبعض الآخر يريد التسوق. إلى أي مدينة يمكن الذهاب؟ وكيف تخططون للرحلة بحيث يكون أكبر عدد ممكن من المشاركين راضيًا؟ ابحثوا معًا عن حل."
    },
    {
        id: "lehrveranstaltung-deutsch-als-fremdsprache",
        teil: 3,
        title: "Lehrveranstaltung Deutsch als Fremdsprache",
        text: "Ihre Lehrerin hat Sie zu einer Lehrveranstaltung mit dem Titel \"Deutsch als Fremdsprache\" eingeladen, und Sie möchten helfen. Überlegen Sie gemeinsam, wie Sie unterstützen können, und teilen Sie Ihrem Partner/Ihrer Partnerin Ihre Vorschläge mit.",
        ar: "دعتكم معلمتكم إلى فعالية بعنوان «الألمانية كلغة أجنبية»، وتريدون المساعدة. فكّروا معًا في كيفية دعم الفعالية، وشاركوا اقتراحاتكم مع شريككم."
    },
    {
        id: "multikulturelles-fest-der-sprachschule",
        teil: 3,
        title: "Multikulturelles Fest der Sprachschule",
        text: "Die Sprachschule plant jedes Jahr ein großes, ganztägiges Fest zu veranstalten, und dieses Jahr soll es ein multikulturelles Fest werden.\nSie und Ihr Partner/Ihre Partnerin sollen gemeinsam die Planung übernehmen.\nÜberlegen Sie, welche Programmpunkte Sie anbieten können, wer welche Aufgaben übernimmt und welche organisatorischen Schritte erforderlich sind.\nBringen Sie Vorschläge ein und entwickeln Sie gemeinsam ein abwechslungsreiches Programm für das Fest.",
        ar: "تخطط مدرسة اللغة كل عام لإقامة احتفال كبير يستمر يومًا كاملًا، وهذه السنة سيكون احتفالًا متعدد الثقافات. عليكم أنت وشريكك تولي التخطيط معًا. فكّروا في فقرات البرنامج، ومن يتولى كل مهمة، والخطوات التنظيمية اللازمة، ثم طوّروا برنامجًا متنوعًا."
    },
    {
        id: "museumsbesuch-mit-dem-sprachkurs",
        teil: 3,
        title: "Museumsbesuch mit dem Sprachkurs",
        text: "Sie planen, mit Ihren Kolleginnen und Kollegen aus dem Sprachkurs ein Museum zu besuchen.\nÜberlegen Sie gemeinsam, was Sie unternehmen können.\nTeilen Sie Ihre Ideen mit Ihrem Partner oder Ihrer Partnerin und entwickeln Sie dann gemeinsam Vorschläge für den Besuch.",
        ar: "تخططون لزيارة متحف مع زملائكم في دورة اللغة. فكّروا معًا فيما يمكنكم القيام به، وشاركوا أفكاركم ثم طوّروا معًا اقتراحات للزيارة."
    },
    {
        id: "pr-sentation-fremdsprachenlernen",
        teil: 3,
        title: "Präsentation Fremdsprachenlernen",
        text: "Sie sind von einer Schule eingeladen worden, um über die Notwendigkeit des Fremdsprachenlernens aus Ihrer Sicht und Ihren Erfahrungen zu berichten.\nErstellen Sie zusammen eine Liste mit Stichpunkten für eine 15-minütige Präsentation vor den Schülern.\nSammeln Sie Argumente und machen Sie Ihrem Partner / Ihrer Partnerin Vorschläge.",
        ar: "دعتكم مدرسة لتقديم عرض حول أهمية تعلم اللغات الأجنبية من وجهة نظركم وتجاربكم. أعدّوا معًا قائمة بالنقاط الأساسية لعرض مدته 15 دقيقة أمام الطلاب، واجمعوا الحجج وقدّموا اقتراحات لشريككم."
    },
    {
        id: "reise-in-ein-deutschsprachiges-land",
        teil: 3,
        title: "Reise in ein deutschsprachiges Land",
        text: "Viele Teilnehmerinnen und Teilnehmer aus ihrem Kurs möchten eine Reise in eines der deutschsprachigen Länder unternehmen.\nSie sollen gemeinsam bei der Planung helfen.\nÜberlegt gemeinsam, was ihr tun könnt.",
        ar: "يريد كثير من المشاركين في دورتكم القيام برحلة إلى إحدى الدول الناطقة بالألمانية. عليكم المساعدة في التخطيط. فكّروا معًا فيما يمكنكم القيام به."
    },
    {
        id: "renovierung-eines-kulturzentrums",
        teil: 3,
        title: "Renovierung eines Kulturzentrums",
        text: "Ein Kulturzentrum in Ihrer Stadt benötigt Renovierungen, jedoch fehlen der Stadt die nötigen finanziellen Mittel.\nSie möchten helfen und überlegen, wie Sie vorgehen könnten.\nEine Option ist die Sammlung von Spenden für die Renovierung oder die Organisation einer freiwilligen Renovierungsaktion.\nFür Spenden könnten Sie eine Kampagne starten, Bürger zur finanziellen Unterstützung aufrufen und dazu Crowdfunding nutzen oder lokale Unternehmen um Hilfe bitten.\nAlternativ könnten Sie Freiwillige mobilisieren, um die Renovierungsarbeiten selbst durchzuführen, eventuell mit Unterstützung von örtlichen Handwerkern oder Baufirmen.\nEine klare Planung und Werbung in der Gemeinschaft wären wichtig, um Unterstützung und Bewusstsein für das Projekt zu schaffen.",
        ar: "يحتاج مركز ثقافي في مدينتكم إلى التجديد، لكن المدينة تفتقر إلى الأموال اللازمة. تريدون المساعدة والتفكير في طريقة للتصرف. يمكن جمع التبرعات أو تنظيم حملة تطوعية للتجديد. للتبرعات يمكن إطلاق حملة أو استخدام التمويل الجماعي أو طلب دعم الشركات المحلية. ويمكن بدلًا من ذلك حشد متطوعين لتنفيذ أعمال التجديد بمساعدة حرفيين أو شركات محلية. التخطيط الجيد والإعلان في المجتمع مهمان للحصول على الدعم."
    },
    {
        id: "schreibwettbewerb",
        teil: 3,
        title: "Schreibwettbewerb",
        text: "Die Sprachschule plant einen Schreibwettbewerb für alle Kursteilnehmer.\nIhr seid gebeten, bei der Planung zu helfen.\nDenkt gemeinsam über verschiedene Textsorten wie Aufsätze, Briefe usw. nach.\nÜberlegt auch mögliche Preise, Themen und einen Zeitplan für den Wettbewerb.\nMacht euch gemeinsam Gedanken darüber, wie ihr den Wettbewerb organisieren könnt.",
        ar: "تخطط مدرسة اللغة لمسابقة كتابة لجميع المشاركين في الدورات. طُلب منكم المساعدة في التخطيط. فكّروا في أنواع النصوص الممكنة مثل المقالات والرسائل، وكذلك الجوائز والموضوعات والجدول الزمني. فكّروا معًا في كيفية تنظيم المسابقة."
    },
    {
        id: "sch-ler-studienreise",
        teil: 3,
        title: "Schüler Studienreise",
        text: "Eine Gruppe von Schülern macht eine Studienreise in Ihr Heimatland und möchte erfahren, wie man dort lernt.\nSie sollen zusammen das Programm der Gruppe planen.\nDa Sie aus unterschiedlichen Heimatländern kommen, einigen Sie sich bitte schnell auf ein Land.\nÜberlegen Sie, was Schüler interessieren könnte.\nDenken Sie an den Besuch von Schulen, Universitäten, Bibliotheken und Vorträgen sowie daran, was zu tun ist.",
        ar: "ستقوم مجموعة من الطلاب برحلة دراسية إلى بلدكم وترغب في معرفة كيفية التعلم هناك. عليكم تخطيط برنامج المجموعة معًا. وبما أنكم من بلدان مختلفة، اتفقوا بسرعة على بلد واحد. فكّروا فيما قد يهم الطلاب، مثل زيارة المدارس والجامعات والمكتبات والمحاضرات."
    },
    {
        id: "software-seminar",
        teil: 3,
        title: "Software-Seminar",
        text: "Sie planen ein Software-Seminar und möchten Ideen für dessen Organisation sammeln.\nÜberlegen Sie gemeinsam, welche Schritte Sie unternehmen können, und teilen Sie Ihre Vorschläge mit Ihrem Partner oder Ihrer Partnerin.\nEntwickeln Sie zusammen Ideen für das Seminar, von den Inhalten bis hin zur Organisation.\nBesprechen Sie mögliche Themen, den Zeitplan, die Auswahl der Referenten und die benötigte Technik.\nNutzen Sie die Gelegenheit, um zu entscheiden, wie interaktiv das Seminar sein soll und ob praktische Übungen oder Fallstudien integriert werden sollen.\nIhre Zusammenarbeit wird Ihnen helfen, ein durchdachtes und informatives Seminar auf die Beine zu stellen.",
        ar: "تخططون لندوة حول البرمجيات وتريدون جمع أفكار لتنظيمها. فكّروا معًا في الخطوات التي يمكن اتخاذها وشاركوا اقتراحاتكم. طوّروا أفكارًا حول محتوى الندوة وتنظيمها، وناقشوا الموضوعات والجدول الزمني واختيار المحاضرين والتجهيزات التقنية. قرروا أيضًا مدى تفاعلية الندوة وما إذا كانت ستتضمن تمارين عملية أو دراسات حالة."
    },
    {
        id: "spendenaktion-f-r-stra-enkinder",
        teil: 3,
        title: "Spendenaktion für Straßenkinder",
        text: "Um Geld für Straßenkinder zu sammeln, ist es wichtig, Ideen zu sammeln und Einzelheiten zu klären.\nSprich mit deinem Partner darüber, welche Ideen du hast, und einigt euch über die Details, wie wer was wann machen soll.",
        ar: "لجمع المال للأطفال الذين يعيشون في الشوارع، من المهم جمع الأفكار وتوضيح التفاصيل. تحدث مع شريكك عن الأفكار التي لديك، واتفقا على التفاصيل، مثل من سيفعل ماذا ومتى."
    },
    {
        id: "sportfest",
        teil: 3,
        title: "Sportfest",
        text: "In Ihrer Stadt organisieren Sie ein interkulturelles Sportfest.\nSie sollen bei der Planung helfen.\nÜberlegen Sie, was Sie tun können.\nPlanen Sie gemeinsam, was Sie organisieren können.",
        ar: "تنظمون في مدينتكم مهرجانًا رياضيًا متعدد الثقافات. عليكم المساعدة في التخطيط. فكّروا فيما يمكنكم القيام به وخططوا معًا لما ستنظمونه."
    },
    {
        id: "sportveranstaltung-f-r-kinder",
        teil: 3,
        title: "Sportveranstaltung für Kinder",
        text: "In Ihrer Stadt organisieren Sie Sportveranstaltungen für Kinder.\nSie sollen bei der Planung helfen.\nÜberlegen Sie, was Sie tun können.\nPlanen Sie gemeinsam, was Sie organisieren können.",
        ar: "تنظمون في مدينتكم فعاليات رياضية للأطفال. عليكم المساعدة في التخطيط. فكّروا فيما يمكنكم القيام به وخططوا معًا لما ستنظمونه."
    },
    {
        id: "stadtbesichtigung-f-r-studierende",
        teil: 3,
        title: "Stadtbesichtigung für Studierende",
        text: "Mein Chef hat mir mitgeteilt, dass ich mich nächste Woche um eine Gruppe von Studenten und Studentinnen kümmern muss.\nSie möchten unsere Stadt besichtigen.\nKannst du mir helfen, damit wir gemeinsam ein gutes Programm erstellen können?",
        ar: "أخبرني مديري أنني سأكون مسؤولًا الأسبوع المقبل عن مجموعة من الطلاب والطالبات الذين يريدون زيارة مدينتنا. هل يمكنك مساعدتي لكي نضع معًا برنامجًا جيدًا؟"
    },
    {
        id: "stellenangebot-im-ausland",
        teil: 3,
        title: "Stellenangebot im Ausland",
        text: "Sie haben ein Stellenangebot im Ausland erhalten und planen, dort eine Weile zu leben.\nIch kann Ihnen dabei helfen, sich auf das Leben dort vorzubereiten.\nLassen Sie uns gemeinsam überlegen, was Sie tun können, und welche Vorschläge ich Ihnen machen kann.",
        ar: "تلقيتم عرض عمل في الخارج وتخططون للعيش هناك لبعض الوقت. يمكنني مساعدتكم في الاستعداد للحياة هناك. لِنفكر معًا فيما يمكنكم فعله وما الاقتراحات التي يمكنني تقديمها."
    },
    {
        id: "stra-enfest",
        teil: 3,
        title: "Straßenfest",
        text: "In vielen deutschen Städten finden im Sommer Straßenfeste statt.\nOft werden diese Feste von allen Nachbarn einer Straße organisiert, auch wenn sie sich nicht oder nur wenig kennen.\nEs werden Bänke und Tische aufgestellt, und alle Nachbarn feiern gemeinsam bei selbstgemachtem Essen, Musik und Spielen für die Kinder.\nEin solches Straßenfest kann von morgens bis abends oder auch nur ein paar Stunden dauern.\nSie finden diese Idee großartig und möchten auch in Ihrer Straße ein Fest mit allen Nachbarn organisieren.\nSammeln Sie Ideen für das Fest und teilen Sie die Aufgaben untereinander auf.\nSie haben insgesamt 6 Minuten Zeit.",
        ar: "تقام في كثير من المدن الألمانية احتفالات في الشوارع خلال الصيف. غالبًا ما ينظمها جميع جيران الشارع، حتى لو كانوا لا يعرفون بعضهم جيدًا. توضع الطاولات والمقاعد ويحتفل الجميع بالطعام المصنوع في المنزل والموسيقى والألعاب للأطفال. تريدون تنظيم احتفال مماثل في شارعكم. اجمعوا الأفكار ووزّعوا المهام بينكم. لديكم ست دقائق إجمالًا."
    },
    {
        id: "theaterst-ck",
        teil: 3,
        title: "Theaterstück",
        text: "Sie organisieren ein Theaterstück und spenden Sie das Geld für Wohltätigkeiten.\nSie sollen bei der Planung helfen.\nÜberlegen Sie, was Sie tun können.\nPlanen Sie gemeinsam, was Sie organisieren können.",
        ar: "تنظمون مسرحية وتريدون التبرع بالمال للأعمال الخيرية. عليكم المساعدة في التخطيط. فكّروا فيما يمكنكم القيام به وخططوا معًا لما ستنظمونه."
    },
    {
        id: "umzug",
        teil: 3,
        title: "Umzug",
        text: "Ihr Freund möchte in eine andere Stadt umziehen, und Sie wollen beim Umzug helfen.\nÜberlegen Sie, wie Sie helfen können, und machen Sie Ihrem Partner / Ihrer Partnerin Vorschläge.",
        ar: "يريد صديقكم الانتقال إلى مدينة أخرى، وتريدون مساعدته في الانتقال. فكّروا في كيفية مساعدته وقدّموا اقتراحاتكم لشريككم."
    },
    {
        id: "vorstellungsgespr-ch",
        teil: 3,
        title: "Vorstellungsgespräch",
        text: "Dein Freund hat ein wichtiges Vorstellungsgespräch.\nÜberlegt zusammen, welche Tipps ihr ihm für einen guten Eindruck geben könnt.\nAchtet auf die Körpersprache: Augenkontakt, aufrechte Haltung und ein fester Händedruck vermitteln Selbstvertrauen.\nWichtig ist auch eine klare und ruhige Sprechweise sowie die Bereitschaft, Fragen zu stellen.\nPositivität zählt: Eine optimistische Einstellung kann einen guten Eindruck hinterlassen.",
        ar: "لدى صديقك مقابلة عمل مهمة. فكّرا معًا في النصائح التي يمكن تقديمها له لترك انطباع جيد. انتبها إلى لغة الجسد: التواصل البصري والوضعية المستقيمة والمصافحة القوية تعطي انطباعًا بالثقة. ومن المهم أيضًا التحدث بوضوح وهدوء والاستعداد لطرح الأسئلة. كما أن الإيجابية مهمة، فالموقف المتفائل يمكن أن يترك انطباعًا جيدًا."
    },
    {
        id: "wochenendtreffen-ehemaliger-kursteilnehmer",
        teil: 3,
        title: "Wochenendtreffen ehemaliger Kursteilnehmer",
        text: "Ein Jahr nach Abschluss des Sprachkurses möchten Sie ein Wochenendtreffen für die ehemaligen Kursteilnehmer organisieren.\nFür dieses Treffen planen Sie Aktivitäten am Vormittag.\nDenken Sie dabei auch an Überraschungsmöglichkeiten und wie Sie die Teilnehmer dazu bringen können, gemeinsam zu entscheiden, was unternommen werden soll.",
        ar: "بعد مرور سنة على انتهاء دورة اللغة، تريدون تنظيم لقاء في عطلة نهاية الأسبوع للمشاركين السابقين. تخططون لأنشطة في فترة الصباح، وفكّروا أيضًا في أفكار للمفاجآت وكيف يمكن جعل المشاركين يقررون معًا ما الذي سيفعلونه."
    },
    {
        id: "berraschungsfest-f-r-lehrerin",
        teil: 3,
        title: "Überraschungsfest für Lehrerin",
        text: "Ihre Kursteilnehmer möchten ein Überraschungsfest für Ihre Lehrerin organisieren.\nSie sollen bei der Planung helfen.\nÜberlegen Sie gemeinsam, was Sie tun können.",
        ar: "يريد المشاركون في الدورة تنظيم حفلة مفاجئة لمعلمتهم. عليكم المساعدة في التخطيط. فكّروا معًا فيما يمكنكم القيام به."
    }
];

// Combined dataset
const EXERCISES = [...EXERCISES_TEIL2, ...EXERCISES_TEIL3];
