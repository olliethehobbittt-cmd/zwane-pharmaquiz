const sections = {

fundamentals: {
title:"📚 Fundamentals of Pharmacology",
questions:[]
},

pharmacokinetics:{
title:"📚 Pharmacokinetics",
questions:[]
},

administration:{
title:"📚 Routes of Administration",
questions:[]
},

absorption:{
title:"📚 Absorption",
questions:[]
},

bioavailability:{
title:"📚 Bioavailability",
questions:[]
},

distribution:{
title:"📚 Distribution",
questions:[]
},

elimination:{
title:"📚 Elimination & Metabolism",
questions:[]
},

pharmacodynamics:{
title:"📚 Pharmacodynamics",
questions:[]
},

receptors:{
title:"📚 Receptors & G-Proteins",
questions:[]
},

adrenergics:{
title:"📚 Adrenergics",
questions:[]
},

cholinergics:{
title:"📚 Cholinergics",
questions:[]
}
  
};

  const fundamentals = [

{
question:"What is Pharmacology?",
answers:[
"Study of substances interacting with living systems through chemical processes",
"Study of anatomy",
"Study of nutrition",
"Study of surgery"
],
correct:0,
explanation:"Pharmacology studies substances that interact with living systems through chemical processes."
},

{
question:"What is a drug?",
answers:[
"A nutrient",
"A chemical substance that alters body functions",
"A vitamin",
"A mineral"
],
correct:1,
explanation:"A drug is any chemical substance that alters normal body functions."
}
    ,
{
question:"Pharmacokinetics is best described as:",
answers:[
"What the drug does to the body",
"What the body does to the drug",
"Drug pricing",
"Drug toxicity"
],
correct:1,
explanation:"Pharmacokinetics studies what the body does to a drug through ADME processes."
},

{
question:"Pharmacodynamics is best described as:",
answers:[
"What the body does to the drug",
"What the drug does to the body",
"Drug manufacturing",
"Drug storage"
],
correct:1,
explanation:"Pharmacodynamics focuses on drug mechanisms and effects on the body."
},

{
question:"Which is a natural drug?",
answers:[
"Aspirin",
"Paracetamol",
"Morphine",
"Ampicillin"
],
correct:2,
explanation:"Morphine is extracted from living organisms and is classified as a natural drug."
},

{
question:"Penicillin is classified as a:",
answers:[
"Natural drug",
"Synthetic drug",
"Vitamin",
"Hormone"
],
correct:0,
explanation:"Penicillin is obtained from living organisms."
},

{
question:"Ampicillin is classified as a:",
answers:[
"Natural drug",
"Semi-synthetic drug",
"Synthetic drug",
"Biologic"
],
correct:1,
explanation:"Ampicillin is derived from and modified from a natural drug."
},

{
question:"Aspirin is classified as a:",
answers:[
"Natural drug",
"Semi-synthetic drug",
"Synthetic drug",
"Protein drug"
],
correct:2,
explanation:"Aspirin is derived from non-living sources and is synthetic."
},

{
question:"Paracetamol is classified as a:",
answers:[
"Natural drug",
"Semi-synthetic drug",
"Synthetic drug",
"Herbal drug"
],
correct:2,
explanation:"Paracetamol is a synthetic drug."
},

{
question:"An agonist binds a receptor and:",
answers:[
"Blocks a response",
"Produces a response",
"Destroys the receptor",
"Removes the receptor"
],
correct:1,
explanation:"Agonists activate receptors and produce biological responses."
},

{
question:"An antagonist binds a receptor and:",
answers:[
"Activates it",
"Increases response",
"Blocks response",
"Creates hormones"
],
correct:2,
explanation:"Antagonists prevent receptor activation."
},

{
question:"Pharmacotherapeutics is:",
answers:[
"Drug treatment of disease",
"Drug toxicity study",
"Drug manufacturing",
"Drug marketing"
],
correct:0,
explanation:"Pharmacotherapeutics focuses on using drugs to treat disease."
},

{
question:"Pharmacogenetics studies:",
answers:[
"Drug costs",
"Genetic variations affecting drug response",
"Drug storage",
"Drug interactions only"
],
correct:1,
explanation:"Genetic differences influence medication response."
},

{
question:"Pharmacoeconomics studies:",
answers:[
"Drug color",
"Drug effectiveness only",
"Cost-effectiveness of drugs",
"Drug packaging"
],
correct:2,
explanation:"Pharmacoeconomics evaluates value relative to cost."
},

{
question:"Pharmacoepidemiology studies:",
answers:[
"Drug effects in populations",
"Drug names",
"Drug manufacturing",
"Drug metabolism"
],
correct:0,
explanation:"It examines drug use and effects in large populations."
},

{
question:"Toxicology focuses on:",
answers:[
"Therapeutic effects",
"Adverse and toxic effects",
"Drug pricing",
"Drug storage"
],
correct:1,
explanation:"Toxicology studies harmful effects of drugs and chemicals."
},

{
question:"Posology is the study of:",
answers:[
"Doses",
"Prices",
"Storage",
"Interactions"
],
correct:0,
explanation:"Posology deals with dosage determination."
},

{
question:"Pharmacy involves:",
answers:[
"Manufacture, preparation and dispensing",
"Only research",
"Only diagnosis",
"Only surgery"
],
correct:0,
explanation:"Pharmacy covers preparation and dispensing of medications."
},

{
question:"Chemotherapy refers to drugs that:",
answers:[
"Only treat cancer",
"Kill foreign or abnormal cells",
"Treat hypertension",
"Treat diabetes only"
],
correct:0,
explanation:"In pharmacology notes, chemotherapy refers to drugs targeting foreign or abnormal cells."
},

{
question:"Which statement is correct?",
answers:[
"Pharmacokinetics = Mechanism of Action",
"Pharmacodynamics = ADME",
"Pharmacokinetics = ADME",
"Pharmacodynamics = Drug storage"
],
correct:2,
explanation:"ADME is the core concept of pharmacokinetics."
}


];

