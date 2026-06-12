import { useState } from "react";
import { FaSearch, FaWhatsapp, FaTimes, FaFingerprint } from "react-icons/fa";

const allServices = [
  // Identity Services
  { 
    name: "PAN Card New Application", 
    category: "Identity Services", 
    docs: ["Aadhaar Card", "Photo", "Mobile Number", "Signature"], 
    time: "3 - 7 Days",
    keywords: ["new pan", "income tax id", "permanent account number", "nsdl", "utiits", "pancard"]
  },
  { 
    name: "PAN Card Correction", 
    category: "Identity Services", 
    docs: ["PAN Card", "Aadhaar Card", "Correction Proof", "Mobile Number"], 
    time: "3 - 7 Days",
    keywords: ["pan edit", "change name pan", "pan correction", "update pan", "pan card repair"]
  },
  { 
    name: "PAN Card Reprint", 
    category: "Identity Services", 
    docs: ["PAN Number", "Aadhaar Card", "Mobile Number"], 
    time: "3 - 7 Days",
    keywords: ["lost pan", "duplicate pan", "pan print", "replace pan card"]
  },
  { 
    name: "e-PAN Download", 
    category: "Identity Services", 
    docs: ["PAN Number", "Aadhaar Number", "Mobile Number"], 
    time: "Same Day",
    keywords: ["online pan copy", "pdf pan", "download pan card", "instant pan"]
  },
  { 
    name: "Aadhaar Update", 
    category: "Identity Services", 
    docs: ["Aadhaar Number", "Mobile Number", "Proof Document"], 
    time: "Same Day / 1 - 3 Days", 
    biometric: true,
    keywords: ["uidai", "change address", "change mobile number", "name correction", "biometric update", "fingerprint update", "photo change", "dob update", "aadhar"]
  },
  { 
    name: "Aadhaar Print", 
    category: "Identity Services", 
    docs: ["Aadhaar Number", "Mobile Number"], 
    time: "Same Day",
    keywords: ["download aadhar", "uidai print", "aadhar copy", "get aadhar pdf"]
  },
  { 
    name: "Aadhaar PVC Card", 
    category: "Identity Services", 
    docs: ["Aadhaar Number", "Mobile Number"], 
    time: "5 - 10 Days",
    keywords: ["plastic aadhar", "pvc card print", "smart card aadhar", "original plastic card"]
  },
  { 
    name: "Voter ID Registration", 
    category: "Identity Services", 
    docs: ["Aadhaar Card", "Address Proof", "Photo", "Mobile Number"], 
    time: "Depends on Verification",
    keywords: ["new voter card", "nvsp", "election card", "voter id apply", "vote id", "voter list registration"]
  },
  { 
    name: "Voter ID Correction", 
    category: "Identity Services", 
    docs: ["Voter ID", "Correction Proof", "Aadhaar Card"], 
    time: "Depends on Verification",
    keywords: ["voter change address", "voter name edit", "voter card correction", "election card update"]
  },
  { 
    name: "Passport Application", 
    category: "Identity Services", 
    docs: ["Aadhaar Card", "Address Proof", "SSLC Certificate", "Photo"], 
    time: "7 - 15 Days",
    keywords: ["new passport", "fresh passport", "passport seva", "travel document", "apply passport"]
  },
  { 
    name: "Passport Renewal", 
    category: "Identity Services", 
    docs: ["Old Passport", "Aadhaar Card", "Address Proof", "Photo"], 
    time: "7 - 15 Days",
    keywords: ["passport expiry", "renew passport", "reissue passport", "old passport update"]
  },

  // Certificates
  { 
    name: "Birth Certificate", 
    category: "Certificate Services", 
    docs: ["Hospital Record", "Parent Aadhaar", "Mobile Number"], 
    time: "3 - 7 Days",
    keywords: ["newborn registration", "birth registration", "birth proof", "child birth certificate"]
  },
  { 
    name: "Death Certificate", 
    category: "Certificate Services", 
    docs: ["Hospital Document", "Applicant Aadhaar", "Mobile Number"], 
    time: "3 - 7 Days",
    keywords: ["death registration", "death proof", "mortality certificate"]
  },
  { 
    name: "Income Certificate", 
    category: "Certificate Services", 
    docs: ["Aadhaar Card", "Ration Card", "Income Proof"], 
    time: "3 - 5 Days",
    keywords: ["annual income", "income proof", "revenue certificate", "scholarship income certificate"]
  },
  { 
    name: "Caste Certificate", 
    category: "Certificate Services", 
    docs: ["Aadhaar Card", "Ration Card", "Community Proof"], 
    time: "3 - 7 Days",
    keywords: ["sc st certificate", "obc certificate", "caste proof", "reservation certificate"]
  },
  { 
    name: "Community Certificate", 
    category: "Certificate Services", 
    docs: ["Aadhaar Card", "Ration Card", "Community Proof"], 
    time: "3 - 7 Days",
    keywords: ["religion certificate", "community proof", "minority certificate"]
  },
  { 
    name: "Domicile Certificate", 
    category: "Certificate Services", 
    docs: ["Aadhaar Card", "Address Proof", "Ration Card"], 
    time: "3 - 7 Days",
    keywords: ["state domicile", "native state proof", "prc", "permanent residence card"]
  },
  { 
    name: "Residence Certificate", 
    category: "Certificate Services", 
    docs: ["Aadhaar Card", "Address Proof", "Ration Card"], 
    time: "3 - 7 Days",
    keywords: ["address certificate", "local resident proof", "stay certificate"]
  },
  { 
    name: "Marriage Certificate", 
    category: "Certificate Services", 
    docs: ["Bride & Groom Aadhaar", "Marriage Proof", "Photo"], 
    time: "5 - 10 Days",
    keywords: ["marriage registration", "wedding certificate", "marriage proof registration"]
  },
  { 
    name: "Non-Creamy Layer Certificate", 
    category: "Certificate Services", 
    docs: ["Aadhaar Card", "Income Certificate", "Community Proof"], 
    time: "5 - 10 Days",
    keywords: ["ncl certificate", "obc reservation", "central government job certificate", "non creamy layer"]
  },
  { 
    name: "Disability Certificate", 
    category: "Certificate Services", 
    docs: ["Aadhaar Card", "Medical Documents", "Photo"], 
    time: "Depends on Verification",
    keywords: ["pwd certificate", "handicapped certificate", "medical board handicap card", "udid card"]
  },
  { 
    name: "Legal Heir Certificate", 
    category: "Certificate Services", 
    docs: ["Death Certificate", "Aadhaar Card of all heirs", "Ration Card", "Relationship Proof"], 
    time: "Depends on Verification",
    keywords: ["succession certificate", "varisu certificate", "next of kin", "legal heirs properties inherited"]
  },

  // Vehicle & RTO Services
  { 
    name: "Learner's License", 
    category: "Vehicle & RTO Services", 
    docs: ["Aadhaar Card", "Age Proof", "Photo"], 
    time: "7 - 15 Days",
    keywords: ["llr", "learning license", "driving test trial", "rto learner card", "sarathi"]
  },
  { 
    name: "Driving License New", 
    category: "Vehicle & RTO Services", 
    docs: ["Learner's License", "Aadhaar Card", "Photo"], 
    time: "7 - 15 Days",
    keywords: ["permanent dl", "new driving license", "rto license test", "car bike license"]
  },
  { 
    name: "Driving License Renewal", 
    category: "Vehicle & RTO Services", 
    docs: ["Old Driving License", "Aadhaar Card", "Medical Certificate if needed"], 
    time: "7 - 15 Days",
    keywords: ["dl renewal", "expired license renewal", "rto license extension"]
  },
  { 
    name: "Duplicate Driving License", 
    category: "Vehicle & RTO Services", 
    docs: ["Driving License Number", "Aadhaar Card", "Police Complaint if needed"], 
    time: "7 - 15 Days",
    keywords: ["lost dl", "stolen license replacement", "duplicate dl print"]
  },
  { 
    name: "RC Transfer", 
    category: "Vehicle & RTO Services", 
    docs: ["RC Book", "Insurance", "Pollution Certificate", "Buyer & Seller ID"], 
    time: "7 - 15 Days",
    keywords: ["vehicle ownership transfer", "rc ownership change", "second hand bike car sale", "vahan transfer"]
  },
  { 
    name: "Vehicle Tax Payment", 
    category: "Vehicle & RTO Services", 
    docs: ["Vehicle Number", "RC Details"], 
    time: "Same Day",
    keywords: ["rto road tax", "vahan tax online", "commercial vehicle tax payment"]
  },
  { 
    name: "Challan Payment", 
    category: "Vehicle & RTO Services", 
    docs: ["Vehicle Number", "Challan Number"], 
    time: "Same Day",
    keywords: ["traffic fine payment", "police check fine", "speed camera challan penalty"]
  },

  // Banking Services
  { 
    name: "AEPS Cash Withdrawal", 
    category: "Banking Services", 
    docs: ["Aadhaar Number", "Bank Name", "Fingerprint"], 
    time: "Same Day", 
    biometric: true,
    keywords: ["aadhaar atm", "fingerprint money withdrawal", "cash out biometric", "link bank money", "aeps cash"]
  },
  { 
    name: "AEPS Balance Enquiry", 
    category: "Banking Services", 
    docs: ["Aadhaar Number", "Bank Name", "Fingerprint"], 
    time: "Same Day", 
    biometric: true,
    keywords: ["check bank balance aadhar", "biometric balance inquiry", "fingerprint balance check"]
  },
  { 
    name: "Mini Statement", 
    category: "Banking Services", 
    docs: ["Aadhaar Number", "Bank Name", "Fingerprint"], 
    time: "Same Day", 
    biometric: true,
    keywords: ["last 5 transactions bank", "fingerprint passbook print", "bank summary aadhar"]
  },
  { 
    name: "Money Transfer", 
    category: "Banking Services", 
    docs: ["Sender Mobile Number", "Receiver Bank Details"], 
    time: "Same Day",
    keywords: ["dmt", "domestic money transfer", "send cash to bank account", "neft imps transfer"]
  },
  { 
    name: "Account Opening Assistance", 
    category: "Banking Services", 
    docs: ["Aadhaar Card", "PAN Card", "Photo", "Mobile Number"], 
    time: "Same Day / Bank Process",
    keywords: ["new bank account", "savings account open", "zero balance account", "open bank profile"]
  },
  { 
    name: "Pension Services", 
    category: "Banking Services", 
    docs: ["Aadhaar Card", "Bank Passbook", "Pension Details"], 
    time: "Depends on Service",
    keywords: ["epfo status", "provident fund assistance", "pension account updates"]
  },

  // Insurance Services
  { 
    name: "Life Insurance", 
    category: "Insurance Services", 
    docs: ["Aadhaar Card", "PAN Card", "Nominee Details"], 
    time: "Same Day / 1 - 2 Days",
    keywords: ["lic premium payment", "term insurance policy", "life cover protection"]
  },
  { 
    name: "Health Insurance", 
    category: "Insurance Services", 
    docs: ["Aadhaar Card", "PAN Card", "Health Details"], 
    time: "Same Day / 1 - 2 Days",
    keywords: ["mediclaim policy", "medical insurance plan", "hospital bill insurance"]
  },
  { 
    name: "Vehicle Insurance", 
    category: "Insurance Services", 
    docs: ["RC Book", "Previous Insurance", "Aadhaar Card"], 
    time: "Same Day",
    keywords: ["motor third party policy", "comprehensive vehicle insurance", "vahan renewal policy"]
  },
  { 
    name: "Bike Insurance", 
    category: "Insurance Services", 
    docs: ["RC Book", "Previous Insurance", "Mobile Number"], 
    time: "Same Day",
    keywords: ["two wheeler insurance policy", "scooter insurance renewal", "bike policy fast"]
  },
  { 
    name: "Car Insurance", 
    category: "Insurance Services", 
    docs: ["RC Book", "Previous Insurance", "Mobile Number"], 
    time: "Same Day",
    keywords: ["four wheeler policy", "car comprehensive policy", "auto insurance premium"]
  },
  { 
    name: "Personal Accident Insurance", 
    category: "Insurance Services", 
    docs: ["Aadhaar Card", "PAN Card", "Nominee Details"], 
    time: "Same Day",
    keywords: ["accident disability cover", "injury payout policy", "personal safety shield"]
  },
  { 
    name: "Travel Insurance", 
    category: "Insurance Services", 
    docs: ["Aadhaar Card", "Travel Details", "Mobile Number"], 
    time: "Same Day",
    keywords: ["flight delay cover", "international medical travel policy", "foreign trip insurance"]
  },

  // Utility Bill Services
  { 
    name: "Electricity Bill Payment", 
    category: "Utility Bill Services", 
    docs: ["Consumer Number", "Mobile Number"], 
    time: "Same Day",
    keywords: ["power bill online", "bbps electricity bill payment", "light bill payment"]
  },
  { 
    name: "Water Bill Payment", 
    category: "Utility Bill Services", 
    docs: ["Consumer Number", "Mobile Number"], 
    time: "Same Day",
    keywords: ["water authority payment", "drinking water pipeline bill", "municipal water bill"]
  },
  { 
    name: "Mobile Recharge", 
    category: "Utility Bill Services", 
    docs: ["Mobile Number", "Operator"], 
    time: "Same Day",
    keywords: ["jio airtel vi recharge", "prepaid mobile topup", "data pack activation"]
  },
  { 
    name: "DTH Recharge", 
    category: "Utility Bill Services", 
    docs: ["Customer ID", "Operator"], 
    time: "Same Day",
    keywords: ["tata play d2h sun direct dish tv recharge", "cable television connection balance"]
  },
  { 
    name: "Broadband Recharge", 
    category: "Utility Bill Services", 
    docs: ["Customer ID / Mobile Number"], 
    time: "Same Day",
    keywords: ["fiber internet bill payment", "bsnl airtel optical network wifi recharge"]
  },
  { 
    name: "FASTag Recharge", 
    category: "Utility Bill Services", 
    docs: ["Vehicle Number", "Mobile Number"], 
    time: "Same Day",
    keywords: ["toll plaza tag balance", "car fastag wallet reload", "nhai toll payment"]
  },

  // Education Services
  { 
    name: "Scholarship Application", 
    category: "Education Services", 
    docs: ["Aadhaar Card", "Income Certificate", "Bank Passbook", "Mark List"], 
    time: "Depends on Scheme",
    keywords: ["student fee concession", "nsp portal registration", "post matric scholarship registration", "e-grantz"]
  },
  { 
    name: "University Admission", 
    category: "Education Services", 
    docs: ["SSLC / Plus Two Certificate", "Aadhaar Card", "Photo"], 
    time: "Depends on University",
    keywords: ["college application processing", "ug pg degree enrollment registration", "allotment check"]
  },
  { 
    name: "Exam Registration", 
    category: "Education Services", 
    docs: ["Student ID", "Aadhaar Card", "Photo"], 
    time: "Depends on Exam",
    keywords: ["semester exam fee payment", "board exam online entry form", "hall ticket download"]
  },
  { 
    name: "Certificate Verification", 
    category: "Education Services", 
    docs: ["Certificate Copy", "ID Proof", "Mobile Number"], 
    time: "Depends on Institution",
    keywords: ["genuine certificate status", "university degree verification marklist validation"]
  },
  { 
    name: "Student Loan Assistance", 
    category: "Education Services", 
    docs: ["Admission Proof", "Income Certificate", "Bank Details"], 
    time: "Depends on Bank",
    keywords: ["vidyalakshmi portal registration", "higher studies education loan", "college funding help"]
  },

  // Government Services
  { 
    name: "Ration Card New", 
    category: "Government Services", 
    docs: ["Aadhaar Card", "Income Details", "Address Proof"], 
    time: "5 - 10 Days",
    keywords: ["new civil supplies card", "bpl apl ration card entry", "food department book apply"]
  },
  { 
    name: "Ration Card Update", 
    category: "Government Services", 
    docs: ["Old Ration Card", "Aadhaar Card", "Correction Details"], 
    time: "5 - 10 Days",
    keywords: ["ration card address change", "surrender certificate ration", "split ration card split"]
  },
  { 
    name: "Ration Card Member Addition", 
    category: "Government Services", 
    docs: ["Ration Card", "Aadhaar Card", "Birth Certificate if child"], 
    time: "5 - 10 Days",
    keywords: ["add child name to ration card", "new family member food book update", "include name"]
  },
  { 
    name: "PM Kisan Registration", 
    category: "Government Services", 
    docs: ["Aadhaar Card", "Land Details", "Bank Passbook", "Mobile Number"], 
    time: "Depends on Verification",
    keywords: ["farmer subsidy cash scheme", "pmkisan e-kyc login", "6000 rupees allowance scheme"]
  },
  { 
    name: "E-Shram Card", 
    category: "Government Services", 
    docs: ["Aadhaar Card", "Mobile Number", "Bank Details"], 
    time: "Same Day",
    keywords: ["unorganized labor card profile", "eshram download registration", "central workforce portal"]
  },
  { 
    name: "Labour Card", 
    category: "Government Services", 
    docs: ["Aadhaar Card", "Photo", "Work Details"], 
    time: "Depends on Verification",
    keywords: ["construction workers welfare card", "labor department board registration", "labor benefits renewal"]
  },
  { 
    name: "Ayushman Bharat", 
    category: "Government Services", 
    docs: ["Aadhaar Card", "Ration Card", "Mobile Number"], 
    time: "Depends on Eligibility",
    keywords: ["pm-jay golden medical health card", "5 lakh free hospital treatment card", "abpmjay card printing"]
  },
  { 
    name: "Old Age Pension", 
    category: "Government Services", 
    docs: ["Aadhaar Card", "Age Proof", "Bank Passbook", "Income Certificate"], 
    time: "Depends on Verification",
    keywords: ["senior citizen financial aid welfare scheme", "vayo pension entry Form", "60 plus age monthly allowance"]
  },
  { 
    name: "Widow Pension", 
    category: "Government Services", 
    docs: ["Aadhaar Card", "Death Certificate", "Bank Passbook"], 
    time: "Depends on Verification",
    keywords: ["destitute single women financial grant", "husband expired relief pension registration"]
  },
  { 
    name: "Disability Pension", 
    category: "Government Services", 
    docs: ["Aadhaar Card", "Disability Certificate", "Bank Passbook"], 
    time: "Depends on Verification",
    keywords: ["physically challenged monthly pension", "handicap financial grant entry form"]
  },
  { 
    name: "Sthree Suraksha Pension", 
    category: "Government Services", 
    docs: ["Aadhaar Card", "Bank Passbook", "Income Certificate", "Mobile Number"], 
    time: "Depends on Verification", 
    keywords: ["women welfare pension", "sthree suraksha scheme register", "female protection allowance"] 
  },
  { 
    name: "Life Certificate (Jeevan Pramaan)", 
    category: "Government Services", 
    docs: ["Aadhaar Card", "Pension Payment Order (PPO) Number", "Bank Passbook", "Mobile Number"], 
    time: "Same Day", 
    biometric: true,
    keywords: ["jeevan pramaan digital service", "pensioners annual muster registration", "biometric life confirmation verification", "retired employee verify"]
  },
  { 
    name: "PM Shram Yogi Maan-dhan (PM-SYM)", 
    category: "Government Services", 
    docs: ["Aadhaar Card", "Savings Bank Passbook Account", "Mobile Number"], 
    time: "Same Day",
    keywords: ["pmsym scheme register", "unorganized informal sector pension program", "monthly voluntary premium retirement fund"]
  },

  // Employment Services
  { 
    name: "Employment Exchange Registration", 
    category: "Employment Services", 
    docs: ["Aadhaar Card", "Qualification Certificate", "Photo"], 
    time: "Same Day",
    keywords: ["government job waiting list registration", "employment card renewal update", "unemployment profile record"]
  },
  { 
    name: "Government Job Application", 
    category: "Employment Services", 
    docs: ["Aadhaar Card", "Qualification Certificate", "Photo"], 
    time: "Same Day",
    keywords: ["ssc upsc banking online forms entry", "central government vacancies jobs apply online"]
  },
  { 
    name: "PSC Application Assistance", 
    category: "Employment Services", 
    docs: ["Aadhaar Card", "Photo", "Qualification Details"], 
    time: "Same Day",
    keywords: ["state public service commission apply online", "psc notification job form submissions"]
  },
  { 
    name: "Resume Preparation", 
    category: "Employment Services", 
    docs: ["Education Details", "Experience Details", "Photo"], 
    time: "Same Day",
    keywords: ["cv formatting resume writing profile draft", "biodata creator job application preparation"]
  },
  { 
    name: "National Career Service Registration", 
    category: "Employment Services", 
    docs: ["Aadhaar Card", "Educational Certificates", "Photo"], 
    time: "Same Day",
    keywords: ["ncs job seeker portal logging", "national employment card generation registration", "central government career portal"]
  },

  // Digital Services
  { 
    name: "Online Form Filling", 
    category: "Digital Services", 
    docs: ["Required Details", "Documents", "Mobile Number"], 
    time: "Same Day",
    keywords: ["internet browsing data entries helper", "csc computerized online submission assistant"]
  },
  { 
    name: "Document Scanning", 
    category: "Digital Services", 
    docs: ["Original Document"], 
    time: "Same Day",
    keywords: ["paper digital scanning converter", "original document image scanner pdf converter"]
  },
  { 
    name: "Printing Services", 
    category: "Digital Services", 
    docs: ["PDF / File"], 
    time: "Same Day",
    keywords: ["color print out monochrome sheet page layout extraction", "laser printed doc shop"]
  },
  { 
    name: "Photocopy Services", 
    category: "Digital Services", 
    docs: ["Original Document"], 
    time: "Same Day",
    keywords: ["xerox copy double sided duplicate print sheets duplication"]
  },
  { 
    name: "Passport Size Photo", 
    category: "Digital Services", 
    docs: ["Customer Photo"], 
    time: "Same Day",
    keywords: ["instant photo prints background editing", "id passport visa sizing photographs booth"]
  },
  { 
    name: "DigiLocker Assistance", 
    category: "Digital Services", 
    docs: ["Aadhaar Card", "Mobile Number"], 
    time: "Same Day",
    keywords: ["digilocker account setup cloud storage profile sync", "fetch digital driving license marksheets"]
  },
  { 
    name: "PDF Conversion", 
    category: "Digital Services", 
    docs: ["Document / Image File"], 
    time: "Same Day",
    keywords: ["jpg to pdf editor documents merging compression word file formatting"]
  },
  { 
    name: "Tele-Law Legal Consultation", 
    category: "Digital Services", 
    docs: ["Aadhaar Card", "Grievance details", "Mobile Number"], 
    time: "Same Day",
    keywords: ["csc tele law advocate interaction", "free e-legal advice videoconference lawyers panel", "dispute legal advisory help"]
  },

  // Travel Services
  { name: "Train Ticket Booking", category: "Travel Services", docs: ["Passenger Name", "Age", "Mobile Number", "ID Proof"], time: "Instant", keywords: ["irctc train ticket booking reservation seats railway reservation chart platform ticket"] },
  { name: "Flight Ticket Booking", category: "Travel Services", docs: ["Passenger Name", "Date of Birth", "Mobile Number", "ID Proof"], time: "Instant", keywords: ["air ticket airfare reservation booking domestic international airplane boarding counter flight tracker"] },
  { name: "Bus Ticket Booking", category: "Travel Services", docs: ["Passenger Name", "Mobile Number"], time: "Instant", keywords: ["ksrtc redbus seat booking long distance private sleepers reservation volvo coach ticket"] },
  { name: "Hotel Booking", category: "Travel Services", docs: ["Name", "Mobile Number", "ID Proof"], time: "Instant", keywords: ["room reservation lodging guest house stays deals spot booking tourism stay booking"] },

  // Health Services
  { name: "ABHA Health Card", category: "Health Services", docs: ["Aadhaar Card", "Mobile Number"], time: "Same Day", keywords: ["ayushman bharat health account number unique identification registration abha card printer digital tracking"] },
  { name: "Hospital Appointment Booking", category: "Health Services", docs: ["Patient Name", "Mobile Number", "Hospital Details"], time: "Same Day", keywords: ["ors outpatient card token medical checkup doctor booking op tracking system registration counter"] },

  // Loan Services
  { name: "Personal Loan Assistance", category: "Loan Services", docs: ["Aadhaar Card", "PAN Card", "Salary Proof", "Bank Statement"], time: "Depends on Bank", keywords: ["unsecured credit fast cash loan processing private expense funding loan application checklist documentation profiles"] },
  { name: "Education Loan Assistance", category: "Loan Services", docs: ["Admission Letter", "Aadhaar Card", "Income Certificate"], time: "Depends on Bank", keywords: ["vidyalakshmi college study loans tuition finance funding schemes track university profile assistance"] },
  { name: "Gold Loan Assistance", category: "Loan Services", docs: ["Aadhaar Card", "Gold Details"], time: "Same Day", keywords: ["gold jewelry lending pawn cash collateral micro finance options spot gold estimate value analysis counter"] },
  { name: "Home Loan Assistance", category: "Loan Services", docs: ["Aadhaar Card", "PAN Card", "Income Proof", "Property Documents"], time: "Depends on Bank", keywords: ["housing property purchasing mortgages flat finance structural plot development banking verification loan application"] },

  // Business Services
  { name: "GST Registration", category: "Business Services", docs: ["PAN Card", "Aadhaar Card", "Business Proof", "Bank Account"], time: "3 - 7 Days", keywords: ["goods and services tax profile setup company state tracking tax invoice number portal registration gst identification"] },
  { name: "GST Filing Assistance", category: "Business Services", docs: ["GST Number", "Sales Details", "Purchase Details"], time: "Same Day", keywords: ["gstr1 tax returns filing compliance gstr3b computational accounting record uploads audit ledger logs balancing"] },
  { name: "UDYAM Registration", category: "Business Services", docs: ["Aadhaar Card", "PAN Card", "Business Details"], time: "Same Day", keywords: ["msme corporate tags industry small scale business certificates udyam registration print card validation parameters"] },
  { name: "MSME Registration", category: "Business Services", docs: ["Aadhaar Card", "PAN Card", "Business Details"], time: "Same Day", keywords: ["micro business registration enterprise validation state corporate startup perks assistance framework verification"] },
  { name: "Food Safety Registration (FSSAI)", category: "Business Services", docs: ["Aadhaar Card", "PAN Card", "Business Details", "Photo"], time: "7 - 15 Days", keywords: ["fssai license catering license food stall permit registration hotel restaurant license bakery inspection pass validation rules"] },

  // Kerala Specific Services
  { name: "Kerala PSC One Time Registration", category: "Kerala Services", docs: ["Aadhaar Card", "Photo", "Qualification Certificates"], time: "Same Day", keywords: ["thulasi profile creation kerala public service commission profile psc registration login generation database creation"] },
  { name: "Kerala PSC Application", category: "Kerala Services", docs: ["PSC Profile", "Photo", "Certificates"], time: "Same Day", keywords: ["apply via thulasi psc job notification form submitting category selection dashboard validation"] },
  { name: "KSEB Bill Payment", category: "Kerala Services", docs: ["Consumer Number"], time: "Instant", keywords: ["kerala state electricity board bill payment power bill deposit section fast electricity checkout options"] },
  { name: "Kerala Water Authority Bill Payment", category: "Kerala Services", docs: ["Consumer Number"], time: "Instant", keywords: ["kwa pipeline billing payment water charge payment direct gateway portal settlement parameters tracking logs"] },
  { name: "Nativity Certificate", category: "Kerala Services", docs: ["Aadhaar Card", "Birth Certificate or School Leaving Certificate", "Land Tax Receipt"], time: "3 - 7 Days", keywords: ["edistrict nativity state origin validation proof keralite localized living status verify track request records"] },
  { name: "One and the Same Certificate", category: "Kerala Services", docs: ["Aadhaar Card", "Documents with different name spellings", "Gazette notification if any"], time: "3 - 7 Days", keywords: ["edistrict revenue asset validation name error mismatch check identity unification proof single identification processing logs"] },
  { name: "KSFE Chitty / Loan Payment", category: "Kerala Services", docs: ["Chitty Chalan / Passbook", "Amount Details"], time: "Instant", keywords: ["ksfe installment payment state chitty chalan checkout collection assistance transaction settlement"] },
  { name: "Subhiksha Keralam / Agriculture Portal Registrations", category: "Kerala Services", docs: ["Aadhaar Card", "Land Details", "Bank details", "Mobile Number"], time: "Same Day", keywords: ["kerala krishi bhawan registration farming subsidy scheme tracking vegetable grower organic data upload track program portal"] },

  // Property Services
  { name: "Land Tax Payment", category: "Property Services", docs: ["Survey Number", "Land Details"], time: "Same Day", keywords: ["pokkuvaravu revenue land tax payment online bhumi nikuthi checking layout tax receipt downloads maps"] },
  { name: "Property Tax Payment", category: "Property Services", docs: ["Property Number"], time: "Same Day", keywords: ["municipal building tax checkout panchayat tax payment building structure property evaluation entry systems"] },
  { name: "Encumbrance Certificate (EC)", category: "Property Services", docs: ["Property Details", "Survey Number"], time: "3 - 7 Days", keywords: ["ec registration checking property liability check land ownership logs link history documentation extract"] },
  { name: "Possession Certificate", category: "Property Services", docs: ["Aadhaar Card", "Property Documents"], time: "3 - 7 Days", keywords: ["revenue possession document proof land holder verification status certified structural clearance plot map logs"] },
  { name: "Panchayat Building Tax (Sanchaya)", category: "Property Services", docs: ["Old Tax Receipt or Building Number", "Owner Details"], time: "Instant", keywords: ["sanchaya portal login building tax receipt property asset tracking local municipality payments clearance certificate log"] },

  // NRI Services
  { name: "Police Clearance Certificate (PCC)", category: "NRI Services", docs: ["Passport", "Aadhaar Card", "Address Proof"], time: "7 - 15 Days", keywords: ["pcc passport seva visa clearance background verification checks job verification foreign immigration clearance logs"] },
  { name: "Certificate Attestation", category: "NRI Services", docs: ["Original Certificate", "Passport Copy"], time: "Depends on Authority", keywords: ["norka attestation mea embassy stamp checks certificates verification degree apostille validation process profiles"] },
  { name: "Visa Application Assistance", category: "NRI Services", docs: ["Passport", "Photo", "Supporting Documents"], time: "Depends on Country", keywords: ["tourist visa stamping document checks dynamic slots arrangement entry forms submittal travel permissions profiling log"] },
  { name: "NORKA ID Registration", category: "NRI Services", docs: ["Passport", "Aadhaar Card", "Photo"], time: "Same Day", keywords: ["norka pravasi registration identity card gulf returnees tracking profile validation rehabilitation scheme register data log"] },
  { name: "KNRK Welfare ID", category: "Welfare Services", docs: ["Aadhaar Card", "Photo", "Mobile Number"], time: "Depends on Verification", keywords: ["knrk welfare board pravasi welfare card subscription payments migrant laborers support portal register entry systems"] },

  // Police Services
  { name: "Accident GD Entry Assistance", category: "Police Services", docs: ["Aadhaar Card", "Accident Details", "Vehicle Details"], time: "Depends on Police Department", keywords: ["gd entry general diary log insurance claim accident report copies police station log submittal dashboard options"] },
  { name: "Lost Certificate Assistance", category: "Police Services", docs: ["Aadhaar Card", "Certificate Details"], time: "Depends on Department", keywords: ["missing items logs template document lost marksheet certificate recovery assistance police portal request validation logs"] },

  // Permission Services
  { name: "Mike Permission", category: "Permission Services", docs: ["Applicant Aadhaar", "Event Details", "Venue Details"], time: "1 - 7 Days", keywords: ["sound system permit speaker license police permission microphone clearance local event rules validation logs"] },
  { name: "Vehicle Mike Permission", category: "Permission Services", docs: ["Applicant Aadhaar", "RC Book", "Insurance"], time: "1 - 7 Days", keywords: ["campaign vehicle mic announcer permission loud speaker installation permissions traffic police compliance tracking"] },
  { name: "Event Permission", category: "Permission Services", docs: ["Applicant Aadhaar", "Event Details"], time: "1 - 7 Days", keywords: ["public gathering clearance stage ground booking permissions festival management authority verification profile records"] },
  { name: "Procession Permission", category: "Permission Services", docs: ["Applicant Aadhaar", "Route Details"], time: "1 - 7 Days", keywords: ["rally tracking route blueprint permit parade coordination traffic redirection police approval forms dashboard"] },
   // NEW LOAN SERVICES
{
  name: "Business Loan Assistance",
  category: "Loan Services",
  docs: ["Aadhaar Card", "PAN Card", "Business Documents", "Bank Statement"],
  time: "Depends on Bank",
  keywords: ["business loan", "msme loan", "working capital loan", "startup loan"]
},
{
  name: "Vehicle Loan Assistance",
  category: "Loan Services",
  docs: ["Aadhaar Card", "PAN Card", "Income Proof"],
  time: "Depends on Bank",
  keywords: ["car loan", "auto loan", "vehicle finance", "four wheeler loan"]
},
{
  name: "Two Wheeler Loan Assistance",
  category: "Loan Services",
  docs: ["Aadhaar Card", "PAN Card", "Income Proof"],
  time: "Depends on Bank",
  keywords: ["bike loan", "scooter loan", "two wheeler finance"]
},
{
  name: "Agriculture Loan Assistance",
  category: "Loan Services",
  docs: ["Aadhaar Card", "Land Documents", "Bank Passbook"],
  time: "Depends on Bank",
  keywords: ["farm loan", "agriculture finance", "kisan loan", "crop loan"]
},
{
  name: "Mudra Loan Assistance",
  category: "Loan Services",
  docs: ["Aadhaar Card", "PAN Card", "Business Details"],
  time: "Depends on Bank",
  keywords: ["mudra loan", "pm mudra", "small business finance"]
},
{
  name: "PMEGP Loan Assistance",
  category: "Loan Services",
  docs: ["Aadhaar Card", "Project Report", "Business Proposal"],
  time: "Depends on Verification",
  keywords: ["pmegp", "employment generation programme", "government business loan"]
},
{
  name: "Loan Project Report Preparation",
  category: "Loan Services",
  docs: ["Business Details", "Project Information"],
  time: "1 - 3 Days",
  keywords: ["loan project", "project report", "bank project", "dpr", "business proposal"]
},
{
  name: "Loan Eligibility Check",
  category: "Loan Services",
  docs: ["Income Proof", "Bank Statement"],
  time: "Same Day",
  keywords: ["loan eligibility", "loan check", "loan approval chance"]
},
{
  name: "Credit Score Guidance",
  category: "Loan Services",
  docs: ["PAN Card", "Mobile Number"],
  time: "Same Day",
  keywords: ["cibil score", "credit score", "loan score"]
},

// BUSINESS SERVICES
{
  name: "Legal Metrology Certificate",
  category: "Business Services",
  docs: ["Business Proof", "Aadhaar Card", "Shop Details"],
  time: "Depends on Department",
  keywords: ["weighing machine license", "legal metrology", "weight and measure certificate"]
},
{
  name: "Pollution Control Board Certificate",
  category: "Business Services",
  docs: ["Business Details", "Location Details"],
  time: "Depends on Department",
  keywords: ["pcb certificate", "pollution board", "consent certificate", "environment clearance"]
},
{
  name: "Income Tax Return (IT Return) Filing",
  category: "Business Services",
  docs: ["PAN Card", "Aadhaar Card", "Income Documents"],
  time: "1 - 3 Days",
  keywords: ["itr filing", "income tax return", "tax filing", "it return"]
},

// EMPLOYMENT SERVICES
{
  name: "RRB Railway Recruitment Application",
  category: "Employment Services",
  docs: ["Aadhaar Card", "Photo", "Qualification Certificates"],
  time: "Same Day",
  keywords: ["rrb", "railway jobs", "railway recruitment", "ntpc", "group d"]
},
{
  name: "Indian Army Recruitment Application",
  category: "Employment Services",
  docs: ["Aadhaar Card", "Photo", "Qualification Certificates"],
  time: "Same Day",
  keywords: ["army bharti", "indian army", "agniveer", "army recruitment"]
},
{
  name: "Competitive Exam Registration",
  category: "Employment Services",
  docs: ["Aadhaar Card", "Photo", "Qualification Certificates"],
  time: "Same Day",
  keywords: [
    "ssc",
    "upsc",
    "bank exam",
    "railway exam",
    "entrance exam",
    "competitive exam registration"
  ]
},

// GOVERNMENT / WELFARE SERVICES
{
  name: "Kudumbashree Loan Application",
  category: "Government Services",
  docs: ["Aadhaar Card", "Bank Passbook", "Group Details"],
  time: "Depends on Verification",
  keywords: ["kudumbashree loan", "kudumbashree finance", "women self help group loan"]
},
{
  name: "KSWDC Loan Application",
  category: "Government Services",
  docs: ["Aadhaar Card", "Income Certificate", "Bank Details"],
  time: "Depends on Verification",
  keywords: ["kswdc loan", "kerala women development corporation", "women loan"]
},

];

