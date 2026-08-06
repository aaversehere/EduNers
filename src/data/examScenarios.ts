import { SKPModuleData } from '../types/game';

export const EXAM_SKP_MODULES: SKPModuleData[] = [
    {
        id: 1,
        title: "SKP 1: Identifikasi Pasien",
        titleEn: "IPSG 1: Patient Identification",
        titleTh: "IPSG 1: การระบุตัวผู้ป่วย",
        subtitle: "Ruang Bedah - Modul Ujian",
        subtitleEn: "Surgical Ward - Exam Module",
        subtitleTh: "หอผู้ป่วยศัลยกรรม - โมดูลการสอบ",
        sceneBg: "from-cyan-900 via-slate-900 to-blue-950",
        subLevels: [
            {
                id: 1,
                title: "Kasus Ujian SKP 1: Ketepatan Identifikasi Pasien",
                titleEn: "Exam Case IPSG 1: Patient Identification Accuracy",
                titleTh: "กรณีศึกษาการสอบ IPSG 1: ความถูกต้องในการระบุตัวผู้ป่วย",
                subtitle: "Ruang Bedah - Skenario Evaluasi",
                subtitleEn: "Surgical Ward - Evaluation Scenario",
                subtitleTh: "หอผู้ป่วยศัลยกรรม - สถานการณ์ประเมินผล",
                patientName: "Tn. Budi Santoso (55 Thn)",
                patientNameEn: "Mr. Budi Santoso (55 Yrs)",
                patientNameTh: "นายบุญส่ง (55 ปี)",
                patientInfo: "Diagnosa: Appendicitis. Terbaring di Ruang Bedah. Beban terapi: IV Antibiotik.",
                patientInfoEn: "Diagnosis: Appendicitis. Lying in Surgical Ward. Therapy: IV Antibiotics.",
                patientInfoTh: "การวินิจฉัย: ไส้ติ่งอักเสบ พักรักษาในแผนกผ่าตัด การรักษา: ยาปฏิชีวนะทางหลอดเลือดดำ",
                type: "dialog_choice",
                introDialog: "Anda bertugas di ruang bedah dan akan memberikan suntikan antibiotik IV kepada pasien yang sedang tertidur pulas. Terdapat pasien lain dengan nama mirip di ruangan yang sama. Lakukan verifikasi identifikasi pasien sesuai standar keselamatan!",
                introDialogEn: "You are on duty in the surgical ward and about to administer IV antibiotics to a sleeping patient. Another patient with a similar name is in the same room. Perform patient identification verification according to safety standards!",
                introDialogTh: "คุณปฏิบัติหน้าที่ในหอผู้ป่วยศัลยกรรมและกำลังจะฉีดยาปฏิชีวนะทางหลอดเลือดดำแก่ผู้ป่วยที่กำลังหลับ มีผู้ป่วยอีกคนที่มีชื่อคล้ายกันอยู่ในห้องเดียวกัน โปรดดำเนินการตรวจสอบระบุตัวผู้ป่วยตามมาตรฐานความปลอดภัย!",
                questions: [
                    {
                        id: "exam_skp1",
                        question: "Seorang pasien laki-laki berusia 55 tahun dirawat di ruang bedah dengan diagnosa Appendicitis. Perawat jaga akan memberikan suntikan antibiotik melalui IV. Di ruangan yang sama, terdapat pasien lain dengan nama yang hampir mirip, yakni 'Budi Santoso' dan 'Budi Santosa'. Saat perawat datang, pasien sedang tertidur pulas dan tidak ada keluarga yang mendampingi.\n\nManakah tindakan identifikasi yang paling sesuai dengan standar keselamatan pasien sebelum memberikan obat tersebut?",
                        questionEn: "A 55-year-old male patient is admitted to the surgical ward with a diagnosis of Appendicitis. The duty nurse is about to administer an IV antibiotic. In the same room, there is another patient with a very similar name ('Budi Santoso' and 'Budi Santosa'). Upon arrival, the patient is fast asleep and no family members are present.\n\nWhich identification procedure best complies with patient safety standards before administering the medication?",
                        questionTh: "ผู้ป่วยชายอายุ 55 ปี เข้ารับการรักษาในแผนกผ่าตัดด้วยการวินิจฉัยไส้ติ่งอักเสบ พยาบาลเวรจะให้ยาปฏิชีวนะทางหลอดเลือดดำ ในห้องเดียวกันมีผู้ป่วยอีกคนที่มีชื่อคล้ายกันมาก เมื่อพยาบาลมาถึง ผู้ป่วยกำลังหลับสนิทและไม่มีญาติอยู่ด้วย\n\nขั้นตอนการระบุตัวตนใดที่สอดคล้องกับมาตรฐานความปลอดภัยของผู้ป่วยมากที่สุดก่อนให้ยา?",
                        options: [
                            "Menanyakan nama lengkap pasien pada teman sekamar atau keluarga di luar ruangan.",
                            "Mengecek nama pada papan nama di atas tempat tidur pasien.",
                            "Membangunkan pasien dan meminta menyebutkan nama serta tanggal lahirnya.",
                            "Mencocokkan nama dan nomor rekam medis pada gelang identitas dengan data di lembar instruksi pemberian obat.",
                            "Menanyakan nomor kamar pasien untuk memastikan kecocokan dengan data di catatan perawat."
                        ],
                        optionsEn: [
                            "Ask the roommate or family outside the room for the patient's full name.",
                            "Check the name tag displayed above the patient's bed.",
                            "Wake the patient up and ask them to state their full name and date of birth.",
                            "Match the name and medical record number on the ID wristband against the medication administration order sheet.",
                            "Ask for the patient's room number to ensure it matches the nurse's record."
                        ],
                        optionsTh: [
                            "สอบถามชื่อเต็มของผู้ป่วยจากเพื่อนร่วมห้องหรือญาติที่อยู่ข้างนอก",
                            "ตรวจสอบชื่อบนป้ายชื่อเหนือเตียงของผู้ป่วย",
                            "ปลุกผู้ป่วยและขอให้บอกชื่อ-นามสกุลและวันเดือนปีเกิด",
                            "จับคู่ชื่อและหมายเลขเวชระเบียนบนข้อมือกับข้อมูลในใบสั่งยา",
                            "สอบถามหมายเลขห้องผู้ป่วยเพื่อให้แน่ใจว่าตรงกับบันทึกของพยาบาล"
                        ],
                        correctAnswer: 3,
                        explanation: "Sesuai standar keselamatan pasien (SKP 1), identifikasi pada pasien yang tidak dapat menyebutkan identitasnya (seperti tertidur) dilakukan dengan mencocokkan Nama Lengkap dan Nomor Rekam Medis (minimal 2 identitas unik) pada gelang identitas secara langsung dengan data di lembar instruksi pengobatan/rekam medis.",
                        explanationEn: "According to patient safety standards (IPSG 1), patient identification for individuals unable to verbally confirm their identity (e.g. sleeping) must be done by matching the Full Name and Medical Record Number (at least 2 unique identifiers) on the wristband directly against the medical instruction record.",
                        explanationTh: "ตามมาตรฐานความปลอดภัยของผู้ป่วย (IPSG 1) การระบุตัวผู้ป่วยที่ไม่สามารถยืนยันตัวตนทางวาจาได้ (เช่น กำลังหลับ) ต้องทำโดยการจับคู่ชื่อ-นามสกุลและหมายเลขเวชระเบียนบนสายรัดข้อมือโดยตรงกับเอกสารคำสั่งการรักษา"
                    }
                ]
            },
            {
                id: 2,
                title: "Kasus Ujian HOTS SKP 1: Validasi Ganda Transfusi Darah",
                titleEn: "HOTS Exam Case IPSG 1: Dual Verification for Blood Transfusion",
                titleTh: "กรณีศึกษาการสอบ HOTS IPSG 1: การตรวจสอบซ้ำสองเท่าสำหรับการเติมเลือด",
                subtitle: "Ruang Inap - Skenario Evaluasi HOTS",
                subtitleEn: "Inpatient Ward - HOTS Evaluation Scenario",
                subtitleTh: "หอผู้ป่วยใน - สถานการณ์ประเมินผล HOTS",
                patientName: "Tn. A (70 Thn, Demensia & Afasia Motorik)",
                patientNameEn: "Mr. A (70 Yrs, Dementia & Motor Aphasia)",
                patientNameTh: "นายเอ (70 ปี, ภาวะสมองเสื่อม & ภาวะเสียการสื่อความ)",
                patientInfo: "Status: Demensia & tanpa gelang identitas (terlepas). Terapi: Transfusi darah PRC O+. Berdampingan dengan Tn. A.A (71 Thn).",
                patientInfoEn: "Status: Dementia & missing ID wristband. Therapy: PRC O+ blood transfusion. Adjacent to Mr. A.A (71 Yrs).",
                patientInfoTh: "สถานะ: ภาวะสมองเสื่อม & ไม่มีสายรัดข้อมือ การรักษา: การให้เลือด PRC O+ อยู่ติดกับนายเอเอ (71 ปี)",
                type: "dialog_choice",
                introDialog: "Tn. A dipindahkan dari ICU ke ruang rawat inap tanpa gelang identitas dan tidak mampu konfirmasi verbal. Ia dijadwalkan menerima transfusi darah PRC O+ bersamaan dengan pasien di bed sebelah (Tn. A.A). Lakukan mitigasi keselamatan yang tepat!",
                introDialogEn: "Mr. A was transferred from ICU without an ID wristband and cannot verbally confirm identity. He is scheduled for PRC O+ transfusion while adjacent patient (Mr. A.A) is also scheduled for transfusion. Execute proper safety mitigation!",
                introDialogTh: "นายเอถูกย้ายจาก ICU โดยไม่มีสายรัดข้อมือและไม่สามารถยืนยันตัวตนทางวาจาได้ เขามีกำหนดรับการให้เลือด PRC O+ พร้อมกับผู้ป่วยเตียงข้างๆ โปรดดำเนินการป้องกันความปลอดภัยอย่างถูกต้อง!",
                questions: [
                    {
                        id: "exam_skp1_hots",
                        question: "Tn. A (70 tahun) dengan demensia dan afasia motorik dipindahkan dari ICU ke ruang rawat inap. Gelang identitasnya terlepas saat proses memandikan di tempat tidur dan tertinggal di ICU. Saat tiba di ruangan, perawat akan memberikan transfusi darah Packed Red Cell (PRC) golongan O+. Masalahnya, di bed sebelah terdapat pasien lain bernama Tn. A.A (71 tahun) yang juga dijadwalkan menerima transfusi darah hari ini.\n\nMengingat pasien tidak dapat mengonfirmasi namanya sendiri secara verbal dan tidak ada keluarga yang mendampingi, langkah mitigasi paling tepat dan sistematis apa yang wajib dilakukan perawat ruangan sebelum memulai transfusi sesuai prinsip validasi ganda identitas?",
                        questionEn: "Mr. A (70 years old) with dementia and motor aphasia is transferred from ICU to the inpatient ward. His ID wristband came off during bed-bathing and was left in the ICU. Upon arrival, the nurse is to administer a Packed Red Cell (PRC) O+ blood transfusion. However, the adjacent bed holds another patient named Mr. A.A (71 years old) also scheduled for transfusion today.\n\nGiven the patient cannot verbally confirm his name and no family is present, what is the most appropriate and systematic mitigation step the ward nurse must take before starting transfusion following dual identity verification principles?",
                        questionTh: "นายเอ (อายุ 70 ปี) ที่มีภาวะสมองเสื่อมและภาวะเสียการสื่อความย้ายมาจาก ICU สายรัดข้อมือหลุดระหว่างอาบน้ำบนเตียง เมื่อมาถึงหอผู้ป่วย พยาบาลต้องให้เลือด PRC O+ แต่เตียงข้างๆ มีผู้ป่วยชื่อนายเอเอ (71 ปี) ที่มีกำหนดรับเลือดวันนี้เช่นกัน\n\nเมื่อผู้ป่วยไม่สามารถยืนยันชื่อได้และไม่มีญาติอยู่ด้วย ขั้นตอนการแก้ไขที่เหมาะสมและเป็นระบบที่สุดก่อนเริ่มให้เลือดตามหลักการตรวจสอบซ้ำคืออะไร?",
                        options: [
                            "Menunda transfusi darah sampai keluarga pasien datang untuk melakukan konfirmasi identitas secara verbal guna menghindari malpraktik.",
                            "Melakukan pencocokan golongan darah dengan hasil laboratorium terakhir dan memasang gelang identitas baru berdasarkan nomor tempat tidur pasien.",
                            "Memanggil nama pasien dengan suara keras dan melihat apakah pasien merespons dengan anggukan sebelum memasang gelang identitas baru.",
                            "Melakukan verifikasi identitas secara visual dengan melibatkan staf klinis yang sebelumnya merawat pasien, mencetak gelang baru berdasarkan rekam medis, lalu melakukan double check kantong darah oleh dua perawat.",
                            "Memeriksa kesesuaian nama pada kantong darah dengan papan nama di atas tempat tidur pasien bersama dokter jaga ruangan."
                        ],
                        optionsEn: [
                            "Postpone the blood transfusion until the family arrives to verbally confirm identity to avoid malpractice.",
                            "Cross-match blood type with recent lab results and apply a new ID wristband based on the bed number.",
                            "Call the patient's name loudly and see if he responds with a nod before applying a new ID wristband.",
                            "Perform visual identity verification involving clinical staff who previously cared for him, print a new wristband based on medical records, and conduct a double-check of the blood bag by two nurses.",
                            "Verify the name on the blood bag against the nameboard above the patient's bed together with the duty doctor."
                        ],
                        optionsTh: [
                            "เลื่อนการให้เลือดออกไปจนกว่าญาติจะมาถึงเพื่อยืนยันตัวตนทางวาจา",
                            "ตรวจสอบหมู่เลือดกับผลแล็บล่าสุดและใส่สายรัดข้อมือใหม่ตามหมายเลขเตียง",
                            "เรียกชื่อผู้ป่วยดังๆ และดูว่าตอบรับโดยการผงกศีรษะหรือไม่ก่อนใส่สายรัดข้อมือใหม่",
                            "ทำการตรวจสอบตัวตนทางสายตาร่วมกับทีมบุคลากรที่เคยดูแล พิมพ์สายรัดข้อมือใหม่จากเวชระเบียน และตรวจสอบถุงเลือดซ้ำโดยพยาบาลสองคน",
                            "ตรวจสอบชื่อบนถุงเลือดกับป้ายชื่อเหนือเตียงร่วมกับแพทย์เวร"
                        ],
                        correctAnswer: 3,
                        explanation: "Melakukan verifikasi identitas secara visual dengan melibatkan staf klinis yang sebelumnya merawat pasien, mencetak gelang baru berdasarkan rekam medis, lalu melakukan double check kantong darah oleh dua perawat merupakan langkah mitigasi paling tepat dan sistematis sesuai standar keselamatan.",
                        explanationEn: "Performing visual identity verification involving clinical staff who previously cared for him, printing a new wristband based on medical records, and conducting a double-check of the blood bag by two nurses is the most appropriate and systematic mitigation step according to safety standards.",
                        explanationTh: "การตรวจสอบตัวตนทางสายตาร่วมกับบุคลากรที่เคยดูแล การพิมพ์สายรัดข้อมือใหม่จากเวชระเบียน และการตรวจสอบถุงเลือดซ้ำโดยพยาบาลสองคนเป็นขั้นตอนการป้องกันที่เหมาะสมและเป็นระบบที่สุด"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "SKP 2: Komunikasi Efektif",
        titleEn: "IPSG 2: Effective Communication",
        titleTh: "IPSG 2: การสื่อสารที่มีประสิทธิภาพ",
        subtitle: "Telepon Darurat DPJP - Modul Ujian",
        subtitleEn: "Emergency Call DPJP - Exam Module",
        subtitleTh: "สายด่วนแพทย์เจ้าของไข้ - โมดูลการสอบ",
        sceneBg: "from-blue-950 via-indigo-950 to-slate-900",
        subLevels: [
            {
                id: 1,
                title: "Kasus Ujian SKP 2: Peningkatan Komunikasi Efektif",
                titleEn: "Exam Case IPSG 2: Enhancing Effective Communication",
                titleTh: "กรณีศึกษาการสอบ IPSG 2: การเพิ่มประสิทธิภาพการสื่อสาร",
                subtitle: "Telepon Darurat DPJP - Skenario Evaluasi",
                subtitleEn: "Emergency Phone DPJP - Evaluation Scenario",
                subtitleTh: "สายด่วนแพทย์เจ้าของไข้ - สถานการณ์ประเมินผล",
                patientName: "Pasien Kritis Spesialis Jantung",
                patientNameEn: "Critical Cardiology Patient",
                patientNameTh: "ผู้ป่วยโรคหัวใจวิกฤต",
                patientInfo: "Kondisi: Tekanan darah drop drastis. Instruksi via Telepon: Perubahan dosis Dopamine.",
                patientInfoEn: "Condition: Blood pressure dropping severely. Phone order: Dopamine dose adjustment.",
                patientInfoTh: "ภาวะ: ความดันโลหิตลดลงอย่างรุนแรง คำสั่งทางโทรศัพท์: ปรับขนาดยา Dopamine",
                type: "dialog_choice",
                introDialog: "Dokter spesialis jantung memberikan instruksi verbal via telepon terkait dosis obat High Alert Dopamine pada kondisi gawat darurat. Terapkan prosedur komunikasi efektif TBaK / Read-Back!",
                introDialogEn: "A cardiologist gives a verbal phone order regarding high-alert Dopamine dosage during an emergency. Apply effective communication procedures (TBaK / Read-Back)!",
                introDialogTh: "แพทย์ผู้เชี่ยวชาญโรคหัวใจให้คำสั่งทางวาจาผ่านทางโทรศัพท์เกี่ยวกับขนาดยา Dopamine ในภาวะฉุกเฉิน โปรดใช้ขั้นตอนการสื่อสารที่มีประสิทธิภาพ (TBaK / Read-Back)!",
                questions: [
                    {
                        id: "exam_skp2",
                        question: "Seorang dokter spesialis jantung menelepon perawat jaga untuk memberikan instruksi perubahan dosis Dopamine karena tekanan darah pasien menurun drastis. Perawat mencatat instruksi tersebut. Karena kondisi gawat darurat, instruksi diberikan melalui telepon.\n\nProsedur komunikasi efektif apakah yang wajib dilakukan perawat setelah menerima instruksi tersebut untuk meminimalkan risiko kesalahan medication error?",
                        questionEn: "A cardiologist calls the duty nurse to instruct a change in Dopamine dosage because the patient's blood pressure dropped drastically. The nurse writes down the order. Due to the emergency, the order was given by telephone.\n\nWhich effective communication procedure must the nurse perform after receiving the telephone order to minimize medication errors?",
                        questionTh: "แพทย์โรคหัวใจโทรศัพท์แจ้งพยาบาลเวรเพื่อปรับขนาดยา Dopamine เนื่องจากความดันโลหิตของผู้ป่วยลดลงอย่างมาก พยาบาลจดบันทึกคำสั่ง\n\nขั้นตอนการสื่อสารที่มีประสิทธิภาพใดที่พยาบาลต้องปฏิบัติหลังจากได้รับคำสั่งทางโทรศัพท์เพื่อลดความเสี่ยงข้อผิดพลาดทางการให้ยา?",
                        options: [
                            "Melaporkan kepada kepala ruangan bahwa dokter telah memberikan instruksi.",
                            "Melakukan Read-Back (membacakan kembali) instruksi, lalu meminta konfirmasi/tanda tangan dokter dalam waktu 1x24 jam.",
                            "Langsung memberikan obat sesuai instruksi untuk menyelamatkan nyawa pasien tanpa menunda.",
                            "Meminta perawat lain untuk mendengarkan telepon agar menjadi saksi.",
                            "Mengulangi instruksi dokter di depan keluarga pasien agar mereka tahu dosis yang diberikan."
                        ],
                        optionsEn: [
                            "Report to the nurse manager that the doctor has given an order.",
                            "Perform a Read-Back of the order, then request doctor confirmation/signature within 24 hours.",
                            "Immediately administer the medication according to the order without delay to save life.",
                            "Ask another nurse to listen on the phone as a witness.",
                            "Repeat the doctor's order in front of the family so they know the dosage given."
                        ],
                        optionsTh: [
                            "รายงานหัวหน้าหอผู้ป่วยว่าแพทย์ได้ให้คำสั่งแล้ว",
                            "ดำเนินการทบทวนอ่านกลับ (Read-Back) คำสั่ง แล้วขอคำยืนยัน/ลายเซ็นแพทย์ภายใน 24 ชั่วโมง",
                            "ให้ยาตามคำสั่งทันทีเพื่อช่วยชีวิตผู้ป่วยโดยไม่ชักช้า",
                            "ขอให้พยาบาลคนอื่นช่วยฟังโทรศัพท์เพื่อเป็นพยาน",
                            "ทบทวนคำสั่งแพทย์ต่อหน้าญาติผู้ป่วยเพื่อให้ทราบขนาดยาที่ให้"
                        ],
                        correctAnswer: 1,
                        explanation: "Prosedur komunikasi efektif (SKP 2) untuk instruksi verbal/telepon wajib menerapkan teknik TBaK (Tulis, Baca kembali/Read-Back, dan Konfirmasi). Perawat membacakan ulang instruksi untuk verifikasi kebenaran dan meminta tanda tangan konfirmasi dokter DPJP maksimal dalam 1x24 jam.",
                        explanationEn: "Effective communication procedures (IPSG 2) for verbal/telephone orders require the TBaK technique (Write, Read-Back, and Confirm). The nurse reads back the order to verify accuracy and requests the physician's confirmation signature within 24 hours.",
                        explanationTh: "ขั้นตอนการสื่อสารที่มีประสิทธิภาพ (IPSG 2) สำหรับคำสั่งทางโทรศัพท์ต้องใช้เทคนิค TBaK (เขียน อ่านกลับ และยืนยัน) พยาบาลต้องอ่านกลับคำสั่งเพื่อยืนยันความถูกต้องและขอลงลายมือชื่อยืนยันจากแพทย์ภายใน 24 ชั่วโมง"
                    }
                ]
            },
            {
                id: 2,
                title: "Kasus Ujian HOTS SKP 2: Komunikasi Efektif TBAK & SBAR",
                titleEn: "HOTS Exam Case IPSG 2: Effective Communication TBAK & SBAR",
                titleTh: "กรณีศึกษาการสอบ HOTS IPSG 2: การสื่อสารที่มีประสิทธิภาพ TBAK & SBAR",
                subtitle: "IGD Emergensi - Skenario Evaluasi HOTS",
                subtitleEn: "ER Emergency - HOTS Evaluation Scenario",
                subtitleTh: "ห้องฉุกเฉิน - สถานการณ์ประเมินผล HOTS",
                patientName: "Pasien Syok Anafilaktik (IGD)",
                patientNameEn: "Anaphylactic Shock Patient (ER)",
                patientNameTh: "ผู้ป่วยภาวะช็อกรุนแรงจากภูมิแพ้ (ER)",
                patientInfo: "Kondisi: IGD sangat bising (Code Blue). DPJP Kardiologi memberi instruksi Epinephrine via telepon lalu menutup telepon.",
                patientInfoEn: "Condition: Very noisy ER (Code Blue). Cardiologist gives Epinephrine order via phone then hangs up immediately.",
                patientInfoTh: "ภาวะ: ห้องฉุกเฉินเสียงดังมาก แพทย์ให้คำสั่งฉีด Epinephrine ทางโทรศัพท์แล้ววางสายทันที",
                type: "dialog_choice",
                introDialog: "Dalam situasi IGD bising karena Code Blue, DPJP memberikan instruksi Epinephrine via telepon dengan sangat cepat lalu menutup telepon sebelum perawat read-back. Analisis pelanggaran dan buat keputusan klinis yang tepat!",
                introDialogEn: "In a noisy ER environment due to Code Blue, the attending physician gives a verbal order for Epinephrine very rapidly and hangs up before read-back. Analyze the violation and make appropriate clinical decision!",
                introDialogTh: "ในสถานการณ์ห้องฉุกเฉินเสียงดัง แพทย์ให้คำสั่งทางวาจาสำหรับ Epinephrine อย่างรวดเร็วและวางสายก่อนพยาบาลจะอ่านกลับ วิเคราะห์ข้อผิดพลาดและตัดสินใจทางคลินิกอย่างถูกต้อง!",
                questions: [
                    {
                        id: "exam_skp2_hots",
                        question: "Pada shift malam yang sibuk, seorang perawat IGD menerima instruksi verbal melalui telepon dari Dokter Penanggung Jawab Pelayanan (DPJP) Kardiologi untuk memberikan obat Epinephrine pada pasien syok anafilaktik. Kondisi IGD sedang sangat bising karena ada pasien code blue di bed seberang. DPJP berbicara dengan sangat cepat, menyebutkan dosis, dan langsung menutup telepon sebelum perawat sempat melakukan read back.\n\nBerdasarkan prinsip komunikasi efektif SBAR dan prosedur TBAK, apa pelanggaran etiko-legal paling berisiko dalam skenario tersebut? Bagaimana perawat harus mengambil keputusan otonom secara klinis dan administratif untuk memvalidasi instruksi tersebut di tengah situasi kritis tanpa menunda terapi life-saving?",
                        questionEn: "On a busy night shift, an ER nurse receives a verbal phone order from the attending Cardiologist to administer Epinephrine to a patient in anaphylactic shock. The ER is extremely noisy due to a code blue patient across the room. The physician speaks very rapidly, states the dose, and immediately hangs up before the nurse can read back.\n\nBased on SBAR effective communication principles and TBAK procedures, what is the most risky ethico-legal violation in this scenario? How should the nurse exercise autonomous clinical and administrative judgment to validate the order in a critical situation without delaying life-saving therapy?",
                        questionTh: "ในเวรดึกที่ยุ่งเหยิง พยาบาล ER ได้รับคำสั่งทางโทรศัพท์จากแพทย์เพื่อให้ยา Epinephrine แก่ผู้ป่วยช็อกแอนาฟิแล็กซิส ห้องฉุกเฉินเสียงดังมาก แพทย์พูดเร็วมากและวางสายก่อนพยาบาลจะทบทวนอ่านกลับ\n\nวิเคราะห์การละเมิดตามหลัก SBAR และ TBAK การตัดสินใจทางคลินิกที่เหมาะสมที่สุดของพยาบาลในสถานการณ์วิกฤตคืออะไร?",
                        options: [
                            "Pelanggaran: DPJP tidak mendengarkan read-back. Tindakan: Berkonsultasi dengan dokter jaga IGD untuk memvalidasi instruksi dan dosis obat secara independen, kemudian mendokumentasikan instruksi tersebut.",
                            "Pelanggaran: Perawat tidak memaksa DPJP untuk tetap di telepon. Tindakan: Menghubungi kembali DPJP untuk melakukan read-back meskipun menunda pemberian obat beberapa menit.",
                            "Pelanggaran: IGD terlalu bising. Tindakan: Memberikan dosis standar Epinephrine sesuai protokol rumah sakit tanpa menghiraukan instruksi DPJP tadi.",
                            "Pelanggaran: Instruksi verbal di jam sibuk. Tindakan: Memberikan obat sesuai pendengaran perawat karena kondisi life-saving, lalu meminta tanda tangan DPJP esok harinya.",
                            "Pelanggaran: Tidak ada formulir SBAR tertulis. Tindakan: Mencatat instruksi yang terdengar di rekam medis, langsung memberikan obat, dan melaporkan insiden ke tim keselamatan."
                        ],
                        optionsEn: [
                            "Violation: Physician did not listen to read-back. Action: Consult with the ER duty doctor to independently validate the order and medication dosage, then document the order.",
                            "Violation: Nurse did not force physician to stay on the phone. Action: Call back the physician for read-back even if it delays medication by a few minutes.",
                            "Violation: ER too noisy. Action: Administer standard Epinephrine dose per hospital protocol ignoring physician's phone order.",
                            "Violation: Verbal order during busy hours. Action: Administer medication per what nurse heard due to life-saving condition, then request signature next day.",
                            "Violation: No written SBAR form. Action: Record order as heard in medical record, immediately administer medication, and report incident to safety team."
                        ],
                        optionsTh: [
                            "ข้อผิดพลาด: แพทย์ไม่อยู่ฟังการอ่านกลับ การดำเนินการ: ปรึกษาแพทย์เวรประจำเป็นผู้ตรวจสอบขนาดยาอย่างอิสระและบันทึกคำสั่ง",
                            "ข้อผิดพลาด: พยาบาลไม่ขอให้แพทย์ถือสาย การดำเนินการ: โทรกลับเพื่ออ่านทบทวนแม้ว่าจะทำให้ยาล่าช้า",
                            "ข้อผิดพลาด: ห้องฉุกเฉินเสียงดัง การดำเนินการ: ให้ยาขนาดมาตรฐานตามระเบียบโรงพยาบาล",
                            "ข้อผิดพลาด: คำสั่งทางวาจาในช่วงยุ่ง การดำเนินการ: ให้ยาตามที่ได้ยินแล้วขอลงลายมือชื่อวันถัดไป",
                            "ข้อผิดพลาด: ไม่มีแบบฟอร์ม SBAR การดำเนินการ: บันทึกตามที่ได้ยินแล้วรายงานอุบัติการณ์"
                        ],
                        correctAnswer: 0,
                        explanation: "Pelanggaran terjadi ketika DPJP menutup telepon tanpa mendengar read-back. Pada situasi emergensi life-saving, perawat berkonsultasi dengan dokter jaga IGD di tempat untuk memvalidasi dosis obat secara independen lalu mendokumentasikannya.",
                        explanationEn: "Violation occurs when the physician hangs up without hearing the read-back. In a life-saving emergency, the nurse consults the on-site ER duty doctor to independently validate the medication dose before administration and documents the validation.",
                        explanationTh: "ข้อผิดพลาดเกิดขึ้นเมื่อแพทย์วางสายก่อนฟังการอ่านกลับ ในสถานการณ์ฉุกเฉิน พยาบาลต้องปรึกษาแพทย์ประจำห้องฉุกเฉินเพื่อยืนยันขนาดยาก่อนให้และลงบันทึก"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "SKP 3: Keamanan Obat High Alert",
        titleEn: "IPSG 3: High-Alert Medication Safety",
        titleTh: "IPSG 3: ความปลอดภัยของยาที่ต้องระมัดระวังสูง",
        subtitle: "Ruang ICU - Modul Ujian",
        subtitleEn: "ICU Ward - Exam Module",
        subtitleTh: "หอผู้ป่วย ICU - โมดูลการสอบ",
        sceneBg: "from-emerald-950 via-slate-900 to-teal-950",
        subLevels: [
            {
                id: 1,
                title: "Kasus Ujian SKP 3: Keamanan Obat High Alert",
                titleEn: "Exam Case IPSG 3: High-Alert Medication Safety",
                titleTh: "กรณีศึกษาการสอบ IPSG 3: ความปลอดภัยของยา High Alert",
                subtitle: "Ruang ICU - Skenario Evaluasi",
                subtitleEn: "ICU Ward - Evaluation Scenario",
                subtitleTh: "หอผู้ป่วย ICU - สถานการณ์ประเมินผล",
                patientName: "Pasien Asidosis Metabolik (ICU)",
                patientNameEn: "Metabolic Acidosis Patient (ICU)",
                patientNameTh: "ผู้ป่วยภาวะกรดในเลือดสูง (ICU)",
                patientInfo: "Tindakan: Preparasi Natrium Bikarbonat 8,4% (Meylon) IV.",
                patientInfoEn: "Procedure: Preparation of Sodium Bicarbonate 8.4% (Meylon) IV.",
                patientInfoTh: "หัตถการ: การเตรียม Sodium Bicarbonate 8.4% IV",
                type: "dialog_choice",
                introDialog: "Di ruang ICU, perawat diminta menyiapkan Natrium Bikarbonat 8,4% (Meylon) yang termasuk obat kewaspadaan tinggi (High Alert Medication). Tentukan tindakan pra-pemberian yang paling krusial!",
                introDialogEn: "In the ICU, the nurse is requested to prepare Sodium Bicarbonate 8.4% (Meylon), a high-alert medication. Determine the most crucial pre-administration action!",
                introDialogTh: "ใน ICU พยาบาลได้รับการขอให้เตรียม Sodium Bicarbonate 8.4% ซึ่งเป็นยาเสี่ยงสูง กำหนดขั้นตอนสำคัญที่สุดก่อนการให้ยา!",
                questions: [
                    {
                        id: "exam_skp3",
                        question: "Di ruang ICU, seorang perawat diminta menyiapkan Natrium Bikarbonat 8,4% (Meylon) untuk koreksi asidosis metabolik pasien. Obat ini termasuk dalam kategori High Alert Medication.\n\nManakah tindakan yang paling krusial dilakukan perawat sebelum memberikan obat tersebut kepada pasien?",
                        questionEn: "In the ICU, a nurse is asked to prepare Sodium Bicarbonate 8.4% (Meylon) for metabolic acidosis correction. This medication is categorized as a High-Alert Medication.\n\nWhich action is most crucial for the nurse to perform before administering this medication to the patient?",
                        questionTh: "ใน ICU พยาบาลเตรียม Sodium Bicarbonate 8.4% เพื่อแก้ไขภาวะกรด ยานี้อยู่ในกลุ่มยา High Alert\n\nการปฏิบัติใดสำคัญที่สุดก่อนให้ยานี้แก่ผู้ป่วย?",
                        options: [
                            "Menyimpan obat di lemari terkunci dan memberikan label warna merah.",
                            "Melakukan verifikasi ganda (double check) oleh dua orang perawat yang kompeten.",
                            "Membaca etiket obat sebanyak tiga kali sebelum diencerkan.",
                            "Menanyakan kepada dokter apakah dosis sudah sesuai dengan berat badan pasien.",
                            "Mencampur obat dengan cairan infus terlebih dahulu di ruang farmasi."
                        ],
                        optionsEn: [
                            "Store medication in locked cabinet and apply red label.",
                            "Perform an independent double-check by two competent nurses.",
                            "Read medication label three times before dilution.",
                            "Ask doctor if dosage matches patient's body weight.",
                            "Pre-mix medication with IV fluids in pharmacy first."
                        ],
                        optionsTh: [
                            "เก็บยาในตู้ที่ล็อกและติดฉลากสีแดง",
                            "ทำการตรวจสอบซ้ำสองเท่าอิสระโดยพยาบาลผู้เชี่ยวชาญสองคน",
                            "อ่านฉลากยา 3 ครั้งก่อนเจือจาง",
                            "สอบถามแพทย์ว่าขนาดยาเหมาะสมกับน้ำหนักผู้ป่วยหรือไม่",
                            "ผสมยากับสารน้ำในห้องเภสัชกรรมก่อน"
                        ],
                        correctAnswer: 1,
                        explanation: "Untuk obat kategori High Alert Medication (seperti Natrium Bikarbonat 8,4% pekat), tindakan paling krusial sebelum pemberian obat adalah verifikasi ganda (double check) secara mandiri oleh 2 orang perawat kompeten untuk memastikan dosis, konsentrasi, dan pasien yang benar.",
                        explanationEn: "For High-Alert Medications (such as concentrated Sodium Bicarbonate 8.4%), the most crucial pre-administration step is performing an independent double-check by two competent nurses to verify correct dose, concentration, and patient.",
                        explanationTh: "สำหรับยา High Alert ขั้นตอนที่สำคัญที่สุดก่อนให้ยาคือการตรวจสอบซ้ำโดยพยาบาลสองคนเพื่อยืนยันขนาดยา ความเข้มข้น และผู้ป่วยที่ถูกต้อง"
                    }
                ]
            },
            {
                id: 2,
                title: "Kasus Ujian HOTS SKP 3: Keamanan Obat LASA & Human Factors",
                titleEn: "HOTS Exam Case IPSG 3: LASA Medication Safety & Human Factors",
                titleTh: "กรณีศึกษาการสอบ HOTS IPSG 3: ความปลอดภัยของยา LASA & ปัจจัยมนุษย์",
                subtitle: "Troli Anestesi - Skenario Evaluasi HOTS",
                subtitleEn: "Anesthesia Trolley - HOTS Evaluation Scenario",
                subtitleTh: "รถเข็นยาสลบ - สถานการณ์ประเมินผล HOTS",
                patientName: "Pasien Syok Kardiogenik",
                patientNameEn: "Cardiogenic Shock Patient",
                patientNameTh: "ผู้ป่วยภาวะช็อกเหตุหัวใจ",
                patientInfo: "Tindakan: Preparasi Dopamine 50 cc. Kondisi: Ampul Dobutamine & Dopamine tersimpan sekompartemen (LASA).",
                patientInfoEn: "Procedure: Preparation of Dopamine 50 cc syringe. Condition: Dobutamine & Dopamine ampoules co-stored (LASA).",
                patientInfoTh: "หัตถการ: เตรียม Dopamine 50 cc สภาพ: หลอดยา Dobutamine และ Dopamine เก็บไว้ในช่องเดียวกัน (LASA)",
                type: "dialog_choice",
                introDialog: "Perawat anestesi mengambil ampul Dopamine yang tersimpan sekompartemen dengan Dobutamine (kemasan identik/LASA) tanpa independent double check. Tentukan intervensi sistemik manajemen rumah sakit!",
                introDialogEn: "Anesthesia nurse picks Dopamine ampoule co-stored with Dobutamine (identical LASA packaging) without independent double-check. Determine systemic hospital management intervention!",
                introDialogTh: "พยาบาลดมยาหยิบหลอดยา Dopamine ที่เก็บไว้ช่องเดียวกับ Dobutamine โดยไม่ได้ตรวจสอบซ้ำ กำหนดมาตรการแก้ไขระดับระบบของโรงพยาบาล!",
                questions: [
                    {
                        id: "exam_skp3_hots",
                        question: "Perawat anestesi senior diminta menyiapkan Dopamine dalam spuit 50 cc untuk pasien syok kardiogenik. Di troli emergensi, terdapat ampul Dobutamine dan Dopamine yang tersimpan di dalam kompartemen yang sama. Kedua obat tersebut berasal dari pabrikan yang sama sehingga desain kemasan, warna label, dan ukuran ampulnya sangat identik (LASA). Karena terburu-buru, perawat tersebut mengambil ampul, mencampur obat ke dalam spuit, dan langsung memberikannya tanpa melakukan independent double check.\n\nApakah identifikasi elemen pertahanan sistem (system defense) apa saja yang gagal atau tertembus dalam kasus ini? Intervensi struktural apa yang seharusnya ditetapkan oleh manajemen rumah sakit untuk mencegah medication error jenis ini?",
                        questionEn: "A senior anesthesia nurse is asked to prepare Dopamine in a 50 cc syringe for a cardiogenic shock patient. On the emergency trolley, Dobutamine and Dopamine ampoules are stored in the same compartment. Both drugs come from the same manufacturer, resulting in identical packaging design, label color, and ampoule size (LASA). Rushing through, the nurse grabs an ampoule, mixes the drug into syringe, and administers it without an independent double-check.\n\nWhat system defense elements failed in this case? What structural intervention should hospital management establish to prevent this type of medication error?",
                        questionTh: "พยาบาลดมยาเตรียม Dopamine แต่หลอดยา Dobutamine และ Dopamine มีลักษณะคล้ายกันมาก (LASA) และเก็บไว้ในช่องเดียวกัน พยาบาลหยิบยาและให้โดยไม่ตรวจสอบซ้ำ\n\nมาตรการเชิงโครงสร้างใดที่ผู้บริหารโรงพยาบาลควรจัดทำขึ้นเพื่อป้องกันความผิดพลาดทางการให้ยานี้?",
                        options: [
                            "Kegagalan personal perawat karena terburu-buru; intervensi yang tepat adalah memberikan Surat Peringatan (SP) dan mewajibkan pelatihan ulang.",
                            "Kegagalan komunikasi intra-tim; intervensi berupa pembacaan label obat dengan suara keras (shout out) sebelum diberikan kepada pasien.",
                            "Kegagalan administratif ruang operasi; intervensi berupa penambahan jumlah perawat anestesi di setiap shift jaga untuk mengurangi beban kerja.",
                            "Kegagalan desain pabrik farmasi; intervensi menuntut rumah sakit untuk mengganti supplier obat agar kemasan ampul berbeda total.",
                            "Kegagalan human factors engineering; intervensi wajib memisahkan area penyimpanan (physical separation), memberi label TALL man lettering, dan menerapkan protokol independent double check."
                        ],
                        optionsEn: [
                            "Personal failure due to rushing; appropriate intervention is issuing warning letter and mandatory re-training.",
                            "Intra-team communication failure; intervention is loud label shout-out before patient administration.",
                            "OR administrative failure; intervention is increasing anesthesia nurse staffing per shift to reduce workload.",
                            "Pharma manufacturer design failure; intervention is demanding hospital switch suppliers for completely different packaging.",
                            "Human factors engineering failure; mandatory interventions are physical storage separation, TALL man lettering, and independent double-check protocol."
                        ],
                        optionsTh: [
                            "ความผิดพลาดส่วนบุคคลจากการเร่งรีบ ข้อแก้ไขคือการออกหนังสือเตือน",
                            "ความผิดพลาดการสื่อสารในทีม ข้อแก้ไขคือการอ่านชื่อยาเสียงดังก่อนให้",
                            "ความผิดพลาดบริหารห้องผ่าตัด ข้อแก้ไขคือเพิ่มจำนวนพยาบาล",
                            "ความผิดพลาดของบริษัทยา ข้อแก้ไขคือเปลี่ยนผู้ผลิต",
                            "ความผิดพลาดด้านวิศวกรรมปัจจัยมนุษย์ มาตรการที่จำเป็นคือแยกสถานที่เก็บยาสินค้า (Physical separation) ใช้ตัวอักษร TALL man และระเบียบตรวจสอบซ้ำ"
                        ],
                        correctAnswer: 4,
                        explanation: "Intervensi struktural paling efektif mencegah kesalahan obat LASA adalah perbaikan Human Factors Engineering: pemisahan tempat penyimpanan (physical separation), label TALL man lettering, dan kewajiban independent double check.",
                        explanationEn: "The most effective structural intervention for LASA medication errors is Human Factors Engineering improvement: physical storage separation, TALL man lettering (e.g. DoBUETamine vs DoPAMine), and mandatory independent double-check protocols.",
                        explanationTh: "มาตรการที่มีประสิทธิภาพที่สุดในการป้องกันข้อผิดพลาดจากยา LASA คือการปรับปรุงวิศวกรรมปัจจัยมนุษย์: แยกพื้นที่จัดเก็บ ใช้ตัวพิมพ์ TALL Man และการตรวจสอบซ้ำ"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "SKP 4: Kepastian Pembedahan",
        titleEn: "IPSG 4: Safe Surgery Verification",
        titleTh: "IPSG 4: ความปลอดภัยในการผ่าตัด",
        subtitle: "Operating Theater - Modul Ujian",
        subtitleEn: "Operating Theater - Exam Module",
        subtitleTh: "ห้องผ่าตัด - โมดูลการสอบ",
        sceneBg: "from-teal-900 via-cyan-950 to-slate-900",
        subLevels: [
            {
                id: 1,
                title: "Kasus Ujian SKP 4: Kepastian Pembedahan",
                titleEn: "Exam Case IPSG 4: Surgical Safety Assurance",
                titleTh: "กรณีศึกษาการสอบ IPSG 4: การรับรองความปลอดภัยในการผ่าตัด",
                subtitle: "Kamar Bedah - Skenario Evaluasi",
                subtitleEn: "Operating Room - Evaluation Scenario",
                subtitleTh: "ห้องผ่าตัด - สถานการณ์ประเมินผล",
                patientName: "Pasien Fraktur Femur (ORIF Kaki Kiri)",
                patientNameEn: "Femur Fracture Patient (Left Leg ORIF)",
                patientNameTh: "ผู้ป่วยกระดูกต้นขาหัก (ORIF ขาซ้าย)",
                patientInfo: "Kondisi: Pasien teranestesi di Kamar Operasi. Siap insisi.",
                patientInfoEn: "Condition: Patient anesthetized in OR. Ready for incision.",
                patientInfoTh: "ภาวะ: ผู้ป่วยได้รับยาสลบในห้องผ่าตัด พร้อมสำหรับการลงมีด",
                type: "dialog_choice",
                introDialog: "Pasien sudah teranestesi di meja operasi untuk tindakan ORIF kaki kiri. Seluruh tim bedah sudah bersiap melakukan insisi. Tentukan langkah wajib keselamatan pembedahan yang harus dilakukan!",
                introDialogEn: "Patient is anesthetized on the operating table for left leg ORIF surgery. Entire surgical team is ready for incision. Determine mandatory surgical safety step!",
                introDialogTh: "ผู้ป่วยได้รับยาสลบแล้วสำหรับผ่าตัดขาซ้าย ทีมผ่าตัดพร้อมลงมีด กำหนดขั้นตอนความปลอดภัยที่ต้องปฏิบัติ!",
                questions: [
                    {
                        id: "exam_skp4",
                        question: "Seorang pasien akan menjalani operasi Open Reduction Internal Fixation (ORIF) pada kaki kiri karena fraktur femur. Tim bedah sudah berada di kamar operasi, pasien sudah teranestesi, dan tim siap melakukan insisi.\n\nApakah langkah wajib yang harus dilakukan seluruh tim bedah sebelum insisi dimulai untuk memastikan keselamatan pasien?",
                        questionEn: "A patient is scheduled for Open Reduction Internal Fixation (ORIF) on the left leg due to a femur fracture. The surgical team is in the OR, the patient is anesthetized, and the team is ready to make the incision.\n\nWhat mandatory step must the surgical team perform before incision to ensure patient safety?",
                        questionTh: "ผู้ป่วยมีกำหนดผ่าตัด ORIF ขาซ้าย ทีมผ่าตัดพร้อมลงมีด\n\nขั้นตอนบังคับใดที่ทีมผ่าตัดต้องปฏิบัติก่อนเริ่มลงมีดเพื่อความปลอดภัย?",
                        options: [
                            "Meminta pasien menunjuk kembali lokasi kaki yang sakit sebelum dibius.",
                            "Mengecek kelengkapan alat operasi oleh perawat instrumen.",
                            "Melakukan prosedur Time-Out untuk memverifikasi identitas pasien, prosedur, dan lokasi operasi.",
                            "Memberikan antibiotik profilaksis 30 menit sebelum operasi.",
                            "Menandatangani persetujuan tindakan medis sekali lagi di ruang operasi."
                        ],
                        optionsEn: [
                            "Ask patient to re-point to the surgical leg before anesthesia.",
                            "Check surgical instrument count by scrub nurse.",
                            "Perform Time-Out procedure to verify patient identity, procedure, and surgical site.",
                            "Administer prophylactic antibiotics 30 minutes before surgery.",
                            "Sign informed consent again inside operating room."
                        ],
                        optionsTh: [
                            "ขอให้ผู้ป่วยชี้ตำแหน่งขาที่จะผ่าตัดอีกครั้งก่อนดมยา",
                            "ตรวจสอบจำนวนเครื่องมือผ่าตัดโดยพยาบาลส่งเครื่องมือ",
                            "ทำขั้นตอน Time-Out เพื่อยืนยันตัวตนผู้ป่วย หัตถการ และตำแหน่งที่จะผ่าตัด",
                            "ให้ยาปฏิชีวนะป้องกันก่อนผ่าตัด 30 นาที",
                            "เซ็นใบยินยอมรับการผ่าตัดอีกครั้งในห้องผ่าตัด"
                        ],
                        correctAnswer: 2,
                        explanation: "Sesuai protokol WHO Surgical Safety Checklist (SKP 4), tepat sebelum insisi kulit (sebelum pisau menyentuh kulit), seluruh tim bedah wajib menghentikan kegiatan sejenak untuk melakukan 'Time-Out' memverifikasi identitas pasien, jenis prosedur, dan area/lokasi operasi.",
                        explanationEn: "Per WHO Surgical Safety Checklist (IPSG 4), right before skin incision, the entire surgical team must pause to perform 'Time-Out' to verify patient identity, surgical procedure, and correct surgical site.",
                        explanationTh: "ตามแบบตรวจสอบความปลอดภัยการผ่าตัดของ WHO ก่อนลงมีด ทีมผ่าตัดต้องหยุดเพื่อทำ Time-Out เพื่อยืนยันตัวตน หัตถการ และตำแหน่งผ่าตัดที่ถูกต้อง"
                    }
                ]
            },
            {
                id: 2,
                title: "Kasus Ujian HOTS SKP 4: Resolusi Konflik Site Marking & Time-Out",
                titleEn: "HOTS Exam Case IPSG 4: Site Marking Conflict Resolution & Time-Out",
                titleTh: "กรณีศึกษาการสอบ HOTS IPSG 4: การแก้ความขัดแย้งการทำเครื่องหมายตำแหน่งผ่าตัด",
                subtitle: "Kamar Bedah - Skenario Evaluasi HOTS",
                subtitleEn: "Operating Room - HOTS Evaluation Scenario",
                subtitleTh: "ห้องผ่าตัด - สถานการณ์ประเมินผล HOTS",
                patientName: "Pasien Amputasi Jari Telunjuk Kaki Kiri",
                patientNameEn: "Left 2nd Toe Amputation Patient",
                patientNameTh: "ผู้ป่วยตัดนิ้วชี้เท้าซ้าย",
                patientInfo: "Site marking 'X' di punggung kaki kiri. Informed Consent: Amputasi Jari Telunjuk. Dokter menolak verifikasi ulang.",
                patientInfoEn: "Site marking 'X' on left dorsum pedis. Informed Consent: 2nd Toe Amputation. Surgeon refuses re-verification.",
                patientInfoTh: "เครื่องหมาย 'X' บนหลังเท้าซ้าย หนังสือยินยอม: ตัดนิ้วชี้ ศัลยแพทย์ปฏิเสธการตรวจสอบซ้ำ",
                type: "dialog_choice",
                introDialog: "Perawat sirkuler menemukan ambiguitas tanda 'X' di punggung kaki saat Time-Out operasi amputasi jari telunjuk. Dokter bedah bersikeras langsung insisi. Ambil tindakan 'Stop the Line'!",
                introDialogEn: "Circulating nurse finds ambiguous 'X' mark on dorsum pedis during Time-Out for 2nd toe amputation. Surgeon insists on immediate incision. Take 'Stop the Line' action!",
                introDialogTh: "พยาบาลหมุนเวียนพบข้อสงสัยตำแหน่งเครื่องหมาย 'X' ในช่วง Time-Out ศัลยแพทย์ยืนยันลงมีดทันที ใช้มาตรการ 'Stop the Line'!",
                questions: [
                    {
                        id: "exam_skp4_hots",
                        question: "Pasien dijadwalkan amputasi digitus ke-2 (telunjuk) pedis sinistra akibat gangren diabetik. Di ruang persiapan, dokter bedah memberi site marking berupa tanda 'X' besar yang menutupi area punggung kaki kiri. Saat fase Time-Out di kamar operasi, perawat sirkuler menyadari bahwa informed consent tertulis spesifik 'amputasi jari telunjuk', sementara tanda 'X' tidak secara anatomis menunjuk pada jari yang dimaksud. Dokter bedah menolak memverifikasi ulang dan bersikeras untuk langsung memulai insisi karena waktu anestesi sudah berjalan.\n\nSebagai advokat keselamatan pasien, tindakan kepemimpinan klinis (clinical leadership) apa yang wajib diinisiasi oleh perawat sirkuler? Berdasarkan WHO Surgical Safety Checklist, bagaimana protokol memandatkan penyelesaian konflik semacam ini sebelum insisi dilakukan?",
                        questionEn: "A patient is scheduled for amputation of the 2nd toe (pedis sinistra) due to diabetic gangrene. In holding area, surgeon marks site with large 'X' covering left dorsum of foot. During Time-Out in OR, circulating nurse notices written informed consent specifies '2nd toe amputation', while 'X' mark does not anatomically point to target toe. Surgeon refuses re-verification and insists on starting incision immediately as anesthesia time is ticking.\n\nAs patient safety advocate, what clinical leadership action must circulating nurse initiate? Per WHO Surgical Safety Checklist, how does protocol mandate resolving such conflict before incision?",
                        questionTh: "ผู้ป่วยมีกำหนดตัดนิ้วชี้เท้าซ้าย แพทย์ทำเครื่องหมาย 'X' กว้างบนหลังเท้า ในช่วง Time-Out พยาบาลพบว่าเครื่องหมายไม่ชี้เฉพาะเจาะจงที่นิ้วชี้ แพทย์ปฏิเสธตรวจสอบซ้ำและยืนยันลงมีด\n\nการปฏิบัติของพยาบาลเพื่อปกป้องผู้ป่วยตามระเบียบคืออะไร?",
                        options: [
                            "Mendokumentasikan penolakan dokter bedah di lembar checklist dan membiarkan operasi berlanjut karena tanggung jawab absolut ada pada operator utama.",
                            "Meminta dokter anestesi untuk mulai menginduksi pasien terlebih dahulu agar jadwal tidak tertunda, kemudian berdiskusi ulang dengan dokter bedah.",
                            "Mengaktifkan protokol \"Stop the Line\", menahan penyerahan instrumen bedah pisau (skalpel), dan memanggil manajer OK/kepala staf medis untuk resolusi konflik sebelum insisi.",
                            "Membiarkan insisi dilakukan karena tanda 'X' di punggung kaki kiri secara general sudah cukup mewakili operasi di area ekstremitas sebelah kiri.",
                            "Menghentikan prosedur sementara waktu untuk menjemput keluarga pasien agar masuk ke kamar operasi dan mengonfirmasi jari mana yang harus diamputasi."
                        ],
                        optionsEn: [
                            "Document surgeon's refusal on checklist and allow surgery to proceed as primary operator holds absolute responsibility.",
                            "Ask anesthesiologist to induce patient first to avoid schedule delay, then re-discuss with surgeon.",
                            "Activate 'Stop the Line' protocol, withhold passing scalpels, and call OR manager / chief of medical staff for conflict resolution before incision.",
                            "Allow incision because 'X' mark on left foot dorsum generally covers left lower extremity surgery.",
                            "Halt procedure temporarily to bring family into OR to confirm which toe is to be amputated."
                        ],
                        optionsTh: [
                            "บันทึกการปฏิเสธของแพทย์และปล่อยให้ผ่าตัดต่อไป",
                            "ให้ยาสลบก่อนเพื่อไม่ให้เสียเวลา แล้วค่อยคุยกับแพทย์ใหม่",
                            "ใช้ระเบียบ \"Stop the Line\" ชะลอการยื่นมีดผ่าตัด และเรียกผู้จัดการห้องผ่าตัด/หัวหน้าแพทย์มาตัดสินใจก่อนลงมีด",
                            "ปล่อยให้ผ่าตัดเพราะเครื่องหมาย 'X' ครอบคลุมบริเวณนั้นแล้ว",
                            "หยุดชั่วคราวและพาญาติเข้ามาขอยืนยันในห้องผ่าตัด"
                        ],
                        correctAnswer: 2,
                        explanation: "Jika terjadi ketidaksesuaian/ambiguitas lokasi operasi dan ada penolakan verifikasi, perawat sirkuler wajib mengaktifkan protokol 'Stop the Line', menahan penyerahan skalpel, serta memanggil manajer OK / kepala staf medis untuk menyelesaikan konflik sebelum insisi.",
                        explanationEn: "In case of site ambiguity and refusal to re-verify, circulating nurse must activate 'Stop the Line' protocol, withhold scalpels, and summon OR manager / chief of medical staff for resolution prior to incision.",
                        explanationTh: "หากมีความไม่ชัดเจนตำแหน่งผ่าตัดและแพทย์ปฏิเสธตรวจสอบ พยาบาลต้องใช้ระเบียบ 'Stop the Line' ชะลอมีดผ่าตัด และตามผู้บริหารมาตัดสินก่อนลงมีด"
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
        subtitle: "Ruang Rawat Inap - Modul Ujian",
        subtitleEn: "Inpatient Ward - Exam Module",
        subtitleTh: "หอผู้ป่วยใน - โมดูลการสอบ",
        sceneBg: "from-cyan-950 via-blue-900 to-slate-900",
        subLevels: [
            {
                id: 1,
                title: "Kasus Ujian SKP 5: Pengurangan Risiko Infeksi",
                titleEn: "Exam Case IPSG 5: Infection Risk Reduction",
                titleTh: "กรณีศึกษาการสอบ IPSG 5: การลดความเสี่ยงการติดเชื้อ",
                subtitle: "Ruang Perawatan - Skenario Evaluasi",
                subtitleEn: "Nursing Ward - Evaluation Scenario",
                subtitleTh: "หอผู้ป่วย - สถานการณ์ประเมินผล",
                patientName: "Pasien Rawat Luka Pascaoperasi",
                patientNameEn: "Post-op Wound Care Patient",
                patientNameTh: "ผู้ป่วยดูแลแผลหลังผ่าตัด",
                patientInfo: "Tindakan: Selesai pembersihan luka, akan mengambil peralatan steril baru.",
                patientInfoEn: "Procedure: Finished wound cleansing, about to grab new sterile equipment.",
                patientInfoTh: "หัตถการ: ทำความสะอาดแผลเสร็จแล้ว กำลังจะหยิบอุปกรณ์ปราศจากเชื้อชุดใหม่",
                type: "dialog_choice",
                introDialog: "Perawat baru saja selesai membuang kassa kotor ke tempat sampah infeksius dan hendak mengambil peralatan steril baru untuk mengganti balutan luka. Tentukan moment cuci tangan WHO yang tepat!",
                introDialogEn: "Nurse just disposed soiled gauze into infectious waste bin and is about to grab new sterile equipment for dressing change. Identify correct WHO hand hygiene moment!",
                introDialogTh: "พยาบาลเพิ่งทิ้งผ้าก๊อซใช้แล้วลงถังขยะติดเชื้อและกำลังจะหยิบอุปกรณ์ปลอดเชื้อชุดใหม่ กำหนดช่วงเวลาการล้างมือ WHO ที่ถูกต้อง!",
                questions: [
                    {
                        id: "exam_skp5",
                        question: "Seorang perawat sedang melakukan perawatan luka pascaoperasi pada pasien di ruang perawatan. Setelah selesai membersihkan luka dan membuang kassa kotor ke tempat sampah infeksius, perawat tersebut akan mengambil peralatan steril baru untuk mengganti balutan.\n\nBerdasarkan Five Moments for Hand Hygiene, kapan waktu yang tepat bagi perawat tersebut untuk melakukan kebersihan tangan selanjutnya?",
                        questionEn: "A nurse is performing post-op wound care in a ward. After cleansing wound and disposing dirty gauze into infectious waste, nurse is about to pick up new sterile dressing supplies.\n\nAccording to WHO Five Moments for Hand Hygiene, when is the correct time for the nurse to perform hand hygiene next?",
                        questionTh: "พยาบาลทำแผลหลังผ่าตัด หลังทำความสะอาดและทิ้งผ้าก๊อซสกปรกแล้ว กำลังจะหยิบชุดอุปกรณ์ปลอดเชื้อใหม่\n\nตามหลัก 5 ช่วงเวลาล้างมือของ WHO ช่วงเวลาใดที่พยาบาลต้องล้างมือครั้งถัดไป?",
                        options: [
                            "Setelah menyentuh lingkungan pasien.",
                            "Setelah melakukan tindakan aseptik.",
                            "Sebelum melakukan tindakan aseptik berikutnya.",
                            "Setelah melakukan tindakan pada pasien, sebelum menyentuh peralatan baru.",
                            "Setelah menyentuh cairan tubuh pasien."
                        ],
                        optionsEn: [
                            "After touching patient surroundings.",
                            "After performing aseptic procedure.",
                            "Before performing the next aseptic procedure.",
                            "After patient procedure, before touching new equipment.",
                            "After body fluid exposure risk."
                        ],
                        optionsTh: [
                            "หลังจากสัมผัสสิ่งแวดล้อมรอบตัวผู้ป่วย",
                            "หลังจากทำหัตถการปราศจากเชื้อ",
                            "ก่อนทำหัตถการปราศจากเชื้อครั้งถัดไป",
                            "หลังทำหัตถการกับผู้ป่วย ก่อนสัมผัสอุปกรณ์ใหม่",
                            "หลังจากสัมผัสสารน้ำในร่างกายผู้ป่วย"
                        ],
                        correctAnswer: 2,
                        explanation: "Berdasarkan 5 Momen Kebersihan Tangan WHO (SKP 5), sebelum memegang peralatan steril baru dan melakukan pemasangan balutan steril (prosedur aseptik), perawat wajib melakukan cuci tangan pada Momen ke-2 yaitu 'Sebelum Melakukan Tindakan Aseptik'.",
                        explanationEn: "According to WHO 5 Moments (IPSG 5), before touching new sterile equipment and applying sterile dressing (aseptic procedure), nurse must perform hand hygiene for Moment 2: 'Before Aseptic Procedure'.",
                        explanationTh: "ตาม 5 ช่วงเวลาการล้างมือของ WHO ก่อนจับอุปกรณ์ปราศจากเชื้อชุดใหม่ พยาบาลต้องทำความสะอาดมือช่วงเวลาที่ 2 คือ 'ก่อนทำหัตถการปราศจากเชื้อ'"
                    }
                ]
            },
            {
                id: 2,
                title: "Kasus Ujian HOTS SKP 5: Infeksi Nosokomial MDRO & Hand Hygiene",
                titleEn: "HOTS Exam Case IPSG 5: MDRO Nosocomial Infection & Hand Hygiene",
                titleTh: "กรณีศึกษาการสอบ HOTS IPSG 5: การติดเชื้อในโรงพยาบาล MDRO & สุขอนามัยมือ",
                subtitle: "Burn Unit - Skenario Evaluasi HOTS",
                subtitleEn: "Burn Unit - HOTS Evaluation Scenario",
                subtitleTh: "หอผู้ป่วยไฟไหม้ - สถานการณ์ประเมินผล HOTS",
                patientName: "Pasien X (MRSA) & Pasien Y (Luka Bakar III)",
                patientNameEn: "Patient X (MRSA) & Patient Y (3rd Degree Burn)",
                patientNameTh: "ผู้ป่วย X (MRSA) & ผู้ป่วย Y (แผลไฟไหม้ระดับ 3)",
                patientInfo: "Tindakan: Suction endotrakeal Pasien X -> Handrub 10 detik -> Memperbaiki selang infus Pasien Y (Non-infeksi).",
                patientInfoEn: "Procedure: Endotracheal suction Patient X -> 10-sec handrub -> Adjusting IV line Patient Y (Non-infected).",
                patientInfoTh: "หัตถการ: ดูดเสมหะผู้ป่วย X -> ถูมือแอลกอฮอล์ 10 วินาที -> ปรับสายน้ำเกลือผู้ป่วย Y",
                type: "dialog_choice",
                introDialog: "Perawat B menggosok tangan hanya 10 detik setelah kontak sekret MRSA Pasien X lalu langsung menyentuh selang infus Pasien Y. Analisis pelanggaran Universal Precaution dan risiko infeksi sekunder!",
                introDialogEn: "Nurse B performs alcohol handrub for only 10 seconds after MRSA sputum suction on Patient X then directly adjusts Patient Y's IV line. Analyze Universal Precaution violation and secondary infection risk!",
                introDialogTh: "พยาบาลใช้แอลกอฮอล์ถูมือเพียง 10 วินาทีหลังดูดเสมหะผู้ป่วย MRSA แล้วไปปรับสายน้ำเกลือผู้ป่วยไฟไหม้ วิเคราะห์การละเมิดหลักการป้องกัน!",
                questions: [
                    {
                        id: "exam_skp5_hots",
                        question: "Di Unit Perawatan Luka Bakar (Burn Unit), Perawat B baru saja selesai melakukan suction endotrakeal pada Pasien X yang hasil kultur sputumnya positif MRSA (Methicillin-Resistant Staphylococcus aureus). Perawat membuang sarung tangan dan menggosok tangannya dengan handrub berbasis alkohol selama 10 detik. Setelah itu, ia langsung merespons alarm infusion pump yang berbunyi dan memperbaiki posisi selang infus Pasien Y (pasien luka bakar derajat III yang tidak terinfeksi).\n\nAnalisislah pelanggaran standar Universal Precaution dalam skenario ini. Mengapa tindakan Perawat B sangat berisiko menyebabkan infeksi sekunder pada Pasien Y, dan apa prosedur yang seharusnya dilakukan?",
                        questionEn: "In Burn Unit, Nurse B finishes endotracheal suctioning on Patient X (positive sputum culture for MRSA). Nurse discards gloves and rubs hands with alcohol handrub for 10 seconds. Then, nurse immediately responds to sounding infusion pump alarm and adjusts IV tubing position for Patient Y (uninfected 3rd degree burn patient).\n\nAnalyze Universal Precaution violation in this scenario. Why is Nurse B's action high risk for secondary infection in Patient Y, and what procedure should have been performed?",
                        questionTh: "ในหอผู้ป่วยไฟไหม้ พยาบาล B ดูดเสมหะผู้ป่วยติดเชื้อ MRSA แล้วถูมือด้วยแอลกอฮอล์เพียง 10 วินาที ก่อนไปปรับสายน้ำเกลือผู้ป่วยไฟไหม้ระดับ 3 ที่ไม่มีการติดเชื้อ\n\nวิเคราะห์ความเสี่ยงและขั้นตอนที่ถูกต้อง?",
                        options: [
                            "Durasi handrub kurang dari 20 detik; perawat seharusnya menggunakan sarung tangan ganda (double glove) saat merawat pasien luka bakar.",
                            "Waktu handrub tidak adekuat (hanya 10 detik) dan perawat melanggar Contact Precautions; perawat wajib mencuci tangan dengan sabun dan air mengalir (karena risiko kontaminasi sekret), sebelum beralih ke pasien immunocompromised.",
                            "Perawat menyentuh instrumen (pompa infus) tanpa sarung tangan steril; prosedur standar mengharuskan pemakaian sarung tangan bedah setiap berinteraksi di ruang intensif.",
                            "Kegagalan terletak pada tidak digantinya apron medis; perawat boleh menggunakan handrub alkohol asalkan durasinya genap 60 detik penuh.",
                            "MRSA adalah infeksi airborne; sehingga kesalahan utama perawat adalah tidak melepas masker N95 sebelum menyentuh peralatan pasien lain."
                        ],
                        optionsEn: [
                            "Handrub duration under 20 secs; nurse should use double gloves when caring burn patients.",
                            "Handrub duration inadequate (only 10 secs) and nurse violated Contact Precautions; nurse must wash hands with soap and water (due to body fluid risk) before moving to immunocompromised patient.",
                            "Nurse touched infusion pump without sterile gloves; standard procedure requires surgical gloves for all intensive care interactions.",
                            "Failure is not changing medical apron; alcohol handrub is permitted provided duration is full 60 seconds.",
                            "MRSA is airborne; main error was not removing N95 mask before touching another patient's equipment."
                        ],
                        optionsTh: [
                            "เวลาถูมือน้อยกว่า 20 วินาที ควรใช้ถุงมือสองชั้น",
                            "เวลาถูมือไม่เพียงพอ (เพียง 10 วินาที) และละเมิดมาตรการสัมผัส ต้องล้างมือด้วยสบู่และน้ำไหลก่อนย้ายไปดูแลผู้ป่วยภูมิคุ้มกันต่ำ",
                            "จับเครื่องมือโดยไม่ใส่ถุงมือปลอดเชื้อ",
                            "ไม่เปลี่ยนผ้ากันเปื้อนทางการแพทย์",
                            "MRSA เป็นการติดเชื้อทางอากาศ"
                        ],
                        correctAnswer: 1,
                        explanation: "Durasi handrub 10 detik tidak adekuat dan melanggar Contact Precautions. Karena berisiko kontaminasi sekret tubuh, perawat wajib mencuci tangan dengan sabun dan air mengalir sebelum berpindah merawat pasien immunocompromised.",
                        explanationEn: "10-second handrub is inadequate and violates Contact Precautions. Following body fluid exposure risk (suction), nurse must wash hands with soap and water before caring for another immunocompromised patient.",
                        explanationTh: "เวลาถูมือ 10 วินาทีไม่เพียงพอและละเมิดมาตรการสัมผัส เนื่องจากสัมผัสสารน้ำ ต้องล้างมือด้วยสบู่และน้ำก่อนย้ายไปดูแลผู้ป่วยรายถัดไป"
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
        subtitle: "Ward Room - Modul Ujian",
        subtitleEn: "Ward Room - Exam Module",
        subtitleTh: "หอผู้ป่วย - โมดูลการสอบ",
        sceneBg: "from-amber-950 via-slate-900 to-stone-900",
        subLevels: [
            {
                id: 1,
                title: "Kasus Ujian SKP 6: Pengurangan Risiko Pasien Jatuh",
                titleEn: "Exam Case IPSG 6: Fall Risk Reduction",
                titleTh: "กรณีศึกษาการสอบ IPSG 6: การลดความเสี่ยงผู้ป่วยพลัดตกหกล้ม",
                subtitle: "Ruang Rawat - Skenario Evaluasi",
                subtitleEn: "Nursing Ward - Evaluation Scenario",
                subtitleTh: "หอผู้ป่วย - สถานการณ์ประเมินผล",
                patientName: "Tn. X (Morse Fall Scale: Skor 65)",
                patientNameEn: "Mr. X (Morse Fall Scale: Score 65)",
                patientNameTh: "นายเอ็กซ์ (Morse Fall Scale: คะแนน 65)",
                patientInfo: "Kategori: Risiko Jatuh Tinggi. Kelemahan ekstremitas bawah.",
                patientInfoEn: "Category: High Fall Risk. Lower extremity weakness.",
                patientInfoTh: "หมวดหมู่: ความเสี่ยงหกล้มสูง กล้ามเนื้อขาอ่อนแรง",
                type: "dialog_choice",
                introDialog: "Tn. X memiliki skor Morse Fall Scale 65 (risiko jatuh tinggi) dan mengalami kelemahan otot bagian bawah. Tentukan intervensi fisik utama untuk mencegah jatuh dari tempat tidur!",
                introDialogEn: "Mr. X has Morse Fall Scale score 65 (high fall risk) and lower limb weakness. Determine primary physical intervention to prevent bed falls!",
                introDialogTh: "นายเอ็กซ์มีคะแนนประเมินหกล้ม 65 (เสี่ยงสูง) กำหนดมาตรการป้องกันหกล้มตกจากเตียงที่สำคัญที่สุด!",
                questions: [
                    {
                        id: "exam_skp6",
                        question: "Hasil pengkajian risiko jatuh pada pasien Tn. X menggunakan Morse Fall Scale didapatkan skor 65 (kategori risiko tinggi). Pasien mengalami kelemahan ekstremitas bawah dan ketergantungan sebagian.\n\nSelain memasang tanda risiko jatuh (segitiga kuning), apakah intervensi paling efektif yang harus dilakukan perawat untuk mencegah pasien jatuh dari tempat tidur?",
                        questionEn: "Fall risk assessment for Mr. X using Morse Fall Scale yields score 65 (high risk). Patient has lower limb weakness and partial dependency.\n\nBesides placing yellow fall risk sign, what is the most effective physical intervention for the nurse to prevent patient from falling out of bed?",
                        questionTh: "ผลประเมินความเสี่ยงหกล้มของนายเอ็กซ์ได้ 65 คะแนน (เสี่ยงสูง)\n\nนอกจากติดป้ายเตือนสีเหลืองแล้ว มาตรการป้องกันที่มีประสิทธิภาพที่สุดในการป้องกันการตกเตียงคืออะไร?",
                        options: [
                            "Memasang penghalang tempat tidur (bed rail) dan memastikan roda tempat tidur terkunci.",
                            "Menyarankan keluarga untuk selalu berada di samping pasien 24 jam.",
                            "Membatasi pergerakan pasien dengan mengikat pergelangan tangan agar tidak turun.",
                            "Menempatkan pasien di ruang isolasi agar lebih mudah diawasi perawat.",
                            "Memberikan obat sedatif agar pasien tidak mencoba bangun dari tempat tidur."
                        ],
                        optionsEn: [
                            "Raise bed side rails and ensure bed wheels are locked.",
                            "Advise family to stay by bedside 24 hours non-stop.",
                            "Restrain patient's wrists to prevent getting out of bed.",
                            "Place patient in isolation room for easier observation.",
                            "Administer sedatives to prevent patient from getting up."
                        ],
                        optionsTh: [
                            "ยกไม้กั้นเตียงขึ้นและล็อกล้อเตียงให้เรียบร้อย",
                            "แนะนำให้ญาติเฝ้าข้างเตียงตลอด 24 ชั่วโมง",
                            "ผูกยึดข้อมือผู้ป่วยเพื่อไม่ให้ลงจากเตียง",
                            "ย้ายผู้ป่วยไปห้องแยกเพื่อให้สังเกตง่ายขึ้น",
                            "ให้ยานอนหลับเพื่อไม่ให้ผู้ป่วยพยายามลุกขึ้น"
                        ],
                        correctAnswer: 0,
                        explanation: "Intervensi fisik standar paling efektif untuk mencegah pasien jatuh dari tempat tidur pada kategori risiko tinggi (SKP 6) adalah memasang/menaikkan penghalang tempat tidur (bed rail) serta mengunci roda tempat tidur.",
                        explanationEn: "Standard physical intervention for high fall risk (IPSG 6) to prevent bed falls is raising bed rails and locking bed wheels.",
                        explanationTh: "มาตรการมาตรฐานที่มีประสิทธิภาพที่สุดสำหรับความเสี่ยงหกล้มสูงคือการยกไม้กั้นเตียงขึ้นและล็อกล้อเตียง"
                    }
                ]
            },
            {
                id: 2,
                title: "Kasus Ujian HOTS SKP 6: Re-assessment Pasien Jatuh Pasca-Sedatif",
                titleEn: "HOTS Exam Case IPSG 6: Post-Sedative Fall Re-assessment",
                titleTh: "กรณีศึกษาการสอบ HOTS IPSG 6: การประเมินความเสี่ยงหกล้มซ้ำหลังได้รับยาสงบประสาท",
                subtitle: "Bangsal Inap - Skenario Evaluasi HOTS",
                subtitleEn: "Inpatient Ward - HOTS Evaluation Scenario",
                subtitleTh: "หอผู้ป่วยใน - สถานการณ์ประเมินผล HOTS",
                patientName: "Ny. M (65 Thn, Vertigo, MFS: 55)",
                patientNameEn: "Mrs. M (65 Yrs, Vertigo, MFS: 55)",
                patientNameTh: "นางเอ็ม (65 ปี, เวียนศีรษะ, MFS: 55)",
                patientInfo: "Menerima injeksi Diazepam IV jam 22.00. Ditemukan jatuh di kamar mandi jam 23.00 dengan luka robek pelipis.",
                patientInfoEn: "Received Diazepam IV at 22:00. Found fallen in bathroom at 23:00 with temple laceration.",
                patientInfoTh: "ได้รับฉีดยา Diazepam IV เวลา 22.00 น. พบล้มในห้องน้ำเวลา 23.00 น. มีแผลแตกที่ขมับ",
                type: "dialog_choice",
                introDialog: "Ny. M (MFS 55) mendapat obat penenang Diazepam IV. Perawat tidak melakukan pengkajian ulang (re-assessment) risiko jatuh pasca pemberian obat depresan SSP. Analisis titik kritis kegagalan asuhan keperawatan!",
                introDialogEn: "Mrs. M (MFS 55) receives IV Diazepam sedative. Nurse fails to perform post-sedative fall risk re-assessment. Analyze critical nursing care failure point!",
                introDialogTh: "นางเอ็มได้รับยา Diazepam พยาบาลไม่ได้ประเมินความเสี่ยงหกล้มซ้ำหลังได้รับยา วิเคราะห์จุดบกพร่องวิกฤต!",
                questions: [
                    {
                        id: "exam_skp6_hots",
                        question: "Ny. M (65 tahun) dirawat dengan keluhan vertigo. Penilaian awal Morse Fall Scale (MFS) menunjukkan skor 55 (Risiko Tinggi). Perawat telah memasang gelang kuning, memasang pagar tempat tidur penuh, dan mengedukasi keluarga. Pada pukul 22.00, pasien mengeluh sangat gelisah, sehingga dokter meresepkan injeksi Diazepam IV. Perawat memberikan obat tersebut dan kembali ke nurse station. Satu jam kemudian, Ny. M ditemukan tergeletak di lantai kamar mandi dengan luka robek di pelipis.\n\nIntervensi pencegahan jatuh standar sudah dilakukan di awal, namun insiden KTD tetap terjadi. Apa titik kritis kegagalan asuhan keperawatan dalam skenario di atas terkait pengkajian berkelanjutan? Modifikasi protokol apa yang mutlak diperlukan sesaat setelah pemberian obat depresan saraf pusat?",
                        questionEn: "Mrs. M (65 yrs) admitted with vertigo. Initial Morse Fall Scale (MFS) is 55 (High Risk). Nurse applied yellow wristband, raised bed rails, and educated family. At 22:00, patient gets restless; doctor prescribes IV Diazepam injection. Nurse administers drug and returns to station. One hour later, Mrs. M is found fallen in bathroom with temple laceration.\n\nStandard initial fall interventions were done, yet adverse event occurred. What is the critical failure point in nursing care regarding ongoing assessment? What protocol modification is required immediately after central nervous system depressant administration?",
                        questionTh: "นางเอ็มได้รับการประเมินแรกรับว่าเสี่ยงสูง (55 คะแนน) ต่อมาได้รับยา Diazepam IV และต่อมาล้มในห้องน้ำ\n\nจุดบกพร่องสำคัญของการดูแลพยาบาลคืออะไร?",
                        options: [
                            "Kegagalan mengunci roda tempat tidur saat pergantian shift; perawat seharusnya menerapkan physical restraint(ikatan) segera setelah pemberian obat penenang pada lansia.",
                            "Kegagalan dokter mematuhi panduan farmasi; Diazepam adalah kontraindikasi mutlak bagi pasien geriatri dengan skor Morse Fall Scale di atas 45.",
                            "Kegagalan mengulang pengkajian (re-assessment) MFS setiap 1 jam secara rutin sepanjang malam untuk seluruh pasien di bangsal penyakit dalam.",
                            "Kegagalan edukasi keluarga di awal masuk rawat inap; keluarga seharusnya menandatangani surat pernyataan bersedia berjaga non-stop selama 24 jam.",
                            "Kegagalan melakukan pengkajian ulang risiko jatuh pasca-perubahan kondisi fisiologis (terapi sedatif); perawat seharusnya memperketat observasi, melarang mobilisasi mandiri, atau memfasilitasi kebutuhan eliminasi di atas tempat tidur (bedpan/urinal)."
                        ],
                        optionsEn: [
                            "Failure to lock wheels during shift change; nurse should apply physical restraints immediately after sedative.",
                            "Doctor's failure to follow pharmacy guidelines; Diazepam is absolute contraindication for geriatrics with MFS > 45.",
                            "Failure to repeat MFS assessment every 1 hour routinely all night for all ward patients.",
                            "Failure of initial family education; family should sign 24-hour non-stop watch agreement.",
                            "Failure to perform fall risk re-assessment post-physiological change (sedative therapy); nurse should tighten observation, forbid unassisted ambulation, or assist in-bed elimination (bedpan/urinal)."
                        ],
                        optionsTh: [
                            "ลืมล็อกล้อเตียง ควรผูกยึดผู้ป่วยทันทีหลังให้ยา",
                            "แพทย์ไม่ปฏิบัติตามคู่มือยา ยาเป็นข้อห้ามเด็ดขาด",
                            "ไม่ได้ประเมินความเสี่ยงหกล้มซ้ำทุก 1 ชั่วโมงตลอดคืน",
                            "ญาติไม่ได้เซ็นยินยอมเฝ้าตลอด 24 ชั่วโมง",
                            "ไม่ได้ประเมินความเสี่ยงหกล้มซ้ำหลังมีการเปลี่ยนแปลงสภาวะทางสรีรวิทยา (ได้รับยาสงบประสาท) ควรสังเกตใกล้ชิดและห้ามเดินไปห้องน้ำเอง"
                        ],
                        correctAnswer: 4,
                        explanation: "Kegagalan utama terletak pada tidak dilakukannya pengkajian ulang (re-assessment) risiko jatuh setelah ada intervensi medis/terapi sedatif. Perawat seharusnya memperketat observasi dan melarang mobilisasi mandiri ke kamar mandi.",
                        explanationEn: "Primary failure point was not conducting a fall risk re-assessment following physiological changes / sedative administration. Nurse should tighten observation and prohibit unassisted bathroom ambulation.",
                        explanationTh: "ความบกพร่องสำคัญคือไม่ได้ประเมินความเสี่ยงหกล้มซ้ำหลังได้รับยาสงบประสาท พยาบาลควรกวดขันการเฝ้าระวังและห้ามเดินไปห้องน้ำตามลำพัง"
                    }
                ]
            }
        ]
    }
];