const pharmacokinetics = [

{
question:"What does Pharmacokinetics study?",
answers:[
"What the body does to the drug",
"What the drug does to the body",
"Drug costs",
"Drug names"
],
correct:0,
explanation:"Pharmacokinetics studies what the body does to the drug, including absorption, distribution, metabolism, and excretion."
},

{
question:"LADME stands for:",
answers:[
"Liberation, Absorption, Distribution, Metabolism, Excretion",
"Liver, Absorption, Drug, Metabolism, Elimination",
"Loading, Administration, Distribution, Metabolism, Excretion",
"None of the above"
],
correct:0,
explanation:"LADME describes the journey of a drug through the body."
},

{
question:"Which route has 100% bioavailability?",
answers:[
"Oral",
"Subcutaneous",
"Rectal",
"Intravenous"
],
correct:3,
explanation:"Intravenous administration delivers the drug directly into the bloodstream."
},

{
question:"First-pass metabolism primarily occurs in the:",
answers:[
"Heart",
"Liver",
"Kidney",
"Lungs"
],
correct:1,
explanation:"The liver can metabolize drugs before they reach systemic circulation."
},

{
question:"Drug elimination consists of:",
answers:[
"Absorption and distribution",
"Distribution and storage",
"Metabolism and excretion",
"Absorption and metabolism"
],
correct:2,
explanation:"Drug elimination occurs through metabolism and excretion."
},
  
  {
question:"What does Pharmacokinetics study?",
answers:[
"What the body does to the drug",
"What the drug does to the body",
"Drug costs",
"Drug names"
],
correct:0,
explanation:"Pharmacokinetics studies what the body does to a drug."
},

{
question:"LADME stands for:",
answers:[
"Liberation, Absorption, Distribution, Metabolism, Excretion",
"Liver, Absorption, Drug, Metabolism, Elimination",
"Loading, Administration, Distribution, Metabolism, Excretion",
"None of the above"
],
correct:0,
explanation:"LADME describes the journey of a drug through the body."
},

{
question:"The 'L' in LADME stands for:",
answers:[
"Liver",
"Liberation",
"Loading",
"Lipophilic"
],
correct:1,
explanation:"Liberation is the release of a drug from a dosage form."
},

{
question:"The 'A' in LADME stands for:",
answers:[
"Activation",
"Absorption",
"Administration",
"Affinity"
],
correct:1,
explanation:"Absorption is the movement of a drug into the bloodstream."
},

{
question:"The 'D' in LADME stands for:",
answers:[
"Distribution",
"Diffusion",
"Degradation",
"Dose"
],
correct:0,
explanation:"Distribution is the movement of drug to tissues."
},

{
question:"The 'M' in LADME stands for:",
answers:[
"Mechanism",
"Metabolism",
"Movement",
"Membrane transport"
],
correct:1,
explanation:"Metabolism chemically alters drugs."
},

{
question:"The 'E' in LADME stands for:",
answers:[
"Excretion",
"Effect",
"Enzyme activity",
"Equilibrium"
],
correct:0,
explanation:"Excretion removes drugs from the body."
},

{
question:"The first step in liberation is:",
answers:[
"Dissolution",
"Disintegration",
"Absorption",
"Distribution"
],
correct:1,
explanation:"Tablets must first disintegrate."
},

{
question:"After disintegration comes:",
answers:[
"Distribution",
"Dissolution",
"Excretion",
"Metabolism"
],
correct:1,
explanation:"Particles dissolve before absorption."
},

{
question:"Drug absorption occurs when:",
answers:[
"Drug enters bloodstream",
"Drug enters liver",
"Drug enters kidney",
"Drug enters urine"
],
correct:0,
explanation:"Absorption is entry into systemic circulation."
},

{
question:"Which route has 100% bioavailability?",
answers:[
"Oral",
"Rectal",
"Intravenous",
"Subcutaneous"
],
correct:2,
explanation:"IV administration bypasses absorption."
},

{
question:"Which route has the fastest onset?",
answers:[
"Oral",
"Rectal",
"Intravenous",
"Topical"
],
correct:2,
explanation:"IV delivers drug directly into circulation."
},

{
question:"IV administration is affected by first-pass metabolism.",
answers:[
"True",
"False",
"Sometimes",
"Only in children"
],
correct:1,
explanation:"IV bypasses the liver initially."
},

{
question:"Extravascular routes include:",
answers:[
"IV only",
"All routes except IV",
"Only oral",
"Only IM"
],
correct:1,
explanation:"Extravascular routes require absorption."
},

{
question:"Oral drugs are commonly affected by:",
answers:[
"First-pass metabolism",
"Pulmonary metabolism",
"Skin metabolism",
"Muscle metabolism"
],
correct:0,
explanation:"Many oral drugs undergo first-pass hepatic metabolism."
},

{
question:"LUNA stands for:",
answers:[
"Lipophilic, Unionized, Nonpolar, Absorbed rapidly",
"Liver, Uptake, Nonpolar, Active",
"Lipophilic, Unstable, Neutral, Active",
"None"
],
correct:0,
explanation:"LUNA describes characteristics favoring absorption."
},

{
question:"Which characteristic improves absorption?",
answers:[
"Ionized",
"Lipophilic",
"Highly charged",
"Large protein bound"
],
correct:1,
explanation:"Lipophilic drugs cross membranes more easily."
},

{
question:"Unionized drugs generally:",
answers:[
"Cross membranes better",
"Cross membranes worse",
"Cannot be absorbed",
"Are inactive"
],
correct:0,
explanation:"Unionized drugs diffuse across membranes more readily."
},

{
question:"Acidic drugs are best absorbed in the:",
answers:[
"Stomach",
"Colon",
"Kidney",
"Liver"
],
correct:0,
explanation:"Acidic environment keeps acidic drugs unionized."
},

{
question:"Basic drugs are primarily absorbed in the:",
answers:[
"Stomach",
"Small intestine",
"Esophagus",
"Rectum"
],
correct:1,
explanation:"The higher pH favors absorption of basic drugs."
},

{
question:"The safest and most common route is:",
answers:[
"IV",
"IM",
"Oral",
"SC"
],
correct:2,
explanation:"Oral administration is safest and most convenient."
},

{
question:"Sublingual administration:",
answers:[
"Under the tongue",
"Into muscle",
"Into skin",
"Into vein"
],
correct:0,
explanation:"Sublingual drugs are placed under the tongue."
},

{
question:"Sublingual administration bypasses:",
answers:[
"Kidneys",
"First-pass metabolism",
"Lungs",
"Skin"
],
correct:1,
explanation:"Sublingual drugs enter circulation directly."
},

{
question:"Rectal administration is useful when:",
answers:[
"Patient is vomiting",
"Patient is healthy",
"Patient is exercising",
"Patient is sleeping"
],
correct:0,
explanation:"Rectal administration is useful when oral administration is difficult."
},

{
question:"Drug elimination equals:",
answers:[
"Absorption + Distribution",
"Distribution + Storage",
"Metabolism + Excretion",
"Absorption + Metabolism"
],
correct:2,
explanation:"Elimination occurs through metabolism and excretion."
},

{
question:"Biotransformation is another term for:",
answers:[
"Absorption",
"Distribution",
"Metabolism",
"Excretion"
],
correct:2,
explanation:"Biotransformation refers to drug metabolism."
},

{
question:"Metabolism generally converts drugs into:",
answers:[
"Less polar compounds",
"More polar compounds",
"Inactive proteins",
"Hormones"
],
correct:1,
explanation:"Polar compounds are easier to excrete."
},

{
question:"A prodrug is:",
answers:[
"Active before metabolism",
"Inactive until metabolized",
"Always toxic",
"Always excreted unchanged"
],
correct:1,
explanation:"Prodrugs require metabolism for activation."
},

{
question:"Enalapril is converted into:",
answers:[
"Aspirin",
"Enalaprilat",
"Metoprolol",
"Atropine"
],
correct:1,
explanation:"Enalapril is a classic prodrug."
},

{
question:"Most drugs follow:",
answers:[
"Zero-order kinetics",
"First-order kinetics",
"Nonlinear elimination",
"No elimination"
],
correct:1,
explanation:"Most therapeutic drugs follow first-order kinetics."
},

{
question:"In first-order kinetics:",
answers:[
"Constant amount eliminated",
"Constant percentage eliminated",
"No elimination",
"Random elimination"
],
correct:1,
explanation:"A constant fraction is removed per unit time."
},

{
question:"Which drugs follow zero-order kinetics?",
answers:[
"APE",
"NSAIDs",
"Statins",
"Antibiotics"
],
correct:0,
explanation:"APE = Aspirin, Phenytoin, Ethanol."
},

{
question:"The 'P' in APE stands for:",
answers:[
"Pilocarpine",
"Phenylephrine",
"Phenytoin",
"Penicillin"
],
correct:2,
explanation:"Phenytoin follows zero-order kinetics."
},

{
question:"Half-life is the time needed to:",
answers:[
"Double drug concentration",
"Reduce drug amount by 50%",
"Stop drug action",
"Reach toxicity"
],
correct:1,
explanation:"Half-life is the time for a 50% reduction."
},

{
question:"Steady state is usually reached after:",
answers:[
"1 half-life",
"2 half-lives",
"4-5 half-lives",
"10 half-lives"
],
correct:2,
explanation:"A high-yield exam fact."
},

{
question:"Long half-life drugs tend to:",
answers:[
"Accumulate more easily",
"Disappear faster",
"Never reach steady state",
"Be inactive"
],
correct:0,
explanation:"Long half-life increases accumulation risk."
},

{
question:"A loading dose is:",
answers:[
"A maintenance dose",
"A large initial dose",
"A toxic dose",
"A pediatric dose"
],
correct:1,
explanation:"Loading doses rapidly achieve therapeutic levels."
},

{
question:"A maintenance dose is used to:",
answers:[
"Start therapy",
"Maintain steady state",
"Cause toxicity",
"Stop metabolism"
],
correct:1,
explanation:"Maintenance doses keep drug levels therapeutic."
}
  ];

  const pharmacodynamics = [
{
question:"Pharmacodynamics is the study of:",
answers:[
"What the body does to the drug",
"What the drug does to the body",
"Drug metabolism",
"Drug excretion"
],
correct:1,
explanation:"Pharmacodynamics studies the effects of drugs on the body."
},

{
question:"A receptor is:",
answers:[
"A drug",
"A protein that binds a drug",
"A hormone",
"A metabolite"
],
correct:1,
explanation:"Most receptors are proteins that interact with drugs."
},

{
question:"Drug action begins when a drug:",
answers:[
"Is excreted",
"Binds to a receptor",
"Enters urine",
"Is metabolized"
],
correct:1,
explanation:"Drug effects usually begin after receptor binding."
},

{
question:"Affinity refers to:",
answers:[
"Ability to bind a receptor",
"Ability to produce an effect",
"Drug elimination",
"Drug absorption"
],
correct:0,
explanation:"Affinity describes how strongly a drug binds to its receptor."
},

{
question:"Efficacy refers to:",
answers:[
"Binding strength",
"Ability to produce a response",
"Drug metabolism",
"Drug distribution"
],
correct:1,
explanation:"Efficacy is the ability of a drug to activate a receptor and cause an effect."
},

{
question:"A full agonist has:",
answers:[
"Maximum efficacy",
"No efficacy",
"Partial efficacy",
"Negative efficacy"
],
correct:0,
explanation:"Full agonists produce the maximum possible response."
},

{
question:"A partial agonist:",
answers:[
"Produces maximal effect",
"Produces less than maximal effect",
"Blocks receptors completely",
"Has no affinity"
],
correct:1,
explanation:"Partial agonists activate receptors but not to the same extent as full agonists."
},

{
question:"An antagonist has:",
answers:[
"Efficacy only",
"Affinity but no efficacy",
"No affinity",
"Maximum efficacy"
],
correct:1,
explanation:"Antagonists bind receptors but do not activate them."
},

{
question:"Competitive antagonists:",
answers:[
"Bind reversibly",
"Destroy receptors",
"Activate receptors",
"Have efficacy"
],
correct:0,
explanation:"Competitive antagonists compete with agonists for receptor binding."
},

{
question:"Noncompetitive antagonists:",
answers:[
"Cannot be overcome by increasing agonist dose",
"Are always reversible",
"Increase efficacy",
"Activate receptors"
],
correct:0,
explanation:"Noncompetitive antagonists reduce receptor response regardless of agonist concentration."
},

{
question:"Potency refers to:",
answers:[
"Maximum effect",
"Dose required to produce effect",
"Drug safety",
"Drug metabolism"
],
correct:1,
explanation:"More potent drugs require lower doses to produce the same effect."
},

{
question:"A more potent drug requires:",
answers:[
"Higher dose",
"Lower dose",
"Same dose",
"No dose"
],
correct:1,
explanation:"Higher potency means less drug is needed."
},

{
question:"Potency is determined from:",
answers:[
"ED50",
"LD50",
"Toxicity",
"Clearance"
],
correct:0,
explanation:"ED50 is commonly used to compare drug potency."
},

{
question:"ED50 means:",
answers:[
"Dose producing effect in 50% of subjects",
"Fatal dose in 50%",
"Toxic dose in 50%",
"Half-life"
],
correct:0,
explanation:"ED50 is the median effective dose."
},

{
question:"LD50 means:",
answers:[
"Median lethal dose",
"Median effective dose",
"Median therapeutic dose",
"Maintenance dose"
],
correct:0,
explanation:"LD50 is the dose that kills 50% of test subjects."
},

{
question:"Therapeutic Index equals:",
answers:[
"LD50 / ED50",
"ED50 / LD50",
"Half-life / ED50",
"Clearance / LD50"
],
correct:0,
explanation:"Therapeutic Index is a measure of drug safety."
},

{
question:"A higher therapeutic index indicates:",
answers:[
"Less safety",
"Greater safety",
"More toxicity",
"Poor efficacy"
],
correct:1,
explanation:"Higher TI generally means a safer drug."
},

{
question:"Dose-response curves show:",
answers:[
"Relationship between dose and effect",
"Drug cost",
"Drug storage",
"Drug metabolism"
],
correct:0,
explanation:"Dose-response curves help visualize efficacy and potency."
},

{
question:"Graded dose-response curves are used to:",
answers:[
"Measure response magnitude",
"Measure mortality only",
"Measure absorption",
"Measure metabolism"
],
correct:0,
explanation:"Graded curves evaluate response intensity."
},

{
question:"Quantal dose-response curves are used to:",
answers:[
"Measure population response",
"Measure receptor number",
"Measure metabolism",
"Measure absorption"
],
correct:0,
explanation:"Quantal curves show all-or-none responses in populations."
},

{
question:"Receptor regulation may occur through:",
answers:[
"Up-regulation",
"Down-regulation",
"Both",
"Neither"
],
correct:2,
explanation:"Cells may increase or decrease receptor numbers."
},

{
question:"Up-regulation means:",
answers:[
"Increased receptor number",
"Decreased receptor number",
"Receptor destruction",
"No change"
],
correct:0,
explanation:"Up-regulation increases receptor availability."
},

{
question:"Down-regulation means:",
answers:[
"Increased receptor number",
"Decreased receptor number",
"More efficacy",
"More potency"
],
correct:1,
explanation:"Down-regulation reduces receptor availability."
},

{
question:"Tolerance develops when:",
answers:[
"Drug response decreases over time",
"Drug response increases",
"Drug becomes inactive immediately",
"Drug is eliminated faster"
],
correct:0,
explanation:"Tolerance means reduced response with repeated exposure."
},

{
question:"Tachyphylaxis refers to:",
answers:[
"Rapid development of tolerance",
"Drug allergy",
"Drug toxicity",
"Drug absorption"
],
correct:0,
explanation:"Tachyphylaxis is a rapidly developing decrease in response."
},

{
question:"Ion channel receptors usually produce:",
answers:[
"Rapid responses",
"Very slow responses",
"No responses",
"Only metabolic effects"
],
correct:0,
explanation:"Ion channels produce fast cellular responses."
},

{
question:"G-protein coupled receptors are:",
answers:[
"The largest receptor family",
"The smallest receptor family",
"Only intracellular receptors",
"Only enzyme receptors"
],
correct:0,
explanation:"GPCRs are the most common receptor type."
},

{
question:"Enzyme-linked receptors often mediate:",
answers:[
"Growth factor effects",
"Immediate nerve impulses",
"No signaling",
"Drug metabolism"
],
correct:0,
explanation:"Many growth factors use enzyme-linked receptors."
},

{
question:"Intracellular receptors are activated by:",
answers:[
"Lipid-soluble drugs",
"Large proteins",
"Ionized drugs",
"Peptides only"
],
correct:0,
explanation:"Lipid-soluble drugs can cross cell membranes."
},

{
question:"Steroid hormones primarily act through:",
answers:[
"Ion channels",
"Intracellular receptors",
"GPCRs",
"Enzyme inhibition only"
],
correct:1,
explanation:"Steroids enter cells and bind intracellular receptors."
}

];