function ServiceSearchBar() {
  const [query, setQuery] = useState("");
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices =
    query.trim().length > 0
      ? allServices.filter((service) => {
          const q = query.toLowerCase();
          return (
            service.name.toLowerCase().includes(q) ||
            service.category.toLowerCase().includes(q) ||
            service.keywords?.some((keyword) => keyword.toLowerCase().includes(q))
          );
        })
      : [];

  const popularServices = [
    "PAN Card New Application",
    "Aadhaar Update",
    "Passport Application",
    "Income Certificate",
  ];

  const handlePopularClick = (name) => {
    const service = allServices.find((item) => item.name === name);
    setSelectedService(service);
    setQuery(name);
  };

  return (
    <section className="relative z-30 -mt-8 px-4 sm:px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-[0_15px_45px_rgba(15,23,42,0.15)] border border-slate-100 p-4 sm:p-6">
          
          {/* Search Input wrapper */}
          <div className="relative">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search services like PAN, Aadhaar, Pension..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedService(null);
              }}
              className="w-full h-14 sm:h-16 pl-14 pr-5 rounded-2xl border border-slate-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            {/* Autocomplete Dropdown List */}
            {filteredServices.length > 0 && !selectedService && (
              <div className="absolute left-0 right-0 top-[72px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-[360px] overflow-y-auto">
                {filteredServices.slice(0, 12).map((service, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedService(service);
                      setQuery(service.name);
                    }}
                    className="w-full px-5 py-4 text-left hover:bg-blue-50 flex justify-between items-center border-b last:border-b-0"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-black text-[#07142f]">{service.name}</h4>
                        {service.biometric && (
                          <span className="flex items-center gap-1 bg-amber-50 text-amber-700 text-[10px] font-extrabold px-2 py-0.5 rounded-md border border-amber-200">
                            <FaFingerprint className="text-xs" /> Biometric Required
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500">{service.category}</p>
                    </div>
                    <span className="text-blue-700 font-bold text-sm">View</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Choice Popular Category Chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-sm font-bold text-slate-500 mr-1">Popular:</span>
            {popularServices.map((item) => (
              <button
                key={item}
                onClick={() => handlePopularClick(item)}
                className="bg-blue-50 text-blue-700 px-3 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors hover:bg-blue-100"
              >
                {item}
              </button>
            ))}
          </div>

          {/* UPGRADED CARD COMPONENT: MATCHING IMAGE 1 PERFECTLY */}
          {selectedService && (
            <div className="mt-6 relative overflow-hidden rounded-[32px] border border-blue-100 shadow-xl transition-all duration-300">
              
              {/* Complex Rich Background Matrix Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 pointer-events-none" />
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

              <div className="relative z-10 p-5 sm:p-8">
                
                {/* Dismiss Close Icon Trigger */}
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setQuery("");
                  }}
                  className="absolute top-6 right-6 text-slate-400 hover:text-red-500 p-1.5 hover:bg-red-50 rounded-full transition-colors"
                >
                  <FaTimes className="text-lg" />
                </button>

                {/* Service Tag Badge with subtle profile icon */}
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-xl text-xs font-black tracking-wide uppercase shadow-sm">
                  <svg className="w-3.5 h-3.5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  {selectedService.category}
                </div>

                {/* Main Identity Heading Frame with Right Clipboard Asset */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mt-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#07142f] leading-tight max-w-xl">
                    {selectedService.name}
                  </h3>
                  
                  {/* Right Floating Clipboard Vector Illustration Card */}
                  <div className="hidden md:flex shrink-0 bg-white/90 backdrop-blur-sm border border-blue-100/70 rounded-2xl p-3 shadow-md w-16 h-16 items-center justify-center relative">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>

                {/* Biometric Warning Banner Condition */}
                {selectedService.biometric && (
                  <div className="mt-4 flex items-start gap-3 bg-amber-50 border border-amber-200/80 rounded-2xl p-4 text-amber-900 text-xs sm:text-sm shadow-sm animate-in fade-in duration-150">
                    <FaFingerprint className="text-xl text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-black text-amber-800">Physical Presence Required</span>
                      <p className="text-amber-700/90 mt-0.5 font-medium leading-relaxed">
                        Fingerprint / biometric authentication is mandatory. The customer must visit the CSC center in person.
                      </p>
                    </div>
                  </div>
                )}

                {/* Document Information & Timeline Block Specifications Grid */}
                <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 mt-6 items-start">
                  
                  {/* Left Column Documents Container */}
                  <div>
                    <h4 className="font-black text-[#07142f] mb-3 text-sm uppercase tracking-wider text-slate-500 border-b border-slate-200/50 pb-1 w-fit">
                      Required Documents
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.docs.map((doc, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-3.5 rounded-2xl border border-slate-100 text-slate-700 font-bold text-sm sm:text-base shadow-sm"
                        >
                          <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-sm shadow-green-200">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column Processing Time Box */}
                  <div className="flex flex-col gap-2">
                    <h4 className="font-black text-[#07142f] mb-3 text-sm uppercase tracking-wider text-slate-500 border-b border-slate-200/50 pb-1 w-fit">
                      Processing Time
                    </h4>
                    <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-blue-100 text-blue-700 px-5 py-3.5 rounded-2xl font-black text-xl w-fit shadow-md">
                      <span className="text-xl">⏱</span>
                      {selectedService.time}
                    </div>
                  </div>

                </div>

                {/* CTA Action Button - Placed cleanly at the bottom container level */}
                <a
                  href={`https://wa.me/919188549181?text=Hi, I need help with ${selectedService.name}.${selectedService.biometric ? ' I understand it requires biometric verification.' : ''} Please guide me.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-2xl font-black flex items-center justify-center gap-3 shadow-lg shadow-green-500/20 hover:shadow-green-600/30 transform active:scale-[0.99] transition-all text-base"
                >
                  <FaWhatsapp className="text-xl" />
                  Apply via WhatsApp
                </a>

              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ServiceSearchBar;