

// User signup -> google/email
// Help & Support ->
// Payment ->

// Mobile & Desktop -> Responsive/PWA
// Assest performance -> Images
// No internet support / Caching

// FE -> PWA
// BE -> GET PatientMedicineInfo(patientDetail -> patientId, Date)
// DB ->


// Patient
// Prescription
// Medicine -> MedicineId, Name, StartTime, EndTime, Interval


// getContext -> GET Call -> patient details
// LocalStorage -> caching with expiration

// SSE events -> for notifications

// Scheduler -> recurring job -> patientData + PrescriptionData

// Form Page -> Prescription -> pdf/excel 

// POST API -> postPrescription(base64 prescriptionImage)
// / postPrescription(patientDiagnostic Data)

// base64 prescriptionImage -> image processing -> patientDiagnostic

// PatientMedicineInfo -> List of all the prescriptions

// ConflictService -> Old Prescription meds + new Prescription meds -> comparison ()
// Caching -> meds -> conflicting meds

// If conflict () {return 
// SSE. -> doctor
// HttpStatus -> 200 + info->some conflict}


// getContext -> GET Call -> patient details
// LocalStorage -> caching with expiration -> Prescription
// Medicine -> MedicineId, Name, StartTime, EndTime, Interval

// pushNotification -> vibrate + retrigger every 5 mins till 30 mins
// Prateek Reminder
// -> Take aspirin at 12: 05pm
// Button -> Snooze , Repeat after 5 mins, Taken

// Dismissed in one min and retrigger after 5 mins

// Patient Reminder Dashboard

// List of medicines->

// Name of medicine / prescription/ Number of medicine / Thumbnail / taken button

// Congratulations -> you are done for this time . Next medicine to be taken at evening 6 pm

// Hey seems like

// pateintData {

// patientId: 3,
// patientName: name,
// Addressing: {},
// Prescriptions: [
// {
// prescriptionId: 3,
// prescriptionTitle: header
// medicines: [medicineId: 1,
// medicineName: Aspirin,
// StartTime: ‘’dd-mm-yyyy 
// EndTime:
// Interval: 2D/3H/5M]
// },
// {},
// ]

// }


// HomeComponent -> patientData -> redux/ contextAPI
// ContainerComponent-> patientData.prescription.map(pres => {
// Return MedicineWrapper(pres)
// })
// MedicineWrapper -> pres.medicines.map(med => {
// Return Medicine(mes)
// })
// Medicine ->
// Table->