const receptors = [

  {
question:"G-proteins are activated by:",
answers:[
"Ion channels",
"GPCRs",
"Enzyme receptors",
"Intracellular receptors"
],
correct:1,
explanation:"G-proteins are activated by G-protein coupled receptors."
},

{
question:"GPCR stands for:",
answers:[
"General Protein Cell Receptor",
"G-Protein Coupled Receptor",
"Growth Protein Cell Receptor",
"Genetic Protein Control Receptor"
],
correct:1,
explanation:"GPCR means G-Protein Coupled Receptor."
},

{
question:"Gs proteins stimulate:",
answers:[
"cAMP production",
"IP3 inhibition",
"Calcium removal",
"Potassium influx"
],
correct:0,
explanation:"Gs activates adenylate cyclase and increases cAMP."
},

{
question:"Gi proteins:",
answers:[
"Increase cAMP",
"Decrease cAMP",
"Increase calcium",
"Activate DAG"
],
correct:1,
explanation:"Gi inhibits adenylate cyclase, reducing cAMP."
},

{
question:"Gq proteins activate:",
answers:[
"Phospholipase C",
"Adenylate cyclase",
"Tyrosine kinase",
"DNA polymerase"
],
correct:0,
explanation:"Gq activates phospholipase C."
},

{
question:"Gs activates which enzyme?",
answers:[
"Phospholipase C",
"Adenylate cyclase",
"Tyrosine kinase",
"Protease"
],
correct:1,
explanation:"Gs stimulates adenylate cyclase."
},

{
question:"Adenylate cyclase converts ATP into:",
answers:[
"IP3",
"DAG",
"cAMP",
"GTP"
],
correct:2,
explanation:"Adenylate cyclase produces cyclic AMP."
},

{
question:"cAMP acts as a:",
answers:[
"Hormone",
"Second messenger",
"Receptor",
"Enzyme"
],
correct:1,
explanation:"cAMP is a classic intracellular second messenger."
},

{
question:"Gq activation produces:",
answers:[
"cAMP only",
"IP3 and DAG",
"ATP",
"GTP"
],
correct:1,
explanation:"Phospholipase C generates IP3 and DAG."
},

{
question:"IP3 primarily causes:",
answers:[
"Calcium release",
"Potassium release",
"Sodium blockade",
"cAMP production"
],
correct:0,
explanation:"IP3 releases calcium from intracellular stores."
},

{
question:"DAG activates:",
answers:[
"Protein Kinase C",
"Protein Kinase A",
"DNA Polymerase",
"RNA Polymerase"
],
correct:0,
explanation:"DAG activates Protein Kinase C."
},

{
question:"Which second messenger is associated with Gs?",
answers:[
"cAMP",
"IP3",
"DAG",
"Calcium only"
],
correct:0,
explanation:"Gs signaling works primarily through cAMP."
},

{
question:"Which second messenger is associated with Gq?",
answers:[
"cAMP",
"IP3 and DAG",
"ATP",
"NADH"
],
correct:1,
explanation:"Gq signaling generates IP3 and DAG."
},

{
question:"Beta-1 receptors are mainly linked to:",
answers:[
"Gs",
"Gi",
"Gq",
"No G protein"
],
correct:0,
explanation:"Beta-1 receptors use Gs signaling."
},

{
question:"Beta-2 receptors are mainly linked to:",
answers:[
"Gs",
"Gi",
"Gq",
"PLC inhibition"
],
correct:0,
explanation:"Beta-2 receptors activate Gs proteins."
},

{
question:"Alpha-1 receptors are mainly linked to:",
answers:[
"Gs",
"Gi",
"Gq",
"cAMP"
],
correct:2,
explanation:"Alpha-1 receptors signal through Gq."
},

{
question:"Alpha-2 receptors are mainly linked to:",
answers:[
"Gs",
"Gi",
"Gq",
"PKC"
],
correct:1,
explanation:"Alpha-2 receptors signal through Gi."
},

{
question:"Second messengers function to:",
answers:[
"Transmit signals inside cells",
"Destroy receptors",
"Metabolize drugs",
"Eliminate drugs"
],
correct:0,
explanation:"Second messengers carry receptor signals within cells."
},

{
question:"Which receptor family is the largest?",
answers:[
"Ion channels",
"GPCRs",
"Intracellular receptors",
"Enzyme-linked receptors"
],
correct:1,
explanation:"GPCRs are the largest receptor family."
},

{
question:"Calcium acts as:",
answers:[
"A waste product",
"A second messenger",
"A drug receptor",
"A metabolite"
],
correct:1,
explanation:"Calcium is an important intracellular signaling molecule."
}
  
];

