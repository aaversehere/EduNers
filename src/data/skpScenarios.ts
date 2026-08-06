import { SKPModuleData } from '../types/game';

export const SKP_MODULES: SKPModuleData[] = [
    {
        id: 1,
        title: "SKP 1: Identifikasi Pasien",
        titleEn: "IPSG 1: Patient Identification",
        titleTh: "IPSG 1: การระบุตัวผู้ป่วย",
        subtitle: "Ward Bed 04 & ICU Room 02",
        subtitleEn: "Ward Bed 04 & ICU Room 02",
        subtitleTh: "เตียงผู้ป่วย 04 & ห้อง ICU 02",
        sceneBg: "from-cyan-900 via-slate-900 to-blue-950",
        subLevels: [
            {
                id: 1,
                title: "Kasus 1: Pasien Sadar (Dasar)",
                titleEn: "Case 1: Conscious Patient (Basic)",
                titleTh: "กรณีศึกษา 1: ผู้ป่วยรู้สึกตัว (ระดับพื้นฐาน)",
                subtitle: "Ward Bed 04 - Ruang Rawat Inap",
                subtitleEn: "Ward Bed 04 - Inpatient Room",
                subtitleTh: "เตียง 04 - หอผู้ป่วยสามัญ",
                patientName: "Tn. Dede (40 Thn)",
                patientNameEn: "Mr. Dede (40 Yrs)",
                patientNameTh: "นายเดเด (อายุ 40 ปี)",
                patientInfo: "Terpasang gelang identitas biru. RM: 882190. Instruksi: Inj. Ranitidine 50mg/2ml IV.",
                patientInfoEn: "Wearing blue ID wristband. MRN: 882190. Order: Inj. Ranitidine 50mg/2ml IV.",
                patientInfoTh: "ใส่สายรัดข้อมือระบุตัวสีฟ้า หมายเลขเวชระเบียน: 882190 คำสั่งการรักษา: ยาฉีด Ranitidine 50มก./2มล. IV",
                type: "dialog_choice",
                introDialog: "Selamat pagi. Saya Ners yang bertugas. Sebelum saya memberikan obat suntik Ranitidine untuk meredakan asam lambung Bapak, prosedur keselamatan rumah sakit mewajibkan verifikasi identitas terlebih dahulu.",
                introDialogEn: "Good morning. I am the duty nurse. Before administering IV Ranitidine for your gastric pain, hospital safety procedures require verifying your identity first.",
                introDialogTh: "สวัสดีตอนเช้าครับ/ค่ะ ดิฉัน/กระผม พยาบาลประจำการ ก่อนการฉีดยา Ranitidine เพื่อบรรเทาอาการกรดไหลย้อน ตามขั้นตอนความปลอดภัยของโรงพยาบาล จำเป็นต้องยืนยันตัวตนของผู้ป่วยก่อนครับ/ค่ะ",
                questions: [
                    {
                        id: "skp1_l1",
                        question: "Manakah cara verifikasi identitas pasien yang paling tepat sesuai standar keselamatan pasien sebelum obat diberikan?",
                        questionEn: "Which patient identification verification method best complies with patient safety standards before administering medication?",
                        questionTh: "วิธีการยืนยันตัวตนผู้ป่วยวิธีใดถูกต้องและสอดคล้องกับมาตรฐานความปลอดภัยของผู้ป่วยมากที่สุดก่อนการให้ยา?",
                        options: [
                            "Menanyakan: 'Apakah benar ini dengan Bapak Dede di kamar 04?' sambil melihat nomor tempat tidur.",
                            "Meminta pasien menyebutkan Nama Lengkap dan Tanggal Lahir, mencocokkannya dengan gelang identitas dan rekam medis.",
                            "Melihat gelang identitas pasien saja tanpa menanyakan nama karena pasien sedang istirahat.",
                            "Menanyakan nama panggilan pasien dan mengkonfirmasi diagnosis penyakitnya kepada keluarga yang menjaga."
                        ],
                        optionsEn: [
                            "Asking: 'Are you Mr. Dede in room 04?' while looking at the bed number.",
                            "Asking the patient to state their Full Name and Date of Birth, matching with the wristband and medical record.",
                            "Looking only at the wristband without asking the name because the patient is resting.",
                            "Asking the patient's nickname and confirming the diagnosis with family members."
                        ],
                        optionsTh: [
                            "สอบถามว่า: 'คุณคือคุณเดเด ห้อง 04 ใช่ไหมครับ/ค่ะ?' พร้อมกับดูหมายเลขเตียง",
                            "ขอให้ผู้ป่วยแจ้งชื่อ-นามสกุลจริง และวันเดือนปีเกิด แล้วตรวจสอบจับคู่กับสายรัดข้อมือและเวชระเบียน",
                            "ดูเฉพาะสายรัดข้อมือโดยไม่เอ่ยถามชื่อเนื่องจากผู้ป่วยกำลังพักผ่อน",
                            "ถามชื่อเล่นของผู้ป่วยและยืนยันการวินิจฉัยโรคกับญาติที่เฝ้าไข้"
                        ],
                        correctAnswer: 1,
                        explanation: "Verifikasi identitas wajib menggunakan minimal 2 identitas unik (Nama Lengkap dan Tanggal Lahir atau Nomor Rekam Medis). Nomor kamar atau lokasi pasien TIDAK BOLEH digunakan sebagai indikator identifikasi karena pasien bisa berpindah tempat.",
                        explanationEn: "Identity verification requires at least 2 unique identifiers (Full Name and Date of Birth or Medical Record Number). Room number or bed location MUST NOT be used for identification because patients can move beds.",
                        explanationTh: "การยืนยันตัวตนต้องใช้สิ่งระบุตัวตนที่ไม่ซ้ำกันอย่างน้อย 2 รายการ (ชื่อ-นามสกุลจริง และวันเดือนปีเกิด หรือหมายเลขเวชระเบียน HN/MRN) ห้ามใช้หมายเลขห้องหรือหมายเลขเตียงในการระบุตัวตนเนื่องจากผู้ป่วยอาจย้ายเตียงได้"
                    }
                ]
            },
            {
                id: 2,
                title: "Kasus 2: Pasien Tidak Sadar (Lanjutan)",
                titleEn: "Case 2: Unconscious Patient (Advanced)",
                titleTh: "กรณีศึกษา 2: ผู้ป่วยไม่รู้สึกตัว (ระดับสูง)",
                subtitle: "ICU Room 02 - Intensive Care Unit",
                subtitleEn: "ICU Room 02 - Intensive Care Unit",
                subtitleTh: "ห้อง ICU 02 - แผนกผู้ป่วยหนัก",
                patientName: "Ny. Maya (55 Thn) - Post Stroke",
                patientNameEn: "Mrs. Maya (55 Yrs) - Post Stroke",
                patientNameTh: "นางมายา (อายุ 55 ปี) - หลังภาวะหลอดเลือดสมอง",
                patientInfo: "Kondisi koma (GCS E1M2V1). Terpasang gelang identitas merah muda. RM: 994012. Instruksi: Transfusi Red Blood Cell (PRC) 1 kolf.",
                patientInfoEn: "Comatose (GCS E1M2V1). Pink ID wristband. MRN: 994012. Order: Packed Red Blood Cell (PRC) 1 unit.",
                patientInfoTh: "ภาวะหมดสติ (GCS E1M2V1) ใส่สายรัดข้อมือสีชมพู หมายเลขเวชระเบียน: 994012 คำสั่งการรักษา: ให้เลือด Packed Red Blood Cell (PRC) 1 ถุง",
                type: "dialog_choice",
                introDialog: "Ny. Maya dalam kondisi tidak sadar dan memerlukan transfusi darah PRC. Sebagai perawat ICU, Anda wajib memverifikasi identitas pasien sebelum prosedur transfusi darah dimulai.",
                introDialogEn: "Mrs. Maya is unconscious and requires a PRC blood transfusion. As an ICU nurse, you must verify patient identity before starting transfusion.",
                introDialogTh: "คุณมายาอยู่ในภาวะหมดสติและจำเป็นต้องได้รับเลือด PRC ในฐานะพยาบาล ICU คุณต้องตรวจสอบยืนยันตัวตนผู้ป่วยก่อนเริ่มการให้เลือด",
                questions: [
                    {
                        id: "skp1_l2",
                        question: "Bagaimanakah cara verifikasi identitas yang benar untuk pasien tidak sadar (koma) sebelum darah ditransfusikan?",
                        questionEn: "What is the correct identity verification method for an unconscious (comatose) patient before blood transfusion?",
                        questionTh: "วิธีการยืนยันตัวตนที่ถูกต้องสำหรับผู้ป่วยไม่รู้สึกตัว (หมดสติ) ก่อนการให้เลือดคือข้อใด?",
                        options: [
                            "Memanggil namanya dengan suara keras di telinga pasien, lalu langsung memasang transfusi jika tidak ada respon.",
                            "Memeriksa gelang identitas pasien (Nama Lengkap & Nomor RM) dan mencocokkannya secara teliti dengan kantong darah serta rekam medis bersama perawat saksi kedua.",
                            "Mencocokkan nomor tempat tidur pasien di ICU dengan data di label kantong darah saja.",
                            "Menanyakan nama lengkap pasien kepada pasien di sebelahnya yang sadar."
                        ],
                        optionsEn: [
                            "Calling her name loudly in her ear, then starting transfusion if there is no response.",
                            "Checking the ID wristband (Full Name & MRN) and meticulously matching with blood bag and medical record together with a second nurse witness.",
                            "Matching the ICU bed number with the blood bag label only.",
                            "Asking the conscious patient in the next bed for the full name."
                        ],
                        optionsTh: [
                            "เรียกชื่อผู้ป่วยเสียงดังข้างหู หากไม่มีการตอบสนองให้เริ่มให้เลือดทันที",
                            "ตรวจสอบสายรัดข้อมือระบุตัว (ชื่อ-นามสกุล & หมายเลข HN) และจับคู่ตรวจสอบอย่างละเอียดกับถุงเลือดและเวชระเบียนร่วมกับพยาบาลพยานคนที่สอง",
                            "จับคู่เฉพาะหมายเลขเตียงใน ICU กับข้อมูลบนฉลากถุงเลือด",
                            "ถามชื่อ-นามสกุลของผู้ป่วยจากผู้ป่วยเตียงข้างๆ ที่รู้สึกตัวดี"
                        ],
                        correctAnswer: 1,
                        explanation: "Untuk pasien tidak sadar, koma, atau bayi baru lahir, verifikasi gelang identitas dilakukan dengan mencocokkan Nama Lengkap dan Nomor Rekam Medis pada gelang langsung ke dokumen instruksi medis. Prosedur high-alert seperti transfusi darah wajib dilakukan verifikasi ganda (double-check) oleh dua perawat sadar.",
                        explanationEn: "For unconscious or comatose patients, wristband verification is performed by directly matching Full Name and MRN on wristband against medical order documents. High-alert procedures like blood transfusion require independent double-check by two nurses.",
                        explanationTh: "สำหรับผู้ป่วยไม่รู้สึกตัว หมดสติ หรือทารกแรกเกิด การตรวจสอบสายรัดข้อมือทำได้โดยการจับคู่ชื่อ-นามสกุลและหมายเลขเวชระเบียนบนสายรัดข้อมือกับเอกสารคำสั่งการรักษาทางการแพทย์โดยตรง หัตถการเสี่ยงสูงเช่นการให้เลือดต้องได้รับการตรวจสอบซ้ำแบบอิสระ (double-check) โดยพยาบาลสองคน"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "SKP 2: Komunikasi Efektif (SBAR)",
        titleEn: "IPSG 2: Effective Communication (SBAR)",
        titleTh: "IPSG 2: การสื่อสารที่มีประสิทธิภาพ (SBAR)",
        subtitle: "Nurse Station & Emergency Unit",
        subtitleEn: "Nurse Station & Emergency Unit",
        subtitleTh: "เคาน์เตอร์พยาบาล & แผนกฉุกเฉิน",
        sceneBg: "from-blue-950 via-indigo-950 to-slate-900",
        subLevels: [
            {
                id: 1,
                title: "Kasus 1: Pelaporan Pasien Demam",
                titleEn: "Case 1: Reporting Fever Patient",
                titleTh: "กรณีศึกษา 1: การรายงานผู้ป่วยมีไข้",
                subtitle: "Nurse Station - Telepon Triage",
                subtitleEn: "Nurse Station - Phone Triage",
                subtitleTh: "เคาน์เตอร์พยาบาล - โทรศัพท์คัดแยก",
                patientName: "Ny. Rini (28 Thn) - Typhoid Fever",
                patientNameEn: "Mrs. Rini (28 Yrs) - Typhoid Fever",
                patientNameTh: "นางรินี (อายุ 28 ปี) - ไข้ไทฟอยด์",
                patientInfo: "Suhu: 38.5°C, TD: 110/70 mmHg, HR: 98x/mnt. Mengeluh mual hebat dan belum bisa makan sejak pagi.",
                patientInfoEn: "Temp: 38.5°C, BP: 110/70 mmHg, HR: 98 bpm. Severe nausea, unable to eat since morning.",
                patientInfoTh: "อุณหภูมิ: 38.5°C, ความดันโลหิต: 110/70 mmHg, อัตราการเต้นหัวใจ: 98 ครั้ง/นาที มีอาการคลื่นไส้รุนแรงและทานอาหารไม่ได้ตั้งแต่เช้า",
                type: "sbar_builder",
                introDialog: "Halo dr. Vincent, saya Ners jaga Ruang Melati. Saya ingin melaporkan penurunan kondisi pada pasien Ny. Rini. Mohon petunjuk instruksi medis selanjutnya melalui metode SBAR.",
                introDialogEn: "Hello Dr. Vincent, duty nurse at Ward Melati reporting condition deterioration for Mrs. Rini. Requesting further medical orders via SBAR method.",
                introDialogTh: "สวัสดีค่ะ นพ.วินเซนต์ ดิฉันพยาบาลประจำหอผู้ป่วยเมลาตี ขอรายงานอาการของผู้ป่วยนางรินีที่มีอาการแย่ลง ขอคำสั่งการรักษาเพิ่มเติมผ่านวิธี SBAR ค่ะ",
                sbarData: {
                    correctOrder: [
                        { 
                            category: 'S', 
                            text: "Selamat pagi Dok, saya melaporkan Ny. Rini (28 thn) di kamar 201 mengeluh demam tinggi 38.5°C dan mual hebat pagi ini.",
                            textEn: "Good morning Doctor, reporting Mrs. Rini (28 yrs) in room 201 complaining of high fever 38.5°C and severe nausea this morning.",
                            textTh: "สวัสดีค่ะหมอ ขอรายงานผู้ป่วยนางรินี (28 ปี) ห้อง 201 มีอาการไข้สูง 38.5°C และคลื่นไส้รุนแรงเมื่อเช้านี้ค่ะ"
                        },
                        { 
                            category: 'B', 
                            text: "Pasien rawat hari ke-2 dengan diagnosis medis Demam Tifoid. Terpasang infus Ringer Laktat 20 tetes/menit.",
                            textEn: "Day 2 admission with medical diagnosis Typhoid Fever. Currently on IV Ringer Lactate 20 drops/min.",
                            textTh: "ผู้ป่วยรับเข้านอนโรงพยาบาลวันที่ 2 วินิจฉัยไข้ไทฟอยด์ กำลังได้รับน้ำเกลือ Ringer Lactate 20 หยด/นาที"
                        },
                        { 
                            category: 'A', 
                            text: "Hasil pengkajian tanda vital: TD 110/70 mmHg, Nadi 98x/menit, Suhu 38.5°C. Mukosa bibir tampak kering, pasien berisiko dehidrasi.",
                            textEn: "Vital signs assessment: BP 110/70 mmHg, Pulse 98 bpm, Temp 38.5°C. Dry lip mucosa, patient at risk for dehydration.",
                            textTh: "ผลการประเมินสัญญาณชีพ: BP 110/70 mmHg, HR 98 ครั้ง/นาที, Temp 38.5°C ริมฝีปากแห้ง มีความเสี่ยงต่อภาวะขาดน้ำ"
                        },
                        { 
                            category: 'R', 
                            text: "Apakah ada instruksi penambahan terapi antipiretik intravena (Paracetamol inf) dan antiemetik (Ondansetron)? Serta apakah tetesan infus perlu dinaikkan?",
                            textEn: "Any medical orders for adding IV antipiretic (Paracetamol inf) and antiemetic (Ondansetron)? Should the IV drip rate be increased?",
                            textTh: "ขอคำแนะนำในการเพิ่มยาลดไข้ทางหลอดเลือดดำ (Paracetamol inf) และยาแก้อาเจียน (Ondansetron) รวมถึงต้องเพิ่มอัตราหยดน้ำเกลือหรือไม่คะ?"
                        }
                    ],
                    options: [
                        { 
                            category: 'A', 
                            text: "Hasil pengkajian tanda vital: TD 110/70 mmHg, Nadi 98x/menit, Suhu 38.5°C. Mukosa bibir tampak kering, pasien berisiko dehidrasi.",
                            textEn: "Vital signs assessment: BP 110/70 mmHg, Pulse 98 bpm, Temp 38.5°C. Dry lip mucosa, patient at risk for dehydration.",
                            textTh: "ผลการประเมินสัญญาณชีพ: BP 110/70 mmHg, HR 98 ครั้ง/นาที, Temp 38.5°C ริมฝีปากแห้ง มีความเสี่ยงต่อภาวะขาดน้ำ"
                        },
                        { 
                            category: 'S', 
                            text: "Selamat pagi Dok, saya melaporkan Ny. Rini (28 thn) di kamar 201 mengeluh demam tinggi 38.5°C dan mual hebat pagi ini.",
                            textEn: "Good morning Doctor, reporting Mrs. Rini (28 yrs) in room 201 complaining of high fever 38.5°C and severe nausea this morning.",
                            textTh: "สวัสดีค่ะหมอ ขอรายงานผู้ป่วยนางรินี (28 ปี) ห้อง 201 มีอาการไข้สูง 38.5°C และคลื่นไส้รุนแรงเมื่อเช้านี้ค่ะ"
                        },
                        { 
                            category: 'R', 
                            text: "Apakah ada instruksi penambahan terapi antipiretik intravena (Paracetamol inf) dan antiemetik (Ondansetron)? Serta apakah tetesan infus perlu dinaikkan?",
                            textEn: "Any medical orders for adding IV antipiretic (Paracetamol inf) and antiemetic (Ondansetron)? Should the IV drip rate be increased?",
                            textTh: "ขอคำแนะนำในการเพิ่มยาลดไข้ทางหลอดเลือดดำ (Paracetamol inf) และยาแก้อาเจียน (Ondansetron) รวมถึงต้องเพิ่มอัตราหยดน้ำเกลือหรือไม่คะ?"
                        },
                        { 
                            category: 'B', 
                            text: "Pasien rawat hari ke-2 dengan diagnosis medis Demam Tifoid. Terpasang infus Ringer Laktat 20 tetes/menit.",
                            textEn: "Day 2 admission with medical diagnosis Typhoid Fever. Currently on IV Ringer Lactate 20 drops/min.",
                            textTh: "ผู้ป่วยรับเข้านอนโรงพยาบาลวันที่ 2 วินิจฉัยไข้ไทฟอยด์ กำลังได้รับน้ำเกลือ Ringer Lactate 20 หยด/นาที"
                        }
                    ]
                }
            },
            {
                id: 2,
                title: "Kasus 2: Pelaporan Kondisi Kritis",
                titleEn: "Case 2: Reporting Critical Condition",
                titleTh: "กรณีศึกษา 2: การรายงานภาวะวิกฤต",
                subtitle: "Emergency Unit Bed 03 - Triage Utama",
                subtitleEn: "Emergency Unit Bed 03 - Main Triage",
                subtitleTh: "เตียงฉุกเฉิน 03 - แผนกฉุกเฉิน",
                patientName: "Tn. Budi (45 Thn) - ISK",
                patientNameEn: "Mr. Budi (45 Yrs) - UTI",
                patientNameTh: "นายบุญมี (อายุ 45 ปี) - ติดเชื้อทางเดินปัสสาวะ",
                patientInfo: "Tiba-tiba mengalami sesak napas berat dan gatal seluruh tubuh paska injeksi Ceftriaxone 1g IV. TD: 80/50 mmHg, HR: 120x/mnt, RR: 28x/mnt, akral dingin basah.",
                patientInfoEn: "Sudden severe dyspnea and generalized pruritus post IV Ceftriaxone 1g. BP: 80/50, HR: 120, RR: 28, cold clammy extremities.",
                patientInfoTh: "เกิดอาการหายใจลำบากรุนแรงและผื่นคันทั่วร่างกายทันทีหลังฉีดยา Ceftriaxone 1g IV. ความดัน: 80/50 mmHg, HR: 120 ครั้ง/นาที, RR: 28 ครั้ง/นาที, ปลายมือปลายเท้าเย็นชื้น",
                type: "sbar_builder",
                introDialog: "Dokter Vincent! Tn. Budi tiba-tiba mengalami reaksi syok anafilaktik paska pemberian antibiotik IV. Saya harus segera melaporkan kondisi kritis ini menggunakan metode SBAR untuk mendapatkan instruksi penyelamatan nyawa.",
                introDialogEn: "Dr. Vincent! Mr. Budi suddenly developed anaphylactic shock post IV antibiotic. Reporting critical status via SBAR to obtain life-saving order.",
                introDialogTh: "คุณหมอวินเซนต์ครับ! คุณบุญมีเกิดภาวะช็อกจากการแพ้ (Anaphylactic shock) ทันทีหลังได้รับยาปฏิชีวนะทาง IV ผมต้องรายงานภาวะวิกฤตนี้โดยใช้ SBAR ทันทีครับ!",
                sbarData: {
                    correctOrder: [
                        { 
                            category: 'S', 
                            text: "Dokter Vincent, saya melaporkan Tn. Budi di UGD Bed 03 mengalami sesak napas berat dan penurunan kesadaran mendadak setelah mendapat injeksi Ceftriaxone 5 menit yang lalu.",
                            textEn: "Dr. Vincent, reporting Mr. Budi in ER Bed 03 experiencing severe dyspnea and sudden drop in consciousness after receiving IV Ceftriaxone 5 mins ago.",
                            textTh: "หมอครับ ขอรายงานนายบุญมี เตียง ER 03 มีอาการหายใจลำบากรุนแรงและระดับความรู้สึกตัวลดลงฉับพลันหลังฉีดยา Ceftriaxone 5 นาทีที่แล้วครับ"
                        },
                        { 
                            category: 'B', 
                            text: "Pasien masuk UGD dengan diagnosis medis ISK. Tidak ada riwayat alergi obat sebelumnya yang tercatat di berkas pasien.",
                            textEn: "Admitted to ER with medical diagnosis of UTI. No documented drug allergy history in patient file.",
                            textTh: "ผู้ป่วยแรกรับด้วย UTI ไม่มีประวัติแพ้ยาบันทึกไว้ในเวชระเบียนครับ"
                        },
                        { 
                            category: 'A', 
                            text: "Tensi drop ke 80/50 mmHg, Nadi 120x/menit kecil, RR 28x/menit, SpO2 88% dengan udara bebas. Tampak urtikaria kemerahan menyebar di dada. Analisis saya pasien mengalami Syok Anafilaktik.",
                            textEn: "BP dropped to 80/50 mmHg, Pulse 120 bpm thready, RR 28/min, SpO2 88% on room air. Erythematous urticaria spread over chest. Assessment: Anaphylactic Shock.",
                            textTh: "ความดันตกเหลือ 80/50 mmHg, ชีพจรเบาเร็ว 120 ครั้ง/นาที, RR 28 ครั้ง/นาที, SpO2 88% มีผื่นลมพิษขึ้นทั่วอก ประเมินว่าเป็น Anaphylactic Shock ครับ"
                        },
                        { 
                            category: 'R', 
                            text: "Rekomendasi saya segera berikan injeksi Epinephrine 0.3 mg IM pada paha lateral sekarang, pasang Oksigen NRM 10 L/mnt, dan loading NaCl 0.9% 500ml cepat. Apakah disetujui Dok?",
                            textEn: "Recommendation: Immediately give Epinephrine 0.3 mg IM in anterolateral thigh, apply NRM Oxygen 10 L/min, and rapid fluid loading NaCl 0.9% 500ml. Approved Doctor?",
                            textTh: "ข้อเสนอแนะ: ฉีดยา Epinephrine 0.3 mg IM ที่ต้นขาด้านข้างทันที ให้ Oxygen NRM 10 L/min และโหลด NaCl 0.9% 500ml ด่วน หมอเห็นชอบไหมครับ?"
                        }
                    ],
                    options: [
                        { 
                            category: 'R', 
                            text: "Rekomendasi saya segera berikan injeksi Epinephrine 0.3 mg IM pada paha lateral sekarang, pasang Oksigen NRM 10 L/mnt, dan loading NaCl 0.9% 500ml cepat. Apakah disetujui Dok?",
                            textEn: "Recommendation: Immediately give Epinephrine 0.3 mg IM in anterolateral thigh, apply NRM Oxygen 10 L/min, and rapid fluid loading NaCl 0.9% 500ml. Approved Doctor?",
                            textTh: "ข้อเสนอแนะ: ฉีดยา Epinephrine 0.3 mg IM ที่ต้นขาด้านข้างทันที ให้ Oxygen NRM 10 L/min และโหลด NaCl 0.9% 500ml ด่วน หมอเห็นชอบไหมครับ?"
                        },
                        { 
                            category: 'A', 
                            text: "Tensi drop ke 80/50 mmHg, Nadi 120x/menit kecil, RR 28x/menit, SpO2 88% dengan udara bebas. Tampak urtikaria kemerahan menyebar di dada. Analisis saya pasien mengalami Syok Anafilaktik.",
                            textEn: "BP dropped to 80/50 mmHg, Pulse 120 bpm thready, RR 28/min, SpO2 88% on room air. Erythematous urticaria spread over chest. Assessment: Anaphylactic Shock.",
                            textTh: "ความดันตกเหลือ 80/50 mmHg, ชีพจรเบาเร็ว 120 ครั้ง/นาที, RR 28 ครั้ง/นาที, SpO2 88% มีผื่นลมพิษขึ้นทั่วอก ประเมินว่าเป็น Anaphylactic Shock ครับ"
                        },
                        { 
                            category: 'S', 
                            text: "Dokter Vincent, saya melaporkan Tn. Budi di UGD Bed 03 mengalami sesak napas berat dan penurunan kesadaran mendadak setelah mendapat injeksi Ceftriaxone 5 menit yang lalu.",
                            textEn: "Dr. Vincent, reporting Mr. Budi in ER Bed 03 experiencing severe dyspnea and sudden drop in consciousness after receiving IV Ceftriaxone 5 mins ago.",
                            textTh: "หมอครับ ขอรายงานนายบุญมี เตียง ER 03 มีอาการหายใจลำบากรุนแรงและระดับความรู้สึกตัวลดลงฉับพลันหลังฉีดยา Ceftriaxone 5 นาทีที่แล้วครับ"
                        },
                        { 
                            category: 'B', 
                            text: "Pasien masuk UGD dengan diagnosis medis ISK. Tidak ada riwayat alergi obat sebelumnya yang tercatat di berkas pasien.",
                            textEn: "Admitted to ER with medical diagnosis of UTI. No documented drug allergy history in patient file.",
                            textTh: "ผู้ป่วยแรกรับด้วย UTI ไม่มีประวัติแพ้ยาบันทึกไว้ในเวชระเบียนครับ"
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 3,
        title: "SKP 3: Keamanan Obat (High Alert)",
        titleEn: "IPSG 3: High-Alert Medication Safety",
        titleTh: "IPSG 3: ความปลอดภัยของยาที่ต้องระมัดระวังสูง",
        subtitle: "Instalasi Farmasi & Lemari Obat",
        subtitleEn: "Pharmacy & Medication Cabinet",
        subtitleTh: "ห้องคลังยา & ตู้เก็บยา",
        sceneBg: "from-emerald-950 via-slate-900 to-teal-950",
        subLevels: [
            {
                id: 1,
                title: "Kasus 1: Pelabelan Obat High Alert & LASA",
                titleEn: "Case 1: High Alert & LASA Drug Labeling",
                titleTh: "กรณีศึกษา 1: การติดฉลากยา High Alert & LASA",
                subtitle: "Lemari Obat Nurse Station",
                subtitleEn: "Nurse Station Drug Cabinet",
                subtitleTh: "ตู้เก็บยา เคาน์เตอร์พยาบาล",
                type: "drug_sorting",
                introDialog: "Lemari obat darurat di Nurse Station baru saja diisi ulang oleh farmasi. Tugas Anda adalah memasang label penandaan yang tepat sebelum obat disimpan di rak khusus.",
                introDialogEn: "Emergency drug cabinet at Nurse Station was just restocked by pharmacy. Your task is attaching correct safety labels before storing in special racks.",
                introDialogTh: "ตู้เก็บยาฉุกเฉินที่เคาน์เตอร์พยาบาลเพิ่งได้รับการเติมยาจากห้องยา งานของคุณคือการติดฉลากเตือนความปลอดภัยให้ถูกต้องก่อนนำยาเข้าชั้นเก็บ",
                drugs: [
                    { id: "d1", name: "Epinephrine Inj.", dosage: "1 mg/ml", dosageEn: "1 mg/ml", dosageTh: "1 มก./มล.", type: "high_alert" },
                    { id: "d2", name: "Otsu-MgSO4", dosage: "40% (Magnesium Sulfate)", dosageEn: "40% (Magnesium Sulfate)", dosageTh: "40% (แมกนีเซียมซัลเฟต)", type: "high_alert" },
                    { id: "d3", name: "Ceftriaxone Inj.", dosage: "1 Gram Vial", dosageEn: "1 Gram Vial", dosageTh: "1 กรัม ไวอัล", type: "lasa" },
                    { id: "d4", name: "Cefotaxime Inj.", dosage: "1 Gram Vial", dosageEn: "1 Gram Vial", dosageTh: "1 กรัม ไวอัล", type: "lasa" }
                ]
            },
            {
                id: 2,
                title: "Kasus 2: Penyimpanan Elektrolit Konsentrat",
                titleEn: "Case 2: Concentrated Electrolyte Storage",
                titleTh: "กรณีศึกษา 2: การจัดเก็บสารอิเล็กโทรไลต์เข้มข้น",
                subtitle: "Ruang Persiapan Obat Farmasi",
                subtitleEn: "Pharmacy Prep Room",
                subtitleTh: "ห้องเตรียมยา เภสัชกรรม",
                type: "drug_sorting",
                introDialog: "Rumah sakit baru saja menerima stok larutan elektrolit konsentrat pekat. Obat-obat ini berisiko sangat tinggi bila diberikan tanpa pengenceran. Pilah dan tempelkan stiker yang benar.",
                introDialogEn: "Hospital just received concentrated electrolyte solutions stock. High risk if administered without dilution. Sort and apply correct labels.",
                introDialogTh: "โรงพยาบาลเพิ่งได้รับสารอิเล็กโทรไลต์เข้มข้น ยาเหล่านี้มีความเสี่ยงสูงมากหากให้โดยไม่เจือจาง คัดแยกและติดสติกเกอร์ที่ถูกต้อง",
                drugs: [
                    { id: "e1", name: "KCl 7.46% Inj.", dosage: "Potassium Chloride 25 ml", dosageEn: "Potassium Chloride 25 ml", dosageTh: "โพแทสเซียมคลอไรด์ 25 มล.", type: "high_alert" },
                    { id: "e2", name: "NaCl 3% Infus", dosage: "Sodium Chloride 500 ml", dosageEn: "Sodium Chloride 500 ml", dosageTh: "โซเดียมคลอไรด์ 500 มล.", type: "high_alert" },
                    { id: "e3", name: "Humulin R (Insulin)", dosage: "100 IU/ml Vial", dosageEn: "100 IU/ml Vial", dosageTh: "100 IU/มล. ไวอัล", type: "high_alert" },
                    { id: "e4", name: "Dopamine HCl Inj.", dosage: "200 mg/5ml Ampul", dosageEn: "200 mg/5ml Ampoule", dosageTh: "200 มก./5มล. แอมพูล", type: "high_alert" }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "SKP 4: Kepastian Pembedahan",
        titleEn: "IPSG 4: Safe Surgery Verification",
        titleTh: "IPSG 4: ความปลอดภัยในการผ่าตัด",
        subtitle: "Operating Theater - Kamar Bedah 02 & 03",
        subtitleEn: "Operating Theater - OR 02 & 03",
        subtitleTh: "ห้องผ่าตัด - ห้อง 02 & 03",
        sceneBg: "from-teal-900 via-cyan-950 to-slate-900",
        subLevels: [
            {
                id: 1,
                title: "Kasus 1: Prosedur Time Out",
                titleEn: "Case 1: Time Out Procedure",
                titleTh: "กรณีศึกษา 1: ขั้นตอน Time Out",
                subtitle: "Kamar Bedah 02 - Sesaat Sebelum Insisi",
                subtitleEn: "OR 02 - Immediately Before Incision",
                subtitleTh: "ห้องผ่าตัด 02 - ก่อนการลงมีดผ่าตัด",
                patientName: "Tn. Nanda (35 Thn)",
                patientNameEn: "Mr. Nanda (35 Yrs)",
                patientNameTh: "นายณัฐ (อายุ 35 ปี)",
                patientInfo: "Rencana tindakan: Eksisi Lipoma Dorsal Dextra under General Anesthesia. Tim: dr. Bedah, dr. Anestesi, Perawat Sirkuler.",
                patientInfoEn: "Plan: Excision Lipoma Dorsal Dextra under GA. Team: Surgeon, Anesthesiologist, Circulating Nurse.",
                patientInfoTh: "แผนการผ่าตัด: ตัดก้อนไขมันหลังด้านขวา (Excision Lipoma Dorsal Dextra) ดมยาสลบ ทีม: ศัลยแพทย์, วิสัญญีแพทย์, พยาบาลวนเวียน",
                type: "stage_analysis",
                introDialog: "Tim bedah telah berkumpul di dalam ruang operasi. Sebelum pisau bedah menyentuh kulit pasien (insisi), perawat sirkuler memimpin pembacaan ceklis keselamatan.",
                introDialogEn: "Surgical team gathered in OR. Before knife touches skin (incision), circulating nurse leads safety checklist reading.",
                introDialogTh: "ทีมผ่าตัดมารวมตัวกันในห้องผ่าตัด ก่อนมีดผ่าตัดสัมผัสผิวหนังผู้ป่วย พยาบาลวนเวียน (Circulating Nurse) เป็นผู้นำอ่านรายการตรวจสอบความปลอดภัย",
                questions: [
                    {
                        id: "skp4_l1",
                        question: "Perawat sirkuler meminta seluruh anggota tim memperkenalkan nama & peran, lalu mengkonfirmasi identitas pasien, prosedur medis, area insisi, serta antisipasi kehilangan darah. Fase apakah ini?",
                        questionEn: "Circulating nurse asks team to introduce name & role, confirms patient ID, surgical procedure, incision site, and anticipated blood loss. Which phase is this?",
                        questionTh: "พยาบาลวนเวียนขอให้สมาชิกในทีมทุกคนแนะนำชื่อและบทบาท จากนั้นยืนยันตัวตนผู้ป่วย หัตถการ ตำแหน่งผ่าตัด และการคาดการณ์การสูญเสียเลือด ขั้นตอนนี้คือระยะใด?",
                        options: [
                            "Sign In (Dilakukan di Ruang Persiapan sebelum induksi anestesi)",
                            "Time Out (Dilakukan di Ruang Operasi sesaat sebelum insisi kulit)",
                            "Sign Out (Dilakukan di Ruang Operasi sebelum luka bedah ditutup)",
                            "Briefing Pre-Operatif (Dilakukan di bangsal rawat inap sebelum transfer)"
                        ],
                        optionsEn: [
                            "Sign In (Done in holding area before anesthesia induction)",
                            "Time Out (Done in OR immediately before skin incision)",
                            "Sign Out (Done in OR before wound closure)",
                            "Pre-Op Briefing (Done in ward before transfer)"
                        ],
                        optionsTh: [
                            "Sign In (ทำในห้องพักรอทำหัตถการก่อนการดมยาสลบ)",
                            "Time Out (ทำในห้องผ่าตัดทันทีก่อนการลงมีดผ่าตัด)",
                            "Sign Out (ทำในห้องผ่าตัดก่อนปิดแผลผ่าตัด)",
                            "Pre-Op Briefing (ทำในหอผู้ป่วยก่อนการย้ายมาห้องผ่าตัด)"
                        ],
                        correctAnswer: 1,
                        explanation: "'Time Out' adalah jeda kritis sesaat sebelum insisi kulit dilakukan di mana seluruh tim bedah menyebutkan nama dan perannya, serta memverifikasi kembali identitas pasien, lokasi pembedahan yang tepat, dan prosedur yang akan dikerjakan.",
                        explanationEn: "'Time Out' is the critical pause right before skin incision where entire team confirms identity, correct surgical site, and planned procedure.",
                        explanationTh: "'Time Out' คือการหยุดพักเพื่อตรวจสอบความปลอดภัยก่อนการลงมีดผ่าตัด ซึ่งสมาชิกทีมผ่าตัดทุกคนระบุชื่อและบทบาท และยืนยันตัวตนผู้ป่วย ตำแหน่งผ่าตัด และหัตถการย้ำอีกครั้ง"
                    }
                ]
            },
            {
                id: 2,
                title: "Kasus 2: Prosedur Sign Out",
                titleEn: "Case 2: Sign Out Procedure",
                titleTh: "กรณีศึกษา 2: ขั้นตอน Sign Out",
                subtitle: "Kamar Bedah 03 - Sebelum Luka Ditutup",
                subtitleEn: "OR 03 - Before Wound Closure",
                subtitleTh: "ห้องผ่าตัด 03 - ก่อนปิดแผลผ่าตัด",
                patientName: "Ny. Sarah (29 Thn)",
                patientNameEn: "Mrs. Sarah (29 Yrs)",
                patientNameTh: "นางสาวซาร่าห์ (อายุ 29 ปี)",
                patientInfo: "Tindakan: Laparoscopic Appendectomy. Tim bedah bersiap menjahit fasia dan kulit abdomen pasien.",
                patientInfoEn: "Procedure: Laparoscopic Appendectomy. Team preparing to close fascia and skin.",
                patientInfoTh: "หัตถการ: ผ่าตัดไส้ติ่งผ่านกล้อง ทีมผ่าตัดเตรียมเย็บปิดชั้นกล้ามเนื้อและผิวหนังหน้าท้อง",
                type: "stage_analysis",
                introDialog: "Operasi apendektomi Ny. Sarah hampir selesai. Sebelum dokter bedah menutup luka sayatan abdomen sepenuhnya, perawat sirkuler wajib memimpin fase keselamatan terakhir.",
                introDialogEn: "Mrs. Sarah's appendectomy is nearly complete. Before surgeon closes abdominal wound, circulating nurse leads final safety phase.",
                introDialogTh: "การผ่าตัดไส้ติ่งของคุณซาร่าห์ใกล้เสร็จสิ้น ก่อนศัลยแพทย์จะเย็บปิดแผลหน้าท้องทั้งหมด พยาบาลวนเวียนต้องนำขั้นตอนความปลอดภัยสุดท้าย",
                questions: [
                    {
                        id: "skp4_l2",
                        question: "Manakah tindakan verifikasi keselamatan 'Sign Out' yang wajib dilakukan perawat sirkuler sebelum luka operasi pasien ditutup?",
                        questionEn: "Which 'Sign Out' safety verification action must circulating nurse perform before closing surgical wound?",
                        questionTh: "การตรวจสอบความปลอดภัย 'Sign Out' ข้อใดที่พยาบาลวนเวียนต้องทำก่อนปิดแผลผ่าตัด?",
                        options: [
                            "Meminta dokter bedah melakukan penandaan (marking) pada lokasi sayatan baru.",
                            "Mengkonfirmasi secara verbal: nama tindakan, kesesuaian jumlah instrumen, kasa, dan jarum, pelabelan spesimen biopsi, serta meninjau jika ada malfungsi alat.",
                            "Menanyakan kepada keluarga pasien tentang kenyamanan kamar rawat inap paska operasi.",
                            "Memeriksa gelang identitas pasien untuk pertama kalinya sejak pasien masuk kamar operasi."
                        ],
                        optionsEn: [
                            "Request surgeon to mark new incision site.",
                            "Verbally confirm: procedure name, instrument/sponge/needle count completion, biopsy specimen labeling, and equipment issues.",
                            "Ask family about post-op ward comfort.",
                            "Check patient wristband for first time since entering OR."
                        ],
                        optionsTh: [
                            "ขอให้ศัลยแพทย์ทำเครื่องหมายตำแหน่งแผลผ่าตัดใหม่",
                            "ยืนยันด้วยวาจา: ชื่อหัตถการ การนับจำนวนเครื่องมือ กอซ และเข็มว่าครบถ้วน การติดฉลากสิ่งส่งตรวจชีวพฤกษ์ และทบทวนปัญหาอุปกรณ์",
                            "สอบถามญาติผู้ป่วยเกี่ยวกับความสะดวกสบายของห้องพักหลังผ่าตัด",
                            "ตรวจสอบสายรัดข้อมือผู้ป่วยเป็นครั้งแรกนับตั้งแต่เข้าห้องผ่าตัด"
                        ],
                        correctAnswer: 1,
                        explanation: "'Sign Out' dilakukan sebelum menutup luka operasi. Perawat sirkuler secara verbal mencocokkan nama tindakan yang tercatat, melakukan hitung fisik (counting) instrumen/kasa/jarum bersama perawat scrub untuk mencegah tertinggal di tubuh pasien, memastikan spesimen biopsi berlabel nama benar, dan mencatat masalah peralatan.",
                        explanationEn: "'Sign Out' is performed before wound closure. Nurse verbally confirms procedure name, instrument/sponge/needle count, specimen labeling, and equipment concerns.",
                        explanationTh: "'Sign Out' ทำก่อนการปิดแผลผ่าตัด พยาบาลวนเวียนยืนยันชื่อหัตถการ ทำการนับจำนวนเครื่องมือ/กอซ/เข็มร่วมกับพยาบาลส่งเครื่องมือ เพื่อป้องกันการตกค้างในร่างกายผู้ป่วย ตรวจสอบฉลากสิ่งส่งตรวจ และบันทึกปัญหาเครื่องมือ"
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "SKP 5: Pengurangan Risiko Infeksi",
        titleEn: "IPSG 5: Healthcare-Associated Infection Risk Reduction",
        titleTh: "IPSG 5: การลดความเสี่ยงการติดเชื้อในโรงพยาบาล",
        subtitle: "Wastafel Rumah Sakit & Koridor",
        subtitleEn: "Hospital Sink & Corridor",
        subtitleTh: "อ่างล้างมือโรงพยาบาล & ทางเดิน",
        sceneBg: "from-cyan-950 via-blue-900 to-slate-900",
        subLevels: [
            {
                id: 1,
                title: "Kasus 1: 6 Langkah Cuci Tangan WHO",
                titleEn: "Case 1: WHO 6-Step Hand Hygiene",
                titleTh: "กรณีศึกษา 1: ขั้นตอนการล้างมือ 6 ขั้นตอนของ WHO",
                subtitle: "Wastafel Rumah Sakit - Hand Hygiene",
                subtitleEn: "Hospital Sink - Hand Hygiene",
                subtitleTh: "อ่างล้างมือโรงพยาบาล - สุขอนามัยมือ",
                type: "sequence_order",
                introDialog: "Kebersihan tangan adalah langkah terpenting untuk memutus rantai Infeksi Nosokomial (HAIs). Atur urutan 6 Langkah Cuci Tangan WHO di bawah ini dari langkah pertama hingga selesai.",
                introDialogEn: "Hand hygiene is key to breaking nosocomial infection chains. Arrange the WHO 6-Step Hand Hygiene sequence from step 1 to finish.",
                introDialogTh: "การทำความสะอาดมือเป็นขั้นตอนที่สำคัญที่สุดในการตัดวงจรการติดเชื้อในโรงพยาบาล (HAIs) เรียงลำดับขั้นตอนการล้างมือ 6 ขั้นตอนของ WHO จากขั้นตอนแรกจนจบ",
                sequenceData: {
                    steps: [
                        "Gosok kedua telapak tangan secara bersamaan dengan cairan handrub/sabun.",
                        "Gosok punggung tangan dan sela-sela jari tangan kiri dengan telapak tangan kanan dan sebaliknya.",
                        "Gosok kedua telapak tangan dan sela-sela jari bagian dalam.",
                        "Jari-jari sisi dalam dari kedua tangan saling mengunci (posisi mengatup).",
                        "Gosok ibu jari kiri berputar dalam genggaman telapak tangan kanan dan sebaliknya.",
                        "Gosokkan dengan memutar ujung jari-jari tangan kanan di telapak tangan kiri dan sebaliknya."
                    ],
                    stepsEn: [
                        "Rub palms together with soap/handrub.",
                        "Rub back of left hand with right palm with intertwined fingers and vice versa.",
                        "Rub palm to palm with fingers interlaced.",
                        "Backs of fingers to opposing palms with fingers interlocked.",
                        "Rotational rubbing of left thumb clasped in right palm and vice versa.",
                        "Rotational rubbing of right fingertips in left palm and vice versa."
                    ],
                    stepsTh: [
                        "ถูฝ่ามือทั้งสองข้างเข้าด้วยกันด้วยน้ำและสบู่ หรือเจลแอลกอฮอล์",
                        "ถูหลังมือซ้ายและซอกนิ้วมือซ้ายด้วยฝ่ามือขวา และทำสลับกัน",
                        "ถูฝ่ามือและซอกนิ้วมือด้านในเข้าด้วยกัน",
                        "หลังนิ้วมือและข้อคิดนิ้วมือทั้งสองข้างถูประสานกัน (ลักษณะกำมือถู)",
                        "ถูนิ้วหัวแม่มือซ้ายโดยรอบด้วยฝ่ามือขวา และทำสลับกัน",
                        "ถูวนปลายนิ้วมือขวาบนฝ่ามือซ้าย และทำสลับกัน"
                    ],
                    correctOrder: [0, 1, 2, 3, 4, 5]
                }
            },
            {
                id: 2,
                title: "Kasus 2: 5 Momen Hand Hygiene",
                titleEn: "Case 2: WHO 5 Moments for Hand Hygiene",
                titleTh: "กรณีศึกษา 2: 5 ช่วงเวลาการล้างมือ (5 Moments)",
                subtitle: "Koridor Rawat Inap - Sebelum Memasuki Kamar",
                subtitleEn: "Ward Corridor - Before Entering Room",
                subtitleTh: "ทางเดินหอผู้ป่วย - ก่อนเข้าห้องผู้ป่วย",
                patientName: "Tn. Eko (60 Thn) - Diabetes Melitus",
                patientNameEn: "Mr. Eko (60 Yrs) - Diabetes Mellitus",
                patientNameTh: "นายเอก (อายุ 60 ปี) - เบาหวาน",
                patientInfo: "Instruksi: Mengganti balutan luka gangren diabetikum basah pada kaki kanan pasien.",
                patientInfoEn: "Order: Changing wet diabetic foot gangrene dressing on right leg.",
                patientInfoTh: "คำสั่งการรักษา: ทำแผลเนื้อตายจากเบาหวานชนิดแผลชื้นที่เท้าขวา",
                type: "stage_analysis",
                introDialog: "Anda membawa troli instrumen luka steril dan bersiap melakukan perawatan luka gangren Tn. Eko. Di depan pintu kamar pasien, Anda harus menerapkan momen cuci tangan yang tepat.",
                introDialogEn: "You carry sterile wound instrument trolley preparing for Mr. Eko's gangrene wound care. Identify correct hand hygiene moment.",
                introDialogTh: "คุณถือรถเข็นทำแผลปราศจากเชื้อและเตรียมทำแผลให้คุณเอก ที่หน้าประตูห้องผู้ป่วย คุณต้องปฏิบัติการล้างมือใน ช่วงเวลา (Moment) ที่ถูกต้อง",
                questions: [
                    {
                        id: "skp5_l2",
                        question: "Dalam situasi klinik ini, manakah tindakan kebersihan tangan yang termasuk momen 'Sebelum Melakukan Tindakan Aseptik'?",
                        questionEn: "In this clinical situation, which hand hygiene action represents 'Before Clean/Aseptic Procedure' moment?",
                        questionTh: "ในสถานการณ์คลินิกนี้ การทำความสะอาดมือข้อใดจัดอยู่ในช่วงเวลา 'ก่อนทำหัตถการปราศจากเชื้อ/สะอาด'?",
                        options: [
                            "Mencuci tangan sesaat setelah menyentuh tirai pembatas tempat tidur pasien.",
                            "Mencuci tangan tepat sebelum memakai sarung tangan steril dan membersihkan/menyentuh area luka pasien.",
                            "Mencuci tangan setelah melepaskan perban kotor pasien yang penuh nanah.",
                            "Mencuci tangan setelah keluar dari kamar rawat inap pasien dan bersalaman dengan keluarga."
                        ],
                        optionsEn: [
                            "Washing hands right after touching bed curtain.",
                            "Washing hands immediately before donning sterile gloves and cleaning/touching patient wound.",
                            "Washing hands after removing purulent dirty bandage.",
                            "Washing hands after leaving patient room and shaking hands with family."
                        ],
                        optionsTh: [
                            "ล้างมือทันทีหลังจากสัมผัสผ้าม่านกั้นเตียงผู้ป่วย",
                            "ล้างมือก่อนสวมถุงมือปราศจากเชื้อและสัมผัส/ทำความสะอาดแผลผู้ป่วย",
                            "ล้างมือหลังจากถอดผ้าพันแผลเปื้อนหนองของผู้ป่วยออก",
                            "ล้างมือหลังจากออกจากห้องผู้ป่วยและจับมือกับญาติ"
                        ],
                        correctAnswer: 1,
                        explanation: "Momen 'Sebelum Tindakan Aseptik' (momen ke-2 dari 5 Momen WHO) mewajibkan perawat membersihkan tangan tepat sebelum melakukan prosedur steril atau bersih seperti pasang infus, injeksi, rawat luka, atau pasang kateter guna mencegah masuknya patogen ke tubuh pasien.",
                        explanationEn: "Moment 2 'Before Clean/Aseptic Procedure' requires hand hygiene right before performing sterile or clean procedures (IV insertion, wound care) to prevent pathogen entry.",
                        explanationTh: "ช่วงเวลาที่ 2 'ก่อนทำหัตถการปราศจากเชื้อ/สะอาด' ของ WHO กำหนดให้ทำความสะอาดมือก่อนทำหัตถการเช่นการให้ยาทางหลอดเลือด การทำแผล หรือการใส่สายยาง เพื่อป้องกันเชื้อโรคเข้าสู่ร่างกายผู้ป่วย"
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "SKP 6: Pengurangan Risiko Pasien Jatuh",
        titleEn: "IPSG 6: Patient Fall Risk Reduction",
        titleTh: "IPSG 6: การลดความเสี่ยงผู้ป่วยพลัดตกหกล้ม",
        subtitle: "Ward Room 12 & Pediatric Ward",
        subtitleEn: "Ward Room 12 & Pediatric Ward",
        subtitleTh: "ห้องผู้ป่วย 12 & หอผู้ป่วยเด็ก",
        sceneBg: "from-amber-950 via-slate-900 to-stone-900",
        subLevels: [
            {
                id: 1,
                title: "Kasus 1: Skala Risiko Jatuh Morse (Dewasa)",
                titleEn: "Case 1: Morse Fall Scale (Adults)",
                titleTh: "กรณีศึกษา 1: แบบประเมินความเสี่ยงต่อการหกล้ม Morse (ผู้ใหญ่)",
                subtitle: "Ward Room 12 - Bed Rest Patient",
                subtitleEn: "Ward Room 12 - Bed Rest Patient",
                subtitleTh: "ห้องผู้ป่วย 12 - ผู้ป่วยพักบนเตียง",
                patientName: "Tn. Agus (40 Thn)",
                patientNameEn: "Mr. Agus (40 Yrs)",
                patientNameTh: "นายพงษ์ (อายุ 40 ปี)",
                patientInfo: "Kaki kanan terbalut perban paska operasi fraktur femur. Terpasang kruk penyangga di samping tempat tidur. Pasien tampak lemah dan mendapat terapi diuretik.",
                patientInfoEn: "Right leg bandaged post femur fracture ORIF. Crutches by bedside. Weak and on diuretic therapy.",
                patientInfoTh: "ขาขวาเข้าเฝือกหลังผ่าตัดกระดูกต้นขา มีไม้ค้ำยันข้างเตียง ผู้ป่วยมีอาการอ่อนเพลียและได้รับยาขับปัสสาวะ",
                type: "assessment_tool",
                introDialog: "Tn. Agus menekan bel perawat karena ingin pergi ke kamar mandi sendiri. Anda melihat kondisi fisik dan lingkungan pasien saat memasuki kamar.",
                introDialogEn: "Mr. Agus presses call bell wanting to go to bathroom alone. You observe physical and environmental status.",
                introDialogTh: "คุณพงษ์กดสัญญาณเรียกพยาบาลเนื่องจากต้องการไปห้องน้ำเอง คุณสังเกตเห็นสภาพร่างกายและสิ่งแวดล้อมเมื่อเข้าห้อง",
                questions: [
                    {
                        id: "skp6_l1",
                        question: "Berdasarkan usia (40 tahun), kondisi riwayat jatuh, keterbatasan gaya berjalan, dan penggunaan alat bantu (kruk), instrumen pengkajian risiko jatuh apakah yang tepat digunakan untuk menentukan intervensi keselamatan Tn. Agus?",
                        questionEn: "Based on age (40 yrs), fall history, gait impairment, and crutches use, which fall risk assessment tool is appropriate for Mr. Agus?",
                        questionTh: "จากอายุ (40 ปี) ประวัติการหกล้ม การเดินลำบาก และการใช้ไม้ค้ำยัน เครื่องมือประเมินความเสี่ยงต่อการหกล้มชนิดใดที่เหมาะสมในการกำหนดมาตรการป้องกันสำหรับคุณพงษ์?",
                        options: [
                            "Humpty Dumpty Fall Scale (Skala Risiko Jatuh khusus Pasien Anak)",
                            "Morse Fall Scale / MFS (Skala Risiko Jatuh khusus Pasien Dewasa)",
                            "Edmonson Psychiatric Fall Scale (Skala Risiko Jatuh Pasien Jiwa)",
                            "APGAR Score & Bishop Score (Skala Penilaian Kondisi Fisik Umum)"
                        ],
                        optionsEn: [
                            "Humpty Dumpty Fall Scale (Pediatric Fall Scale)",
                            "Morse Fall Scale / MFS (Adult Fall Scale)",
                            "Edmonson Psychiatric Fall Scale (Psychiatric Fall Scale)",
                            "APGAR Score & Bishop Score (General Physical Scores)"
                        ],
                        optionsTh: [
                            "Humpty Dumpty Fall Scale (แบบประเมินความเสี่ยงสำหรับผู้ป่วยเด็ก)",
                            "Morse Fall Scale / MFS (แบบประเมินความเสี่ยงสำหรับผู้ป่วยผู้ใหญ่)",
                            "Edmonson Psychiatric Fall Scale (แบบประเมินสำหรับผู้ป่วยจิตเวช)",
                            "APGAR Score & Bishop Score (เกณฑ์ประเมินทารกและปากมดลูก)"
                        ],
                        correctAnswer: 1,
                        explanation: "Morse Fall Scale (MFS) adalah instrumen standar yang digunakan untuk mengkaji kemungkinan jatuh pada pasien dewasa berdasarkan 6 parameter klinis (riwayat jatuh, diagnosis sekunder, bantuan berjalan, terapi IV, gaya berjalan/berpindah, dan status mental).",
                        explanationEn: "Morse Fall Scale (MFS) is the standard tool for adult fall risk assessment across 6 clinical parameters.",
                        explanationTh: "Morse Fall Scale (MFS) เป็นเครื่องมือมาตรฐานที่ใช้ประเมินความเสี่ยงต่อการหกล้มในผู้ป่วยผู้ใหญ่ตามปัจจัยทางคลินิก 6 ประการ"
                    }
                ]
            },
            {
                id: 2,
                title: "Kasus 2: Risiko Jatuh Humpty Dumpty (Anak)",
                titleEn: "Case 2: Humpty Dumpty Fall Risk (Pediatrics)",
                titleTh: "กรณีศึกษา 2: ความเสี่ยงต่อการหกล้ม Humpty Dumpty (เด็ก)",
                subtitle: "Pediatric Ward Bed 02 - Kamar Anak",
                subtitleEn: "Pediatric Ward Bed 02 - Children Room",
                subtitleTh: "หอผู้ป่วยเด็ก เตียง 02",
                patientName: "An. Dila (4 Thn)",
                patientNameEn: "Child Dila (4 Yrs)",
                patientNameTh: "เด็กหญิงดิลา (อายุ 4 ปี)",
                patientInfo: "Didiagnosis Diare Akut Dehidrasi Sedang. Mengalami lemas and rewel. Terpasang infus RL. Bed pasien tidak memiliki side rails pengaman anak.",
                patientInfoEn: "Acute Diarrhea Moderate Dehydration. Weak and fussy. IV RL line. Bed lacks child side rails.",
                patientInfoTh: "วินิจฉัยท้องเสียเฉียบพลันมีภาวะขาดน้ำปานกลาง อ่อนเพลียและงอแง ได้รับน้ำเกลือ เตียงไม่มีไม้กั้นข้างเตียงสำหรับเด็ก",
                type: "assessment_tool",
                introDialog: "An. Dila (4 tahun) terus menangis dan aktif bergerak di atas tempat tidur tanpa side rails yang aman. Anda datang untuk melakukan pengkajian keselamatan pasien anak.",
                introDialogEn: "4-year-old Dila is crying and moving actively on bed without side rails. Perform pediatric fall safety assessment.",
                introDialogTh: "เด็กหญิงดิลา (อายุ 4 ปี) ร้องไห้และดิ้นบนเตียงที่ไม่มีไม้กั้นข้างเตียงที่ปลอดภัย คุณมาประเมินความปลอดภัยของผู้ป่วยเด็ก",
                questions: [
                    {
                        id: "skp6_l2",
                        question: "Apakah skala penilaian risiko jatuh yang tepat untuk An. Dila dan tindakan keselamatan pencegahan apa yang harus dipasang?",
                        questionEn: "Which fall risk scale is appropriate for Child Dila and what safety measures must be instituted?",
                        questionTh: "แบบประเมินความเสี่ยงต่อการหกล้มชนิดใดที่เหมาะสมสำหรับเด็กหญิงดิลา และต้องใช้มาตรการป้องกันความปลอดภัยใด?",
                        options: [
                            "Menggunakan Morse Fall Scale; memasang gelang merah alergi di lengannya.",
                            "Menggunakan Humpty Dumpty Scale; memasang gelang kuning penanda risiko jatuh, bed rails terpasang rapat, dan edukasi orang tua untuk selalu mendampingi.",
                            "Menggunakan Skala Braden; memberikan suntikan obat penenang tidur.",
                            "Menggunakan Glasgow Coma Scale; memeriksa reflek pupil matanya setiap jam."
                        ],
                        optionsEn: [
                            "Use Morse Fall Scale; apply red allergy band.",
                            "Use Humpty Dumpty Scale; apply yellow fall risk band, raise side rails, and instruct parents to stay by bedside.",
                            "Use Braden Scale; administer sedative injection.",
                            "Use Glasgow Coma Scale; check pupil reflexes hourly."
                        ],
                        optionsTh: [
                            "ใช้ Morse Fall Scale และติดสายรัดข้อมือระบุการแพ้ยาสีแดง",
                            "ใช้ Humpty Dumpty Scale ติดสายรัดข้อมือระบุความเสี่ยงหกล้มสีเหลือง ยกไม้กั้นข้างเตียงขึ้น และให้คำแนะนำผู้ปกครองให้เฝ้าดูแลตลอดเวลา",
                            "ใช้ Braden Scale และฉีดยานอนหลับ",
                            "ใช้ Glasgow Coma Scale และตรวจม่านตาทุกชั่วโมง"
                        ],
                        correctAnswer: 1,
                        explanation: "Untuk pasien anak (usia di bawah 18 tahun), instrumen risiko jatuh yang tervalidasi adalah Humpty Dumpty Scale. Tindakan pencegahannya meliputi pemasangan gelang identitas kuning, menaikkan pagar pengaman tempat tidur (side rails), serta menginstruksikan orang tua/penjaga untuk tidak meninggalkan pasien sendirian.",
                        explanationEn: "For pediatric patients (<18 yrs), the validated fall tool is Humpty Dumpty Scale. Preventive actions include yellow ID wristband, raising bed side rails, and parental presence.",
                        explanationTh: "สำหรับผู้ป่วยเด็ก (อายุน้อยกว่า 18 ปี) เครื่องมือประเมินความเสี่ยงต่อการหกล้มคือ Humpty Dumpty Scale มาตรการป้องกันรวมถึงการติดสายรัดข้อมือสีเหลือง ยกไม้กั้นข้างเตียง และให้ผู้ปกครองเฝ้าดูแล"
                    }
                ]
            }
        ]
    }
];