const ans = [
  
  {
question:"The ANS stands for:",
answers:[
"Autonomic Nervous System",
"Automatic Neural System",
"Anterior Nervous Structure",
"Autonomic Neural Signal"
],
correct:0,
explanation:"ANS stands for Autonomic Nervous System."
},

{
question:"The ANS primarily controls:",
answers:[
"Voluntary skeletal muscles",
"Involuntary body functions",
"Memory",
"Speech"
],
correct:1,
explanation:"The ANS regulates involuntary functions such as heart rate and digestion."
},

{
question:"The ANS is divided into:",
answers:[
"Central and Peripheral",
"Motor and Sensory",
"Sympathetic and Parasympathetic",
"Somatic and Skeletal"
],
correct:2,
explanation:"The ANS consists of sympathetic and parasympathetic divisions."
},

{
question:"The sympathetic nervous system is responsible for:",
answers:[
"Rest and Digest",
"Fight or Flight",
"Sleep",
"Memory formation"
],
correct:1,
explanation:"The sympathetic system prepares the body for stress."
},

{
question:"The parasympathetic nervous system is responsible for:",
answers:[
"Fight or Flight",
"Rest and Digest",
"Exercise",
"Stress response"
],
correct:1,
explanation:"The parasympathetic system conserves energy and promotes digestion."
},

{
question:"The primary neurotransmitter released by all preganglionic ANS neurons is:",
answers:[
"Dopamine",
"Acetylcholine",
"Norepinephrine",
"Serotonin"
],
correct:1,
explanation:"All preganglionic autonomic neurons release acetylcholine."
},

{
question:"Preganglionic neurons release acetylcholine onto:",
answers:[
"Adrenergic receptors",
"Nicotinic receptors",
"Muscarinic receptors",
"Beta receptors"
],
correct:1,
explanation:"Preganglionic neurons act on nicotinic receptors in autonomic ganglia."
},

{
question:"Most sympathetic postganglionic neurons release:",
answers:[
"Acetylcholine",
"Norepinephrine",
"Dopamine",
"GABA"
],
correct:1,
explanation:"Most sympathetic postganglionic neurons release norepinephrine."
},

{
question:"Most parasympathetic postganglionic neurons release:",
answers:[
"Norepinephrine",
"Dopamine",
"Acetylcholine",
"Epinephrine"
],
correct:2,
explanation:"Parasympathetic postganglionic neurons release acetylcholine."
},

{
question:"The adrenal medulla releases:",
answers:[
"Acetylcholine only",
"Epinephrine and Norepinephrine",
"Dopamine only",
"Serotonin"
],
correct:1,
explanation:"The adrenal medulla secretes catecholamines into the bloodstream."
},

{
question:"Sympathetic stimulation generally causes:",
answers:[
"Decreased heart rate",
"Increased heart rate",
"Increased digestion",
"Increased salivation"
],
correct:1,
explanation:"Fight-or-flight increases cardiac output."
},

{
question:"Parasympathetic stimulation generally causes:",
answers:[
"Increased heart rate",
"Decreased heart rate",
"Pupil dilation",
"Bronchodilation"
],
correct:1,
explanation:"Rest-and-digest slows the heart."
},

{
question:"Sympathetic stimulation causes pupils to:",
answers:[
"Constrict",
"Dilate",
"Remain unchanged",
"Close"
],
correct:1,
explanation:"Sympathetic activation causes mydriasis (pupil dilation)."
},

{
question:"Parasympathetic stimulation causes pupils to:",
answers:[
"Dilate",
"Constrict",
"Disappear",
"Remain unchanged"
],
correct:1,
explanation:"Parasympathetic activation causes miosis."
},

{
question:"Sympathetic stimulation causes bronchi to:",
answers:[
"Constrict",
"Dilate",
"Collapse",
"Remain unchanged"
],
correct:1,
explanation:"Bronchodilation improves oxygen delivery."
},

{
question:"Parasympathetic stimulation causes bronchi to:",
answers:[
"Dilate",
"Constrict",
"Disappear",
"Remain unchanged"
],
correct:1,
explanation:"Parasympathetic activity promotes bronchoconstriction."
},

{
question:"Sympathetic stimulation generally decreases:",
answers:[
"Heart rate",
"Blood glucose",
"Digestion",
"Blood pressure"
],
correct:2,
explanation:"The body temporarily suppresses digestion during stress."
},

{
question:"Parasympathetic stimulation generally increases:",
answers:[
"Digestion",
"Heart rate",
"Blood pressure",
"Pupil size"
],
correct:0,
explanation:"Parasympathetic activity promotes gastrointestinal function."
},

{
question:"Nicotinic receptors are found in:",
answers:[
"Autonomic ganglia",
"Only the heart",
"Only the stomach",
"Only the lungs"
],
correct:0,
explanation:"Nicotinic receptors are located in autonomic ganglia."
},

{
question:"Muscarinic receptors respond to:",
answers:[
"Norepinephrine",
"Acetylcholine",
"Dopamine",
"Epinephrine"
],
correct:1,
explanation:"Muscarinic receptors are activated by acetylcholine."
},

{
question:"Adrenergic receptors respond to:",
answers:[
"Acetylcholine",
"Norepinephrine and Epinephrine",
"Serotonin",
"GABA"
],
correct:1,
explanation:"Adrenergic receptors are activated by catecholamines."
},

{
question:"Alpha and beta receptors are:",
answers:[
"Cholinergic receptors",
"Adrenergic receptors",
"Nicotinic receptors",
"Muscarinic receptors"
],
correct:1,
explanation:"Alpha and beta receptors belong to the adrenergic system."
},

{
question:"The neurotransmitter of the parasympathetic nervous system is primarily:",
answers:[
"Dopamine",
"Acetylcholine",
"Norepinephrine",
"Serotonin"
],
correct:1,
explanation:"Acetylcholine is the primary parasympathetic neurotransmitter."
},

{
question:"The neurotransmitter of most sympathetic postganglionic neurons is:",
answers:[
"Acetylcholine",
"Norepinephrine",
"Serotonin",
"Glycine"
],
correct:1,
explanation:"Norepinephrine is the main sympathetic neurotransmitter."
},

{
question:"Fight-or-flight prepares the body to:",
answers:[
"Sleep",
"Rest",
"Respond to stress",
"Digest food"
],
correct:2,
explanation:"The sympathetic system prepares the body for emergencies."
},

{
question:"Rest-and-digest is associated with:",
answers:[
"Sympathetic system",
"Parasympathetic system",
"Somatic system",
"CNS only"
],
correct:1,
explanation:"The parasympathetic system conserves energy."
},

{
question:"Which division conserves energy?",
answers:[
"Sympathetic",
"Parasympathetic",
"Somatic",
"Motor"
],
correct:1,
explanation:"The parasympathetic nervous system conserves energy."
},

{
question:"Which division increases blood flow to skeletal muscle?",
answers:[
"Parasympathetic",
"Sympathetic",
"Enteric",
"Somatic"
],
correct:1,
explanation:"Fight-or-flight directs blood to muscles."
},

{
question:"Autonomic ganglia contain:",
answers:[
"Preganglionic and postganglionic neuron connections",
"Only muscles",
"Only receptors",
"Only hormones"
],
correct:0,
explanation:"Ganglia are relay stations between autonomic neurons."
},

{
question:"The ANS primarily maintains:",
answers:[
"Homeostasis",
"Conscious thought",
"Speech",
"Memory"
],
correct:0,
explanation:"The ANS helps maintain internal balance and homeostasis."
}
  
  ];

const cholinergicAgonists = [
  
  {
question:"Cholinergic agonists mimic the action of:",
answers:[
"Norepinephrine",
"Dopamine",
"Acetylcholine",
"Serotonin"
],
correct:2,
explanation:"Cholinergic agonists produce effects similar to acetylcholine."
},

{
question:"Another name for cholinergic agonists is:",
answers:[
"Parasympathomimetics",
"Sympathomimetics",
"Beta blockers",
"Adrenergics"
],
correct:0,
explanation:"Cholinergic agonists mimic parasympathetic nervous system activity."
},

{
question:"The primary neurotransmitter of the parasympathetic nervous system is:",
answers:[
"Norepinephrine",
"Dopamine",
"Acetylcholine",
"Epinephrine"
],
correct:2,
explanation:"Acetylcholine is the major parasympathetic neurotransmitter."
},

{
question:"Which receptor is activated by cholinergic agonists?",
answers:[
"Adrenergic",
"Muscarinic",
"Dopaminergic",
"Serotonergic"
],
correct:1,
explanation:"Most therapeutic cholinergic agonists act on muscarinic receptors."
},

{
question:"Bethanechol is used primarily to treat:",
answers:[
"Urinary retention",
"Hypertension",
"Asthma",
"Heart failure"
],
correct:0,
explanation:"Bethanechol stimulates bladder contraction."
},

{
question:"Pilocarpine is commonly used for:",
answers:[
"Diabetes",
"Glaucoma",
"Hypertension",
"Arrhythmias"
],
correct:1,
explanation:"Pilocarpine reduces intraocular pressure."
},

{
question:"Pilocarpine causes:",
answers:[
"Mydriasis",
"Miosis",
"Tachycardia",
"Bronchodilation"
],
correct:1,
explanation:"Pilocarpine constricts the pupil."
},

{
question:"Methacholine is primarily used to:",
answers:[
"Treat glaucoma",
"Diagnose asthma",
"Treat hypertension",
"Treat diarrhea"
],
correct:1,
explanation:"Methacholine challenge testing helps diagnose asthma."
},

{
question:"Carbachol is used mainly in:",
answers:[
"Ophthalmology",
"Cardiology",
"Dermatology",
"Neurology"
],
correct:0,
explanation:"Carbachol is used for certain eye procedures."
},

{
question:"Cholinergic stimulation generally causes:",
answers:[
"Increased heart rate",
"Decreased secretions",
"Decreased heart rate",
"Bronchodilation"
],
correct:2,
explanation:"Parasympathetic stimulation slows the heart."
},

{
question:"Cholinergic agonists increase:",
answers:[
"Salivation",
"Heart rate",
"Blood pressure",
"Pupil size"
],
correct:0,
explanation:"Salivary gland activity increases."
},

{
question:"Cholinergic agonists increase:",
answers:[
"GI motility",
"Bronchodilation",
"Heart rate",
"Blood glucose"
],
correct:0,
explanation:"Parasympathetic activation promotes digestion."
},

{
question:"The opposite of cholinergic stimulation is:",
answers:[
"Parasympathetic activity",
"Adrenergic stimulation",
"Muscarinic activation",
"Acetylcholine release"
],
correct:1,
explanation:"Adrenergic activity generally opposes cholinergic effects."
},

{
question:"Cholinergic agonists can cause:",
answers:[
"Dry mouth",
"Urinary retention",
"Excessive sweating",
"Mydriasis"
],
correct:2,
explanation:"Sweating increases with cholinergic stimulation."
},

{
question:"Which nervous system division do cholinergic agonists mimic?",
answers:[
"Sympathetic",
"Parasympathetic",
"Somatic",
"Central only"
],
correct:1,
explanation:"Cholinergic agonists are parasympathomimetics."
},
  
{
question:"A common effect of cholinergic agonists on the eye is:",
answers:[
"Mydriasis",
"Miosis",
"Blindness",
"Color blindness"
],
correct:1,
explanation:"Cholinergic agonists cause pupil constriction (miosis)."
},

{
question:"Cholinergic agonists generally cause:",
answers:[
"Bronchodilation",
"Bronchoconstriction",
"No effect on bronchi",
"Lung collapse"
],
correct:1,
explanation:"Parasympathetic stimulation causes bronchoconstriction."
},

{
question:"Which mnemonic is associated with cholinergic excess?",
answers:[
"SLUDGE",
"MONA",
"SOAP",
"FAST"
],
correct:0,
explanation:"SLUDGE describes classic muscarinic overstimulation."
},

{
question:"The 'S' in SLUDGE stands for:",
answers:[
"Sweating",
"Salivation",
"Sleepiness",
"Seizures"
],
correct:1,
explanation:"S = Salivation."
},

{
question:"The 'L' in SLUDGE stands for:",
answers:[
"Lacrimation",
"Lethargy",
"Liver failure",
"Lung edema"
],
correct:0,
explanation:"L = Lacrimation (tearing)."
},

{
question:"The 'U' in SLUDGE stands for:",
answers:[
"Urination",
"Ulceration",
"Urticaria",
"Unconsciousness"
],
correct:0,
explanation:"U = Urination."
},

{
question:"The 'D' in SLUDGE stands for:",
answers:[
"Depression",
"Defecation",
"Dilation",
"Dehydration"
],
correct:1,
explanation:"D = Defecation."
},

{
question:"The 'G' in SLUDGE stands for:",
answers:[
"Glycosuria",
"GI upset",
"Growth",
"Gangrene"
],
correct:1,
explanation:"G = Gastrointestinal upset."
},

{
question:"The 'E' in SLUDGE stands for:",
answers:[
"Edema",
"Emesis",
"Euphoria",
"Excitement"
],
correct:1,
explanation:"E = Emesis (vomiting)."
},

{
question:"Excess cholinergic stimulation can cause:",
answers:[
"Tachycardia",
"Bradycardia",
"Hypertension",
"Mydriasis"
],
correct:1,
explanation:"Muscarinic stimulation slows the heart."
},

{
question:"Bethanechol primarily acts on:",
answers:[
"Muscarinic receptors",
"Alpha receptors",
"Beta receptors",
"Dopamine receptors"
],
correct:0,
explanation:"Bethanechol is a muscarinic agonist."
},

{
question:"Pilocarpine is useful in glaucoma because it:",
answers:[
"Increases eye pressure",
"Decreases eye pressure",
"Causes blindness",
"Dilates pupils"
],
correct:1,
explanation:"Pilocarpine lowers intraocular pressure."
},

{
question:"Cholinergic agonists generally increase:",
answers:[
"Secretions",
"Heart rate",
"Blood glucose",
"Blood pressure"
],
correct:0,
explanation:"Secretions increase with parasympathetic stimulation."
},

{
question:"A major risk of cholinergic agonists is:",
answers:[
"Excessive parasympathetic activity",
"Excessive sympathetic activity",
"Hyperglycemia",
"Dry eyes"
],
correct:0,
explanation:"Too much cholinergic stimulation causes cholinergic toxicity."
},

{
question:"Cholinergic agonists are best described as:",
answers:[
"Parasympathomimetics",
"Sympatholytics",
"Adrenergics",
"Beta blockers"
],
correct:0,
explanation:"They mimic parasympathetic nervous system activity."
}

  ];

const cholinergicAntagonists = [
  
  {
question:"Cholinergic antagonists block the action of:",
answers:[
"Dopamine",
"Acetylcholine",
"Norepinephrine",
"Serotonin"
],
correct:1,
explanation:"Cholinergic antagonists block acetylcholine at muscarinic receptors."
},

{
question:"Another name for cholinergic antagonists is:",
answers:[
"Parasympathomimetics",
"Antimuscarinics",
"Adrenergics",
"Beta agonists"
],
correct:1,
explanation:"Most cholinergic antagonists are antimuscarinic drugs."
},

{
question:"Atropine is classified as a:",
answers:[
"Cholinergic agonist",
"Cholinergic antagonist",
"Adrenergic agonist",
"Beta blocker"
],
correct:1,
explanation:"Atropine blocks muscarinic receptors."
},

{
question:"Atropine commonly causes:",
answers:[
"Bradycardia",
"Tachycardia",
"Miosis",
"Increased secretions"
],
correct:1,
explanation:"Blocking parasympathetic activity increases heart rate."
},

{
question:"Atropine causes pupils to:",
answers:[
"Constrict",
"Dilate",
"Disappear",
"Remain unchanged"
],
correct:1,
explanation:"Atropine causes mydriasis."
},

{
question:"Atropine decreases:",
answers:[
"Heart rate",
"Salivation",
"Blood pressure",
"Blood glucose"
],
correct:1,
explanation:"Dry mouth is a classic atropine effect."
},

{
question:"Scopolamine is commonly used for:",
answers:[
"Glaucoma",
"Motion sickness",
"Asthma",
"Hypertension"
],
correct:1,
explanation:"Scopolamine helps prevent motion sickness."
},

{
question:"Ipratropium is used primarily for:",
answers:[
"Asthma and COPD",
"Diabetes",
"Heart failure",
"Glaucoma"
],
correct:0,
explanation:"Ipratropium causes bronchodilation."
},

{
question:"Tiotropium is mainly used for:",
answers:[
"COPD",
"Hypertension",
"Diarrhea",
"Depression"
],
correct:0,
explanation:"Tiotropium is a long-acting bronchodilator."
},

{
question:"Tropicamide is commonly used for:",
answers:[
"Eye examination",
"Asthma",
"Heart failure",
"Constipation"
],
correct:0,
explanation:"Tropicamide dilates the pupil for eye exams."
},

{
question:"Cholinergic antagonists generally cause:",
answers:[
"Increased secretions",
"Dry mouth",
"Excess sweating",
"Bradycardia"
],
correct:1,
explanation:"Dry mouth is a hallmark antimuscarinic effect."
},

{
question:"A classic memory aid for anticholinergic toxicity is:",
answers:[
"Hot as a hare",
"SLUDGE",
"SOAP",
"MONA"
],
correct:0,
explanation:"Anticholinergic toxicity causes dry, hot skin and confusion."
},

{
question:"Cholinergic antagonists typically cause:",
answers:[
"Miosis",
"Mydriasis",
"Increased tears",
"Increased salivation"
],
correct:1,
explanation:"Muscarinic blockade causes pupil dilation."
},

{
question:"Which drug treats organophosphate poisoning symptoms?",
answers:[
"Atropine",
"Pilocarpine",
"Bethanechol",
"Methacholine"
],
correct:0,
explanation:"Atropine counteracts excessive muscarinic stimulation."
},

{
question:"Antimuscarinic drugs increase:",
answers:[
"GI motility",
"Urinary retention",
"Salivation",
"Tearing"
],
correct:1,
explanation:"They reduce bladder contraction."
},

{
question:"Cholinergic antagonists decrease:",
answers:[
"Heart rate",
"Bronchodilation",
"Glandular secretions",
"Pupil size"
],
correct:2,
explanation:"Secretions are reduced."
},

{
question:"An adverse effect of atropine is:",
answers:[
"Dry mouth",
"Excess saliva",
"Diarrhea",
"Miosis"
],
correct:0,
explanation:"Dry mouth is extremely common."
},

{
question:"Which system is blocked by antimuscarinic drugs?",
answers:[
"Parasympathetic",
"Sympathetic",
"Somatic",
"Endocrine"
],
correct:0,
explanation:"These drugs oppose parasympathetic activity."
},

{
question:"Cholinergic antagonists are best described as:",
answers:[
"Parasympathomimetics",
"Parasympatholytics",
"Sympathomimetics",
"Adrenergics"
],
correct:1,
explanation:"They inhibit parasympathetic responses."
},

{
question:"Atropine is often used to treat:",
answers:[
"Bradycardia",
"Tachycardia",
"Hypertension",
"Glaucoma"
],
correct:0,
explanation:"Atropine increases heart rate."
}
  ];

const adrenergics = [
  
  {
question:"Adrenergic agonists mimic the effects of:",
answers:[
"Acetylcholine",
"Norepinephrine and Epinephrine",
"Serotonin",
"Dopamine only"
],
correct:1,
explanation:"Adrenergic agonists stimulate the sympathetic nervous system."
},

{
question:"Another name for adrenergic agonists is:",
answers:[
"Parasympathomimetics",
"Sympathomimetics",
"Antimuscarinics",
"Parasympatholytics"
],
correct:1,
explanation:"Adrenergic agonists mimic sympathetic activity."
},

{
question:"Epinephrine stimulates:",
answers:[
"Alpha receptors only",
"Beta receptors only",
"Alpha and Beta receptors",
"Muscarinic receptors"
],
correct:2,
explanation:"Epinephrine activates both alpha and beta receptors."
},

{
question:"Norepinephrine primarily stimulates:",
answers:[
"Alpha-1, Alpha-2, Beta-1",
"Beta-2 only",
"Muscarinic receptors",
"Dopamine receptors"
],
correct:0,
explanation:"Norepinephrine has strong alpha activity and some beta-1 activity."
},

{
question:"Phenylephrine is a selective:",
answers:[
"Alpha-1 agonist",
"Beta-1 agonist",
"Beta-2 agonist",
"Muscarinic agonist"
],
correct:0,
explanation:"Phenylephrine selectively stimulates alpha-1 receptors."
},

{
question:"Phenylephrine commonly causes:",
answers:[
"Bronchodilation",
"Vasoconstriction",
"Diarrhea",
"Miosis"
],
correct:1,
explanation:"Alpha-1 activation causes vasoconstriction."
},

{
question:"Dobutamine primarily stimulates:",
answers:[
"Beta-1 receptors",
"Alpha-1 receptors",
"Beta-2 receptors",
"Muscarinic receptors"
],
correct:0,
explanation:"Dobutamine increases cardiac contractility."
},

{
question:"Dobutamine is commonly used in:",
answers:[
"Heart failure",
"Asthma",
"Glaucoma",
"Diarrhea"
],
correct:0,
explanation:"Dobutamine improves cardiac output."
},

{
question:"Albuterol is a selective:",
answers:[
"Alpha-1 agonist",
"Beta-1 agonist",
"Beta-2 agonist",
"Muscarinic antagonist"
],
correct:2,
explanation:"Albuterol stimulates beta-2 receptors."
},

{
question:"Albuterol is used to treat:",
answers:[
"Bradycardia",
"Asthma",
"Glaucoma",
"Constipation"
],
correct:1,
explanation:"Beta-2 stimulation causes bronchodilation."
},

{
question:"Beta-2 stimulation causes:",
answers:[
"Bronchodilation",
"Bronchoconstriction",
"Miosis",
"Bradycardia"
],
correct:0,
explanation:"Beta-2 receptors relax bronchial smooth muscle."
},

{
question:"Alpha-1 stimulation causes:",
answers:[
"Vasodilation",
"Vasoconstriction",
"Bronchodilation",
"Bradycardia"
],
correct:1,
explanation:"Alpha-1 receptors constrict blood vessels."
},

{
question:"Beta-1 stimulation causes:",
answers:[
"Decreased heart rate",
"Increased heart rate",
"Miosis",
"Constipation"
],
correct:1,
explanation:"Beta-1 receptors stimulate the heart."
},

{
question:"Dopamine at moderate doses stimulates:",
answers:[
"Beta-1 receptors",
"Muscarinic receptors",
"Alpha-2 receptors only",
"None"
],
correct:0,
explanation:"Moderate-dose dopamine stimulates beta-1 receptors."
},

{
question:"High-dose dopamine stimulates:",
answers:[
"Alpha receptors",
"Muscarinic receptors",
"Nicotinic receptors",
"Only beta-2 receptors"
],
correct:0,
explanation:"High doses produce vasoconstriction via alpha receptors."
},

{
question:"Adrenergic agonists generally increase:",
answers:[
"Heart rate",
"GI motility",
"Salivation",
"Tearing"
],
correct:0,
explanation:"Sympathetic activation increases heart rate."
},

{
question:"Adrenergic agonists generally decrease:",
answers:[
"Heart rate",
"Blood pressure",
"GI motility",
"Cardiac output"
],
correct:2,
explanation:"Digestion is reduced during sympathetic activation."
},

{
question:"Which receptor is associated with bronchodilation?",
answers:[
"Alpha-1",
"Beta-1",
"Beta-2",
"Muscarinic"
],
correct:2,
explanation:"Beta-2 activation relaxes bronchial smooth muscle."
},

{
question:"Which receptor is associated with increased cardiac output?",
answers:[
"Beta-1",
"Beta-2",
"Alpha-2",
"Muscarinic"
],
correct:0,
explanation:"Beta-1 activation increases heart rate and contractility."
},

{
question:"Adrenergic agonists are best described as:",
answers:[
"Parasympathomimetics",
"Parasympatholytics",
"Sympathomimetics",
"Cholinergics"
],
correct:2,
explanation:"Adrenergic agonists mimic the sympathetic nervous system."
}
  ];

const betaBlockers = [
  {
question:"Beta blockers are classified as:",
answers:[
"Adrenergic agonists",
"Adrenergic antagonists",
"Cholinergic agonists",
"Cholinergic antagonists"
],
correct:1,
explanation:"Beta blockers block beta-adrenergic receptors."
},

{
question:"Beta blockers primarily oppose:",
answers:[
"Parasympathetic activity",
"Sympathetic activity",
"Somatic activity",
"CNS activity"
],
correct:1,
explanation:"They reduce sympathetic stimulation."
},

{
question:"Propranolol is a:",
answers:[
"Nonselective beta blocker",
"Beta-1 selective blocker",
"Alpha blocker",
"Muscarinic blocker"
],
correct:0,
explanation:"Propranolol blocks both beta-1 and beta-2 receptors."
},

{
question:"Metoprolol is primarily:",
answers:[
"Beta-1 selective",
"Beta-2 selective",
"Alpha selective",
"Muscarinic selective"
],
correct:0,
explanation:"Metoprolol mainly blocks beta-1 receptors."
},

{
question:"Atenolol is a:",
answers:[
"Beta-1 selective blocker",
"Beta-2 blocker",
"Alpha blocker",
"Cholinergic blocker"
],
correct:0,
explanation:"Atenolol is cardioselective."
},

{
question:"Beta-1 blockade generally causes:",
answers:[
"Increased heart rate",
"Decreased heart rate",
"Bronchodilation",
"Mydriasis"
],
correct:1,
explanation:"Blocking beta-1 receptors slows the heart."
},

{
question:"Beta blockers are commonly used to treat:",
answers:[
"Hypertension",
"Glaucoma",
"Asthma",
"Diarrhea"
],
correct:0,
explanation:"Hypertension is one of their most common uses."
},

{
question:"Beta blockers reduce:",
answers:[
"Cardiac output",
"GI motility",
"Salivation",
"Pupil constriction"
],
correct:0,
explanation:"They reduce heart rate and contractility."
},

{
question:"Which beta blocker is used in glaucoma?",
answers:[
"Timolol",
"Bethanechol",
"Pilocarpine",
"Atropine"
],
correct:0,
explanation:"Timolol decreases aqueous humor production."
},

{
question:"A common side effect of beta blockers is:",
answers:[
"Tachycardia",
"Bradycardia",
"Mydriasis",
"Hypertension"
],
correct:1,
explanation:"Excessive slowing of the heart can occur."
},

{
question:"Nonselective beta blockers block:",
answers:[
"Beta-1 only",
"Beta-2 only",
"Beta-1 and Beta-2",
"Alpha receptors"
],
correct:2,
explanation:"They affect both receptor types."
},

{
question:"Blocking beta-2 receptors may cause:",
answers:[
"Bronchodilation",
"Bronchoconstriction",
"Tachycardia",
"Mydriasis"
],
correct:1,
explanation:"Beta-2 blockade can worsen asthma."
},

{
question:"Beta blockers should be used cautiously in:",
answers:[
"Asthma",
"Hypertension",
"Angina",
"Heart disease"
],
correct:0,
explanation:"Especially nonselective beta blockers."
},

{
question:"Carvedilol blocks:",
answers:[
"Beta only",
"Alpha and Beta receptors",
"Muscarinic receptors",
"Nicotinic receptors"
],
correct:1,
explanation:"Carvedilol has mixed alpha and beta blockade."
},

{
question:"Labetalol blocks:",
answers:[
"Beta only",
"Alpha and Beta receptors",
"Muscarinic receptors",
"Dopamine receptors"
],
correct:1,
explanation:"Labetalol is a mixed adrenergic antagonist."
},

{
question:"Beta blockers are useful after:",
answers:[
"Myocardial infarction",
"Appendectomy",
"Asthma attack",
"Food poisoning"
],
correct:0,
explanation:"They reduce cardiac workload after MI."
},

{
question:"Which receptor primarily controls heart rate?",
answers:[
"Alpha-1",
"Beta-1",
"Beta-2",
"Muscarinic"
],
correct:1,
explanation:"Beta-1 receptors are concentrated in the heart."
},

{
question:"Beta blockers generally decrease:",
answers:[
"Heart rate",
"Digestion",
"Salivation",
"Tear production"
],
correct:0,
explanation:"Their major cardiac effect is slowing the heart."
},

{
question:"Abrupt withdrawal of beta blockers may cause:",
answers:[
"Rebound tachycardia",
"Permanent bradycardia",
"Miosis",
"Dry mouth"
],
correct:0,
explanation:"Stopping suddenly can lead to rebound sympathetic activity."
},

{
question:"Beta blockers are best classified as:",
answers:[
"Sympathomimetics",
"Sympatholytics",
"Cholinergics",
"Parasympathomimetics"
],
correct:1,
explanation:"They inhibit sympathetic nervous system activity."
}
  ];

const finalExam = [
...fundamentals,
...pharmacokinetics,
...pharmacodynamics,
...receptors,
...ans,
...cholinergicAgonists,
...cholinergicAntagonists,
...adrenergics,
...betaBlockers
];

let current = 0;
let score = 0;
let activeQuiz = [];
let activeTitle = "";
let wrongAnswers = [];

function showMenu(){

document.getElementById("app").innerHTML = `

<h1>Pharmacology Master Quiz for Dr. Zwane</h1>

<p>
♡ Study well my gwapo amazing uyab! ♡
</p>

<p>
🏆 Total Questions Available:
${
fundamentals.length +
pharmacokinetics.length +
pharmacodynamics.length +
receptors.length +
ans.length +
cholinergicAgonists.length +
cholinergicAntagonists.length +
adrenergics.length +
betaBlockers.length
}
</p>

<button onclick="startSection('📚 Fundamentals', fundamentals)">
📚 Fundamentals of Pharmacology
</button>

<button onclick="startSection('📚 Pharmacokinetics', pharmacokinetics)">
📚 Pharmacokinetics
</button>

<button onclick="startSection('📚 Pharmacodynamics', pharmacodynamics)">
📚 Pharmacodynamics & Receptors
</button>

<button onclick="startSection('📚 Receptors & G-Proteins', receptors)">
📚 Receptors & G-Proteins
</button>

<button onclick="startSection('📚 Autonomic Nervous System', ans)">
📚 Autonomic Nervous System
</button>

<button onclick="startSection('📚 Cholinergic Agonists', cholinergicAgonists)">
📚 Cholinergic Agonists
</button>

<button onclick="startSection('📚 Cholinergic Antagonists', cholinergicAntagonists)">
📚 Cholinergic Antagonists
</button>

<button onclick="startSection('📚 Adrenergic Agonists', adrenergics)">
📚 Adrenergic Agonists
</button>

<button onclick="startSection('📚 Beta Blockers', betaBlockers)">
📚 Beta Blockers
</button>

<button onclick="startFinalExam()">
🎓 FINAL EXAM MODE
</button>

`;

}

 function startSection(title, quiz){

current = 0;
score = 0;
wrongAnswers = [];

activeTitle = title;

activeQuiz = [...quiz];

activeQuiz.sort(() => Math.random() - 0.5);

showQuestion();

}

function startFinalExam(){

current = 0;
score = 0;
wrongAnswers = [];

activeTitle = "🎓 FINAL EXAM";

activeQuiz = [...finalExam];

activeQuiz.sort(() => Math.random() - 0.5);

activeQuiz = activeQuiz.slice(0,100);

showQuestion();

}

function showQuestion(){

const q = activeQuiz[current];
  
let html = `
<button onclick="showMenu()">
⬅ Menu
</button>

<h1>${activeTitle}</h1>

<h3>
Question ${current+1}
of
${activeQuiz.length}
</h3>

<div style="
width:100%;
background:#ddd;
border-radius:10px;
margin:10px 0;
">
<div style="
width:${((current+1)/activeQuiz.length)*100}%;
background:#4CAF50;
height:20px;
border-radius:10px;
">
</div>
</div>

<h2>${q.question}</h2>
`;

q.answers.forEach((answer,index)=>{

html += `
<button onclick="checkAnswer(${index})">
${answer}
</button>
`;

});
  

document.getElementById("app").innerHTML = html;

}



function checkAnswer(choice){

const q = activeQuiz[current];
  
let correct =
choice === q.correct;

document.getElementById("app").innerHTML = `

<h1>
${correct ? "✅ VERY GOOD MY LOVE" : "SAYOP!"}
</h1>

<h3>
Correct Answer:
${q.answers[q.correct]}
</h3>

<p>
${q.explanation}
</p>

<button onclick="nextQuestion()">
Next Question
</button>

`;

if(correct){
score++;
}else{
wrongAnswers.push(q);
}

}

function nextQuestion(){

current++;

if(current >= activeQuiz.length){
  
showResults();

return;
}

showQuestion();

}

function showResults(){

document.getElementById("app").innerHTML = `

<h1>🏆 ${activeTitle} Complete</h1>

<h2>
Score:
${score}/${activeQuiz.length}
</h2>

<h2>
${Math.round(score/activeQuiz.length*100)}%
</h2>

<p>
${
(score/activeQuiz.length*100)>=90
? "🏆 Doctor Naka!"
: (score/activeQuiz.length*100)>=80
? "🔥 Excellent mga 80%!"
: (score/activeQuiz.length*100)>=70
? "👏 Great Job (Naay effort)!"
: (score/activeQuiz.length*100)>=60
? "👍 Keep Reviewing Palihug!"
: "📚 More Study Needed! Punishment Time"
}
</p>

${
wrongAnswers.length > 0
?
`
<button onclick="reviewWrongAnswers()">
📚 Review Wrong Answers (${wrongAnswers.length})
</button>
`
:
""
}

<button onclick="showMenu()">
Return to Menu
</button>

`;

}
function reviewWrongAnswers(){

current = 0;
score = 0;

activeTitle = "📚 Wrong Answers Review";

activeQuiz = [...wrongAnswers];

showQuestion();

}

showMenu();