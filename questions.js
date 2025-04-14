// Sample continuous list for PSYO 111 Final Exam Prep.
// In your actual file, you might have around 500 questions.
// Here we include a few sample questions for demonstration with appropriate question numbers.

const allQuestionsData = [
  {
      "number": 1,
      "text": "According to the text, what is the primary definition of a gene?",
      "options": {
          "a": "A section of DNA coding for protein molecules that affect traits",
          "b": "A large thread-like structure containing DNA, such as a chromosome",
          "c": "The major unit of hereditary transmission",
          "d": "A molecule like messenger RNA involved in protein production"
      },
      "answer": "c"
  },
  {
      "number": 2,
      "text": "Genes are described as being organized into larger structures called:",
      "options": {
          "a": "Double helices",
          "b": "Chromosomes",
          "c": "Histones",
          "d": "Messenger RNAs"
      },
      "answer": "b"
  },
  {
      "number": 3,
      "text": "The structure of DNA within chromosomes is described as a:",
      "options": {
          "a": "Single-strand configuration",
          "b": "Methyl group attachment",
          "c": "Double-helix configuration",
          "d": "Protein-based sequence"
      },
      "answer": "c"
  },
  {
      "number": 4,
      "text": "Which molecule is responsible for communicating a copy of the DNA code to cells for protein production?",
      "options": {
          "a": "Histone protein",
          "b": "Deoxyribonucleic acid (DNA)",
          "c": "Messenger RNA (mRNA)",
          "d": "Methyl group"
      },
      "answer": "c"
  },
  {
      "number": 5,
      "text": "How many pairs of chromosomes do humans typically possess?",
      "options": {
          "a": "23 pairs",
          "b": "46 pairs",
          "c": "2 pairs (X and Y)",
          "d": "An amount varying by individual"
      },
      "answer": "a"
  },
  {
      "number": 6,
      "text": "Monozygotic twins result from the splitting of a single fertilized egg and therefore share:",
      "options": {
          "a": "Approximately 50% of their variable DNA",
          "b": "The same X or Y chromosome from their father",
          "c": "Exactly 75% of their genes",
          "d": "100% of their genes"
      },
      "answer": "d"
  },
  {
      "number": 7,
      "text": "Dizygotic twins, also known as fraternal twins, develop from:",
      "options": {
          "a": "A single fertilized egg that splits late in development",
          "b": "Two separate fertilized eggs",
          "c": "A single egg fertilized by two different sperm",
          "d": "Two eggs fertilized by the same sperm"
      },
      "answer": "b"
  },
  {
      "number": 8,
      "text": "The concept 'degree of relatedness' refers to the:",
      "options": {
          "a": "Similarity in environmental upbringing",
          "b": "Probability of sharing genes between individuals",
          "c": "Number of chromosomes shared",
          "d": "Likelihood of developing similar psychological traits"
      },
      "answer": "b"
  },
  {
      "number": 9,
      "text": "Epigenetics primarily studies how:",
      "options": {
          "a": "Environmental factors influence gene expression without changing the DNA sequence",
          "b": "Mutations, such as insertions, deletions, or substitutions of nucleotides, lead to permanent alterations in the fundamental DNA sequence of an organism",
          "c": "Genes, composed of specific sequences of DNA, directly determine fixed traits like eye color through the inheritance of specific alleles",
          "d": "DNA methylation, a key process in molecular biology, leads to the creation of entirely new genes within the genome"
      },
      "answer": "a"
  },
  {
      "number": 10,
      "text": "What are epigenetic marks?",
      "options": {
          "a": "Permanent changes to the DNA base sequence (mutations)",
          "b": "Chemical modifications to DNA that affect gene activity",
          "c": "The physical location of a gene on a chromosome",
          "d": "Errors that occur during DNA replication"
      },
      "answer": "b"
  },
  {
      "number": 11,
      "text": "The epigenetic mechanism of DNA methylation typically involves:",
      "options": {
          "a": "Adding a methyl group, which usually switches a gene off",
          "b": "Removing a methyl group, which usually switches a gene on",
          "c": "Adding an acetyl group to DNA, altering its structure",
          "d": "Modifying histone proteins to make DNA more accessible"
      },
      "answer": "a"
  },
  {
      "number": 12,
      "text": "Unlike DNA methylation, histone modification is described as being able to:",
      "options": {
          "a": "Only switch genes off permanently",
          "b": "Alter the underlying DNA sequence",
          "c": "Either switch genes on or switch genes off",
          "d": "Only add methyl groups to DNA"
      },
      "answer": "c"
  },
  {
      "number": 13,
      "text": "How do epigenetic differences between monozygotic twins change over time, according to the text?",
      "options": {
          "a": "They remain identical throughout life due to identical DNA",
          "b": "They inscrese as twins have different experiences.",
          "c": "They decrease as twins share more experiences",
          "d": "They are significant at birth but converge later in life"
      },
      "answer": "b"
  },
  {
      "number": 14,
      "text": "Research involving rats and mice indicates that epigenetic marks play a role in processes such as:",
      "options": {
          "a": "Determining the basic number of chromosomes",
          "b": "Controlling involuntary reflexes",
          "c": "Learning and memory formation",
          "d": "Establishing the initial DNA sequence"
      },
      "answer": "c"
  },
  {
      "number": 15,
      "text": "Studies involving humans have linked epigenetic changes, specifically DNA methylation, with:",
      "options": {
          "a": "Athletic performance",
          "b": "Responses to psychological stress",
          "c": "Basic metabolic rate",
          "d": "Natural hair color development"
      },
      "answer": "b"
  },
  {
      "number": 16,
      "text": "What potential role for epigenetics was suggested by research on Holocaust survivors and their offspring?",
      "options": {
          "a": "Preventing the inheritance of genetic disorders",          
          "b": "Increasing resilience to future stress",
          "c": "Altering the fundamental DNA structure passed to offspring",
          "d": "Transmitting the consequences of trauma across generations",
      },
      "answer": "d"
  },
  {
      "number": 17,
      "text": "In the studies by Meaney and colleagues, what characterized the 'high LG' rat mothers?",
      "options": {
          "a": "Spending minimal time with their pups",
          "b": "Frequently licking and grooming their young pups",
          "c": "Building more elaborate nests",
          "d": "Showing heightened aggression towards threats"
      },
      "answer": "b"
  },
  {
      "number": 18,
      "text": "Adult rats that were raised by high LG mothers (or cross-fostered to them) showed which characteristic compared to those raised by low LG mothers?",
      "options": {
          "a": "Increased levels of stress-related hormones",
          "b": "Greater fearfulness in stressful situations",
          "c": "Less fearfulness in stressful situations",
          "d": "No difference in stress response or fearfulness"
      },
      "answer": "c"
  },
  {
      "number": 19,
      "text": "The text associates increased levels of hippocampal serotonin in rats with:",
      "options": {
          "a": "Lowered mood and increased anxiety",
          "b": "Elevated mood and potentially calmer stress response",
          "c": "Impaired memory function",
          "d": "Decreased grooming behavior"
      },
      "answer": "b"
  },
  {
      "number": 20,
      "text": "The behavior of high LG rat mothers is suggested to be the human equivalent of:",
      "options": {
          "a": "High socioeconomic status",
          "b": "Strict and demanding parenting",
          "c": "Loving and attentive parenting",          
          "d": "Genetic predisposition to calmness"
      },
      "answer": "c"
  },
  {
      "number": 21,
      "text": "A large-scale study in Great Britain found that children raised in economically disadvantaged neighborhoods showed:",
      "options": {
          "a": "Lower overall DNA methylation compared to advantaged children",
          "b": "Greater DNA methylation in genes linked to inflammation and smoking",
          "c": "Identical epigenetic patterns to children in advantaged neighborhoods",
          "d": "Reduced expression of the glucocorticoid receptor gene"
      },
      "answer": "b"
  },
  {
      "number": 22,
      "text": "The text highlights the increasing recognition of epigenetics' importance in understanding:",
      "options": {
          "a": "Psychological disorders where early life stress is a risk factor",
          "b": "Basic laws of Mendelian inheritance",
          "c": "The development of the skeletal system",
          "d": "Acute infectious diseases"
      },
      "answer": "a"
  },
  {
      "number": 23,
      "text": "While genes set a range of possibilities, the characteristics of an individual within that range are determined by:",
      "options": {
          "a": "Genetic factors alone",          
          "b": "The number of chromosomes",
          "c": "Purely random chance events",
          "d": "Environmental factors and experience interacting with genes",
      },
      "answer": "d"
  },
  {
      "number": 24,
      "text": "What does heritability measure?",
      "options": {
          "a": "The specific genes responsible for a particular trait",
          "b": "The proportion of variability in behavioral traits among individuals attributable to genetic factors",
          "c": "The extent to which a trait can be changed by environmental interventions",
          "d": "The genetic similarity between two individuals"
      },
      "answer": "b"
  },
  {
      "number": 25,
      "text": "What does a heritability score of 0 indicate about a behavioral trait?",
      "options": {
          "a": "Genes may influence the trait, but individual differences are not due to genetic variations.",
          "b": "Genetic factors do not contribute to individual differences in that trait",
          "c": "The environment is the main influence; identical environments would result in no individual differences.",
          "d": "Measurement limitations might obscure any underlying genetic influences on individual differences."
      },
      "answer": "b"
  },
  {
      "number": 26,
      "text": "In what range do most heritability estimates for human behavior fall?",
      "options": {
          "a": "Close to 0 (e.g., .00 to .10)",
          "b": "Close to 1.00 (e.g., .90 to 1.00)",
          "c": "In the moderate range (e.g., .30 to .60)",
          "d": "Exactly 0.50 for all complex traits"
      },
      "answer": "c"
  },
  {
      "number": 27,
      "text": "If the heritability index for intelligence is .50, what does this imply?",
      "options": {
          "a": "95.5% of an individual's intelligence is genetic, the rest environmental",
          "b": "Intelligence is fixed and cannot be influenced by the environment",
          "c": "Half of the variability in intelligence scores within a population is attributable to genetic influences",
          "d": "Environmental factors are twice as important as genetic factors for intelligence"
      },
      "answer": "c"
  },
  {
      "number": 28,
      "text": "Which statement accurately describes heritability?",
      "options": {
          "a": "It indicates the extent to which genetic factors contribute to the expression of a trait in an individual.",
          "b": "It is a population concept, indicating differences across individuals, not within one person.",
          "c": "It represents a general estimate of the genetic influence on a trait within a specific population and environment.",
          "d": "It indirectly reflects the impact of environmental factors by showing the proportion of trait variation not associated with genetic differences."
      },
      "answer": "b" 
  },
  {
      "number": 29,
      "text": "Heritability estimates are meaningful only for the specific environmental conditions in which they were computed because heritability is:",
      "options": {
          "a": "An abstract concept unrelated to the real world",
          "b": "Dependent on the environment",
          "c": "Entirely determined by genetic makeup",
          "d": "A measure of fate or destiny"
      },
      "answer": "b"
  },
  {
      "number": 30,
      "text": "What is a limitation of using heritability estimates?",
      "options": {
          "a": "They cannot identify behavioral traits influenced by genes.",
          "b": "They tell us precisely how an individual will respond to specific environmental conditions.",
          "c": "They do not indicate the degree to which interventions can change a behavioral trait.",
          "d": "They only apply to animal behavior, not human behavior."
      },
      "answer": "c"
  },
  {
      "number": 31,
      "text": "Which of the following represents the three main ways researchers study the link between the human brain and behavior, as outlined in the text?",
      "options": {
          "a": "Dissection, genetic analysis, and historical records",
          "b": "Animal studies, computer modeling, and philosophical inquiry",
          "c": "Studying brain damage, electrical activity, and brain imaging",
          "d": "Psychotherapy, medication trials, and behavioral observation"
      },
      "answer": "c"
  },
  {
      "number": 32,
      "text": "By studying instances where specific brain damage leads to loss of function, neuroscientists can:",
      "options": {
          "a": "Directly observe how neurons repair themselves",
          "b": "Theorize about impaired functions",
          "c": "Develop methods to reverse the brain damage",
          "d": "Map the complete genetic code of the individual"
      },
      "answer": "b"
  },
  {
      "number": 33,
      "text": "What is the concept of neurodiversity?",
      "options": {
          "a": "The notion that while brains share a common basic structure, individual variations have minimal impact on overall cognitive function.",
          "b": "The perspective that significant cognitive differences primarily arise from developmental abnormalities or acquired brain injuries.",
          "c": "The idea of natural variations in brain structure/function leading to cognitive/social/emotional differences",
          "d": "A specific neurological disorder requiring medical intervention"
      },
      "answer": "c"
  },
  {
      "number": 34,
      "text": "The work of Paul Broca in 1861 provided early evidence linking a specific brain area (in the left frontal lobe) to:",
      "options": {
          "a": "Understanding spoken language",
          "b": "Producing spoken language",
          "c": "Processing visual information",
          "d": "Regulating emotional responses"
      },
      "answer": "b"
  },
  {
      "number": 35,
      "text": "Carl Wernicke described a patient whose brain damage (in the upper-left temporal lobe) was associated with difficulty in:",
      "options": {
          "a": "Comprehending language",
          "b": "Producing fluent speech",
          "c": "Controlling voluntary movement",
          "d": "Recognizing familiar faces"
      },
      "answer": "a"
  },
  {
      "number": 36,
      "text": "Broca's area and Wernicke's area provided early evidence suggesting that:",
      "options": {
          "a": "Both language functions are located in the right hemisphere",
          "b": "Speech production and comprehension are located in separate brain areas, often in the left hemisphere",
          "c": "Language processing is distributed evenly across the entire brain",
          "d": "The frontal lobe is solely responsible for all aspects of language"
      },
      "answer": "b"
  },
  {
      "number": 37,
      "text": "The accidental injury to Phineas Gage, where an iron rod passed through his head, offered initial insights into the role of which brain region in personality and emotion?",
      "options": {
          "a": "Cerebellum",
          "b": "Occipital lobe",
          "c": "Frontal lobe",
          "d": "Hippocampus"
      },
      "answer": "c"
  },
  {
      "number": 38,
      "text": "What was the reported major change in Phineas Gage after his accident?",
      "options": {
          "a": "Loss of ability to speak or understand language",
          "b": "Complete paralysis of his limbs below his waist",
          "c": "Change in personality, becoming irritable and irresponsible",
          "d": "Development of extraordinary memory capabilities, such as rembering specific details of past events"
      },
      "answer": "c"
  },
  {
      "number": 39,
      "text": "A split-brain procedure, which involves severing the corpus callosum, is sometimes performed to:",
      "options": {
          "a": "Enhance communication between the brain hemispheres",
          "b": "Treat severe, intractable epilepsy by isolating seizures",
          "c": "Repair damage caused by stroke",
          "d": "Improve language processing abilities"
      },
      "answer": "b"
  },
  {
      "number": 40,
      "text": "What is the primary function of the corpus callosum?",
      "options": {
          "a": "To regulate basic life functions like breathing",          
          "b": "To process sensory information from the body",
          "c": "To control muscle movements and coordination, like balance and fine motor control",
          "d": "To transfer information between the two hemispheres",
      },
      "answer": "d"
  },
  {
      "number": 41,
      "text": "What happens to information entering one hemisphere in a person with a severed corpus callosum (split brain)?",
      "options": {
          "a": "It is processed normally by both hemispheres via other pathways",
          "b": "It generally stays within that hemisphere and does not reach the other",
          "c": "It triggers a seizure across the entire brain",
          "d": "It becomes inaccessible to conscious awareness"
      },
      "answer": "b"
  },
  {
      "number": 42,
      "text": "The experiments conducted by Roger Sperry and colleagues on split-brain patients demonstrated:",
      "options": {
          "a": "That the two hemispheres function identically",
          "b": "That severing the corpus callosum has no effect on behavior",
          "c": "Specialized functions of the left and right hemispheres",
          "d": "The brain's ability to completely rewire itself after surgery"
      },
      "answer": "c"
  },
  {
      "number": 43,
      "text": "The term 'contralateral control' means that the right hemisphere typically controls movement and processes sensation from which side of the body?",
      "options": {
          "a": "The right side",
          "b": "The left side",
          "c": "Both sides equally",
          "d": "The midline of the body"
      },
      "answer": "b"
  },
  {
      "number": 44,
      "text": "In split-brain research, what is a 'chimeric face'?",
      "options": {
          "a": "A computer-generated face created by averaging features from many individuals.",
          "b": "A photograph of a face shown very quickly in an experiment.",
          "c": "A face composed of half of one person's face and half of another's",
          "d": "A face that evokes strong emotional responses"
      },
      "answer": "c"
  },
  {
      "number": 45,
      "text": "What does an EEG primarily measure?",
      "options": {
          "a": "Changes in blood flow within the brain",
          "b": "The electrical activity of groups of neurons",
          "c": "The detailed structure of individual brain cells",
          "d": "The release of neurotransmitters at synapses"
      },
      "answer": "b"
  },
  {
      "number": 46,
      "text": "EEG is particularly useful for determining:",
      "options": {
          "a": "The specific thoughts a person is having",
          "b": "The precise location of cognitive functions",
          "c": "Different states of consciousness",
          "d": "Different chemical composition of brain tissue"
      },
      "answer": "c"
  },
  {
      "number": 47,
      "text": "Clinically, EEG can be used to detect:",
      "options": {
          "a": "Microscopic structural damage",
          "b": "Variations in skull thickness",
          "c": "Abnormal electrical patterns",
          "d": "Differences in white matter pathways"
      },
      "answer": "c"
  },
  {
      "number": 48,
      "text": "What technique did Hubel and Wiesel use in their Nobel Prize-winning research?",
      "options": {
          "a": "Functional magnetic resonance imaging (fMRI)",
          "b": "Electroencephalography (EEG) on human subjects",
          "c": "Studying language deficits in patients with brain damage",
          "d": "Recording action potentials from individual neurons in the visual cortex of cats",
      },
      "answer": "d"
  },
  {
      "number": 49,
      "text": "Hubel and Wiesel's research focused on understanding neuronal activity in which part of the brain?",
      "options": {
          "a": "The frontal lobes, related to planning",
          "b": "The temporal lobes, related to hearing",
          "c": "The occipital lobes, responsible for visual processing",
          "d": "The cerebellum, involved in motor control"
      },
      "answer": "c"
  },
  {
      "number": 50,
      "text": "What are 'feature detectors' as discovered by Hubel and Wiesel?",
      "options": {
          "a": "Brain regions that detect overall levels of light",
          "b": "Neurons in the visual cortex that selectively respond to stimulus features",
          "c": "Cells in the retina that initially capture light",
          "d": "Cortical areas specialized for recognizing complex objects like faces"
      },
      "answer": "b"
  },
  {
      "number": 51,
      "text": "Complementary evidence linking brain areas to function comes from studies showing that damage to a specific cortical area (e.g., for face processing) results in:",
      "options": {
          "a": "Loss or alteration of the type of function processed by neurons in that area",
          "b": "Enhancement of that specific function",
          "c": "No noticeable change in behavior or perception",
          "d": "Improvement in unrelated cognitive abilities"
      },
      "answer": "a"
  },
  {
      "number": 52,
      "text": "Neuroimaging techniques primarily allow researchers to:",
      "options": {
          "a": "Directly manipulate neuronal firing rates",
          "b": "Create images of the structure and/or activity of the living brain",
          "c": "Analyze the genetic makeup influencing brain development",
          "d": "Conduct surgical interventions with high precision"
      },
      "answer": "b"
  },
  {
      "number": 53,
      "text": "What type of information does structural brain imaging (like CT and MRI) provide?",
      "options": {
          "a": "Real-time information about brain activity during a task",
          "b": "Information about the basic structure, shape, and potential abnormalities of the brain",
          "c": "Measurement of electrical signals from the scalp",
          "d": "The level of specific neurotransmitters in different brain regions"
      },
      "answer": "b"
  },
  {
      "number": 54,
      "text": "Functional brain imaging (like PET and fMRI) primarily provides information about:",
      "options": {
          "a": "The static, anatomical structure of the brain",
          "b": "Changes in brain activity (e.g., blood flow, metabolism) while performing tasks",
          "c": "The genetic sequences related to brain function",
          "d": "The pathways of white matter tracts"
      },
      "answer": "b"
  },
  {
      "number": 55,
      "text": "How does a computerized axial tomography (CT) scan generate images of the brain?",
      "options": {
          "a": "By detecting radio waves emitted by molecules in a magnetic field",
          "b": "By measuring electrical activity from the scalp",
          "c": "By taking multiple X-ray photographs from different angles and combining them",
          "d": "By detecting a radioactive tracer injected into the bloodstream"
      },
      "answer": "c"
  },
  {
      "number": 56,
      "text": "What do CT scans primarily show within the brain?",
      "options": {
          "a": "Patterns of neuronal firing",
          "b": "Differences in tissue density",
          "c": "Oxygen levels in the blood",
          "d": "The precise location of neurotransmitter release"
      },
      "answer": "b"
  },
  {
      "number": 57,
      "text": "Magnetic resonance imaging (MRI) creates brain images by:",
      "options": {
          "a": "Using high-energy electromagnetic waves to visualize internal brain structures based on their density.",
          "b": "Measuring electrical potentials on the scalp",
          "c": "Using strong magnetic fields and radio waves to map tissue based on molecular properties",
          "d": "Identifying different brain tissues by tracing the movement and concentration of specific molecules introduced into the bloodstream."
      },
      "answer": "c"
  },
  {
      "number": 58,
      "text": "A key advantage of MRI over CT scans for viewing brain structure is that MRI:",
      "options": {
          "a": "Is significantly faster and less expensive",
          "b": "Provides better resolution images of soft tissue",
          "c": "Measures brain activity directly",
          "d": "Does not require the patient to remain still"
      },
      "answer": "b"
  },
  {
      "number": 59,
      "text": "What specific type of brain structure is visualized using Diffusion Tensor Imaging (DTI)?",
      "options": {
          "a": "Individual neuron cell bodies",
          "b": "White matter pathways",
          "c": "Blood vessels within the brain",
          "d": "Fluid-filled ventricles"
      },
      "answer": "b"
  },
  {
      "number": 60,
      "text": "The primary goal of the Human Connectome Project is to:",
      "options": {
          "a": "Sequence the entire human genome related to the brain",
          "b": "Develop new drugs for every neurological disorders currently know",
          "c": "Create a complete map of the brain's neural connection pathways",
          "d": "Catalog all known types of neurons and thier specific functions"
      },
      "answer": "c"
  },
  {
      "number": 61,
      "text": "Functional imaging techniques like PET and fMRI work on the principle that activated brain areas:",
      "options": {
          "a": "Show decreased electrical activity",
          "b": "Demand more energy, leading to increased blood flow",
          "c": "Become denser and appear brighter on CT scans",
          "d": "Shrink slightly in size"
      },
      "answer": "b"
  },
  {
      "number": 62,
      "text": "How does Positron Emission Tomography (PET) typically measure brain activity?",
      "options": {
          "a": "By detecting magnetic fields produced by electrical activity of specific neurons in the brain",
          "b": "By tracking the location of a harmless radioactive substance injected into the bloodstream",
          "c": "By measuring changes in blood flow using the magnetic fields that it produces",
          "d": "By recording electrical activity in the brain using electrodes on the scalp"
      },
      "answer": "b"
  },
  {
      "number": 63,
      "text": "What does functional Magnetic Resonance Imaging (fMRI) primarily detect to infer brain activity?",
      "options": {
          "a": "The firing rate of individual neurons",
          "b": "The release of specific neurotransmitters",
          "c": "Changes in blood oxygen levels",
          "d": "Structural abnormalities like tumors or lesions"
      },
      "answer": "c"
  },
  {
      "number": 64,
      "text": "Hemoglobin is crucial for fMRI because it is the molecule that:",
      "options": {
          "a": "Transmits nerve impulses",
          "b": "Carries oxygen in the blood",
          "c": "Forms the structure of cell membranes",
          "d": "Synthesizes proteins within neurons"
      },
      "answer": "b"
  },
  {
      "number": 65,
      "text": "Which of the following is an advantage of fMRI over PET?",
      "options": {
          "a": "fMRI uses a radioactive tracer, making it more sensitive",
          "b": "fMRI does not require exposure to radioactivity and has better temporal resolution",
          "c": "PET provides much higher spatial resolution of brain structures",
          "d": "PET scans are significantly quicker to perform"
      },
      "answer": "b"
  },
  {
      "number": 66,
      "text": "What does 'resting state functional connectivity' measure?",
      "options": {
          "a": "Brain activity while a person performs a demanding cognitive task",
          "b": "The physical connections between brain regions via white matter tracts",
          "c": "The correlation of spontaneous activity between different brain regions over time when at rest",
          "d": "The brain's response to external magnetic stimulation"
      },
      "answer": "c"
  },
  {
      "number": 67,
      "text": "In functional connectivity analysis, brain regions whose activity levels are highly correlated over time are considered to be:",
      "options": {
          "a": "Structurally damaged",
          "b": "Functionally connected or part of a network",
          "c": "Operating completely independently",
          "d": "Primarily involved in sensory input"
      },
      "answer": "b"
  },
  {
      "number": 68,
      "text": "The 'default network' identified using functional connectivity is associated with what kinds of cognitive activities?",
      "options": {
          "a": "Processing external sensory information (sight, sound)",
          "b": "Executing precise motor commands",
          "c": "Internally focused thought (e.g., remembering, imagining future, mind wandering)",
          "d": "Basic life support functions (e.g., breathing, heart rate)"
      },
      "answer": "c"
  },
  {
      "number": 69,
      "text": "Understanding brain connectivity (both structural and functional) is believed to have important applications for:",
      "options": {
          "a": "Developing better methods for measuring head circumference",
          "b": "Predicting and characterizing the course of brain disorders like Alzheimer's",
          "c": "Creating artificial general intelligence",
          "d": "Improving the resolution of CT scans"
      },
      "answer": "a"
  },
  {
      "number": 70,
      "text": "The colored 'activation blobs' seen in fMRI (and PET) images usually represent:",
      "options": {
          "a": "The only parts of the brain active during a task",
          "b": "Areas where activity significantly differed between an experimental task and a control task",
          "c": "Long-lasting changes in the physical structure of the brain that are a direct result of the experimental procedure.",
          "d": "A direct visual representation showing the firing of individual nerve cells within the brain in real time."
      },
      "answer": "b"
  },
  {
      "number": 71,
      "text": "Why did Schacter and Loftus express caution about using fMRI to determine witness memory accuracy in courtrooms?",
      "options": {
          "a": "fMRI technology is too expensive for legal applications",
          "b": "Laboratory findings may not generalize to complex real-world events, and group averages don't guarantee individual accuracy",
          "c": "fMRI scans are known to cause memory distortions",
          "d": "Legal standards prohibit the use of any brain imaging evidence"
      },
      "answer": "b"
  },
  {
      "number": 72,
      "text": "What does Transcranial Magnetic Stimulation (TMS) allow researchers to do?",
      "options": {
          "a": "Create high-resolution structural images of the brain",
          "b": "Measure the brain's overall electrical activity non-invasively",
          "c": "Temporarily deactivate specific brain regions to infer their function",
          "d": "Track the flow of radioactive tracers through the brain"
      },
      "answer": "c"
  },
  {
      "number": 73,
      "text": "How does TMS temporarily affect brain regions?",
      "options": {
          "a": "By injecting a chemical substance",
          "b": "By delivering a focused magnetic pulse through the skull",
          "c": "By applying low-level electrical currents",
          "d": "By using high-frequency sound waves"
      },
      "answer": "c"
  },
  {
      "number": 74,
      "text": "TMS primarily affects neurons located in the:",
      "options": {
          "a": "Deep subcortical structures like the amygdala",
          "b": "Brainstem",
          "c": "Cerebral cortex",
          "d": "Spinal cord"
      },
      "answer": "c"
  },
  {
      "number": 75,
      "text": "A key advantage of TMS over studying naturally occurring brain damage is that TMS:",
      "options": {
          "a": "Produces permanent, well-defined lesions",
          "b": "Can only be used on animal subjects",
          "c": "Allows researchers to manipulate brain activity and establish causal relationships",
          "d": "Provides detailed images of brain structure"
      },
      "answer": "c"
  },
  {
      "number": 76,
      "text": "Researchers used TMS on the angular gyrus (part of the default network) to investigate its causal role in:",
      "options": {
          "a": "Processing basic visual features like lines and edges",
          "b": "Controlling fine motor movements",          
          "c": "Understanding spoken language",
          "d": "Remembering past events and imagining future experiences",
      },
      "answer": "d"
  },
  {
      "number": 77,
      "text": "What benefit is gained by combining TMS with fMRI?",
      "options": {
          "a": "It allows TMS to stimulate deeper brain structures",
          "b": "It eliminates the need for a magnetic pulse",
          "c": "It helps researchers precisely localize the brain areas affected by the TMS pulse",
          "d": "It makes the TMS procedure non-invasive"
      },
      "answer": "c"
  },
  {
      "number": 78,
      "text": "What is the most important takeaway regarding the different methods for studying the brain?",
      "options": {
          "a": "fMRI is superior to all other methods",
          "b": "Each method provides specific tools with unique strengths and weaknesses for exploring brain structure or function",
          "c": "Studying brain damage is no longer a useful approach",
          "d": "All methods provide essentially the same information about the brain"
      },
      "answer": "b"
  },
  {
      "number": 79,
      "text": "When choosing a method to study the brain, what is a crucial task for researchers?",
      "options": {
          "a": "Always select the newest available technology",
          "b": "Decide which available tool is most appropriate for their specific scientific question, considering its limitations",
          "c": "Aim to employ a diverse array of brain study methods in each experiment to obtain a comprehensive and converging understanding of neural processes.",
          "d": "Initially concentrate on employing techniques that primarily offer detailed structural insights into the brain's anatomy as a foundational step in the research."
      },
      "answer": "b"
  },
  {
      "number": 80,
      "text": "What indirect and inadequate method was sometimes used in early studies (like Galton's) to estimate brain volume?",
      "options": {
          "a": "Early forms of magnetic resonance imaging (MRI)",
          "b": "Measuring external head circumference",
          "c": "Analyzing electroencephalograph (EEG) patterns",
          "d": "Conducting detailed cognitive tests"
      },
      "answer": "b"
  },
  {
      "number": 81,
      "text": "Modern studies using MRI have typically reported what kind of correlation between overall brain volume and measures of intelligence?",
      "options": {
          "a": "A strong negative correlation",
          "b": "No significant correlation",
          "c": "A positive correlation",
          "d": "A correlation that varies randomly"
      },
      "answer": "c"
  },
  {
      "number": 82,
      "text": "A positive correlation coefficient (like that between brain volume and intelligence) mathematically falls within what range?",
      "options": {
          "a": "Less than 0 (e.g., -0.5)",
          "b": "Greater than 0 up to +1.00",
          "c": "Exactly 0",
          "d": "Greater than +1.00"
      },
      "answer": "b"
  },
  {
      "number": 83,
      "text": "What is the 'third-variable problem' when interpreting a correlation, such as between brain volume and intelligence?",
      "options": {
          "a": "The difficulty in accurately measuring both variables",
          "b": "The possibility that the correlation exists only in specific populations",
          "c": "The potential that an unmeasured factor is influencing both variables",
          "d": "The likelihood that the correlation is purely due to chance"
      },
      "answer": "c"
  },
  {
      "number": 84,
      "text": "What is the UK Biobank?",
      "options": {
          "a": "A specialized brain imaging facility located in the UK that focuses on researching neurological conditions.",
          "b": "A government agency in the UK responsible for regulating and providing ethical oversight for neuroscience research projects.",
          "c": "A large-scale database containing health, genetic, and imaging data from volunteer participants",
          "d": "A scientific journal focused on brain-volume research"
      },
      "answer": "c"
  },
  {
      "number": 85,
      "text": "The large-scale study by Nave et al. (2019) using UK Biobank data analyzed the relationship between MRI-measured brain volume and:",
      "options": {
          "a": "Participants' dietary habits",
          "b": "Measures of physical fitness",
          "c": "Participants' fluid intelligence",
          "d": "Reported levels of happiness"
      },
      "answer": "c"
  },
  {
      "number": 86,
      "text": "Fluid intelligence is best described as the ability to:",
      "options": {
          "a": "Recall facts and previously learned information",
          "b": "Solve novel problems using logic and reasoning",
          "c": "Understand and use language fluently",
          "d": "Navigate social situations effectively"
      },
      "answer": "b"
  },
  {
      "number": 87,
      "text": "After controlling for variables like age, sex, and socioeconomic status, Nave et al. (2019) found what size of correlation between brain volume and fluid intelligence?",
      "options": {
          "a": "A very strong positive correlation (e.g., +.80)",
          "b": "No significant correlation (near 0)",
          "c": "A slightly statistically significant positive correlation (around +.19 to +.27)",
          "d": "A significant negative correlation (e.g., -.20)"
      },
      "answer": "c"
  },
  {
      "number": 88,
      "text": "What do the modest correlations found in large-scale studies suggest about the relationship between brain volume and intelligence?",
      "options": {
          "a": "Brain volume is the single most important factor determining intelligence",
          "b": "Brain volume accounts for only a small portion of the individual differences in intelligence",
          "c": "There is no reliable relationship between brain size and intelligence",
          "d": "Measuring head circumference is a highly accurate predictor of intelligence"
      },
      "answer": "b"
  },
  {
      "number": 89,
      "text": "Why can't we definitively conclude from correlational data that larger brain volume *causes* higher intelligence?",
      "options": {
          "a": "Because the correlation is positive, not negative",
          "b": "Because the sample sizes are too small (even in UK Biobank studies)",
          "c": "Because correlation does not imply causation; intelligence could influence brain volume, or a third variable could influence both",
          "d": "Because MRI technology is not accurate enough to measure volume precisely"
      },
      "answer": "c"
  },
  {
      "number": 90,
      "text": "What is the most reasonable conclusion regarding the 'bigger brain, smarter brain' question?",
      "options": {
          "a": "While overall brain size might not be the sole determinant of intelligence, studies have shown negligible correlation between an individual's brain volume and their cognitive abilities.",
          "b": "A larger head circumference is generally associated with higher academic performance, making it a practical, though not perfect, indicator of intelligence.",
          "c": "There is a statistically significant but modest relationship, though causality isn't proven and volume explains only a small part of intelligence variation.",
          "d": "Scientific evidence strongly indicates that individuals with larger brain volumes consistently demonstrate significantly higher levels of intelligence across various cognitive domains."
      },
      "answer": "c"
  },
       {
        "number": 91,
        "text": "According to the text, hearing depends on what type of physical phenomenon?",
        "options": {
          "a": "Electromagnetic waves",
          "b": "Chemical reactions",
          "c": "Sound waves",
          "d": "Mechanical pressure on the skin"
        },
        "answer": "c"
      },
      {
        "number": 92,
        "text": "Unlike vision, hearing has which characteristic mentioned in the text?",
        "options": {
          "a": "It only works in bright light",
          "b": "It works in the dark, through walls, and around corners",
          "c": "It requires direct line of sight",
          "d": "It is primarily used for detecting color"
        },
        "answer": "b"
      },
      {
        "number": 93,
        "text": "Who was Ray Charles, as described in the text?",
        "options": {
          "a": "A pioneering visual artist who lost his hearing",
          "b": "A pioneering American soul-music singer and songwriter who went blind",
          "c": "A researcher who studied auditory perception",
          "d": "A physician who developed treatments for hearing loss"
        },
        "answer": "b"
      },
      {
        "number": 94,
        "text": "What did Ray Charles consider potentially worse than his blindness?",
        "options": {
          "a": "Losing his sense of touch",
          "b": "Losing his ability to speak",
          "c": "Losing his hearing",
          "d": "Losing his memory"
        },
        "answer": "c"
      },
      {
        "number": 95,
        "text": "What is a 'pure tone' described as in the text?",
        "options": {
          "a": "A complex mixture of sound frequencies",
          "b": "A sound produced only by musical instruments",
          "c": "A simple sound wave with regularly alternating pressure regions",
          "d": "A sound below the threshold of human hearing"
        },
        "answer": "c"
      },
      {
        "number": 96,
        "text": "What causes the eardrum to vibrate when sound is present?",
        "options": {
          "a": "Light waves hitting the ear",
          "b": "Chemical signals in the air",
          "c": "Alternating air pressure waves",
          "d": "Magnetic fields"
        },
        "answer": "c"
      },
      {
        "number": 97,
        "text": "The frequency of a sound wave corresponds to which perceptual dimension?",
        "options": {
          "a": "Loudness",
          "b": "Timbre",
          "c": "Pitch",
          "d": "Location"
        },
        "answer": "c"
      },
      {
        "number": 98,
        "text": "What unit is used to measure the frequency of sound waves?",
        "options": {
          "a": "Decibels (dB)",
          "b": "Hertz (Hz)",
          "c": "Nanometers (nm)",
          "d": "Lumens"
        },
        "answer": "b"
      },
      {
        "number": 99,
        "text": "The amplitude of a sound wave corresponds to which perceptual dimension?",
        "options": {
          "a": "Pitch",
          "b": "Timbre",
          "c": "Loudness",
          "d": "Complexity"
        },
        "answer": "c"
      },
      {
        "number": 100,
        "text": "What unit is typically used to measure the intensity (amplitude) of sound?",
        "options": {
          "a": "Hertz (Hz)",
          "b": "Decibels (dB)",
          "c": "Cycles per second",
          "d": "Nanometers (nm)"
        },
        "answer": "b"
      },
      {
        "number": 101,
        "text": "According to the text, what is the approximate decibel level of normal conversation?",
        "options": {
          "a": "20 dB",
          "b": "60 dB",
          "c": "85 dB",
          "d": "130 dB"
        },
        "answer": "b"
      },
      {
        "number": 102,
        "text": "At what approximate decibel level can sound begin to cause hearing damage, depending on exposure length?",
        "options": {
          "a": "40 dB",
          "b": "60 dB",
          "c": "85 dB",
          "d": "100 dB"
        },
        "answer": "c"
      },
      {
        "number": 103,
        "text": "The complexity of sound waves (mixture of frequencies) corresponds to which perceptual dimension?",
        "options": {
          "a": "Pitch",
          "b": "Loudness",
          "c": "Timbre",
          "d": "Duration"
        },
        "answer": "c"
      },
      {
        "number": 104,
        "text": "What does timbre allow us to do?",
        "options": {
          "a": "Determine the location of a sound",
          "b": "Judge the loudness of a sound",
          "c": "Distinguish two sources with the same pitch and loudness",
          "d": "Measure the frequency of a sound"
        },
        "answer": "c"
      },
      {
        "number": 105,
        "text": "What determines the timbre of a sound, according to the text?",
        "options": {
          "a": "Only the fundamental frequency",
          "b": "Only the overall amplitude",
          "c": "The relative amounts of different frequencies in the mixture",
          "d": "The duration of the sound wave"
        },
        "answer": "c"
      },
      {
        "number": 106,
        "text": "How does the perception of timbre relate to the perception of color?",
        "options": {
          "a": "Both depend on a single wavelength/frequency",
          "b": "Both depend on the relative amounts of different wavelengths/frequencies",
          "c": "Timbre is perceived by the eyes, color by the ears",
          "d": "There is no relationship between them"
        },
        "answer": "b"
      },
      {
        "number": 107,
        "text": "What is the central problem of auditory perception described in the coffee shop example?",
        "options": {
          "a": "Filtering out background noise completely",
          "b": "Determining the exact decibel level of each sound",
          "c": "Reconstructing original sound sources from a complex wave mixture",
          "d": "Identifying the pitch of the espresso machine"
        },
        "answer": "c"
      },
      {
        "number": 108,
        "text": "Which part of the ear is responsible for collecting sound waves and funneling them inward?",
        "options": {
          "a": "Inner ear",
          "b": "Middle ear",
          "c": "Outer ear",
          "d": "Auditory nerve"
        },
        "answer": "c"
      },
      {
        "number": 109,
        "text": "What are the three distinct parts of the human ear mentioned in the text?",
        "options": {
          "a": "Pinna, Cochlea, Eardrum",
          "b": "Outer ear, Middle ear, Inner ear",
          "c": "Ossicles, Auditory Canal, Temporal Lobe",
          "d": "Hammer, Anvil, Stirrup"
        },
        "answer": "b"
      },
      {
        "number": 110,
        "text": "What components make up the outer ear?",
        "options": {
          "a": "Cochlea and auditory nerve",
          "b": "Ossicles and oval window",
          "c": "Pinna, auditory canal, and eardrum",
          "d": "Basilar membrane and hair cells"
        },
        "answer": "c"
      },
      {
        "number": 111,
        "text": "What is the function of the pinna?",
        "options": {
          "a": "To transduce sound into neural signals",
          "b": "To amplify vibrations",
          "c": "To collect sound waves and locate sound sources",
          "d": "To protect the inner ear from loud noises"
        },
        "answer": "c"
      },
      {
        "number": 112,
        "text": "What structure separates the outer ear from the middle ear?",
        "options": {
          "a": "Oval window",
          "b": "Basilar membrane",
          "c": "Eardrum",
          "d": "Cochlea"
        },
        "answer": "c"
      },
      {
        "number": 113,
        "text": "What does the middle ear contain?",
        "options": {
          "a": "Fluid-filled cochlea",
          "b": "Auditory nerve fibers",
          "c": "Pinna and auditory canal",
          "d": "Ossicles (hammer, anvil, stirrup)"
        },
        "answer": "d"
      },
      {
        "number": 114,
        "text": "What is the function of the ossicles?",
        "options": {
          "a": "To collect sound waves",
          "b": "To transduce vibrations into neural signals",
          "c": "To mechanically transmit and amplify vibrations from the eardrum",
          "d": "To maintain balance"
        },
        "answer": "c"
      },
      {
        "number": 115,
        "text": "Why is amplification by the ossicles necessary?",
        "options": {
          "a": "Because the outer ear dampens sound",
          "b": "To overcome the threshold of hearing",
          "c": "Because more energy is needed to create pressure waves in the fluid of the inner ear",
          "d": "To filter out high-frequency sounds"
        },
        "answer": "c"
      },
      {
        "number": 116,
        "text": "What structure separates the middle ear from the inner ear?",
        "options": {
          "a": "Eardrum",
          "b": "Oval window",
          "c": "Round window",
          "d": "Auditory canal"
        },
        "answer": "b"
      },
      {
        "number": 117,
        "text": "What is the cochlea?",
        "options": {
          "a": "The visible part of the outer ear",
          "b": "One of the small bones in the middle ear",
          "c": "A fluid-filled tube in the inner ear where transduction occurs",
          "d": "The nerve that carries signals to the brain"
        },
        "answer": "c"
      },
      {
        "number": 118,
        "text": "What structure within the cochlea moves up and down in time with vibrations?",
        "options": {
          "a": "Eardrum",
          "b": "Ossicles",
          "c": "Basilar membrane",
          "d": "Pinna"
        },
        "answer": "c"
      },
      {
        "number": 119,
        "text": "How does the basilar membrane respond to different sound frequencies?",
        "options": {
          "a": "It vibrates uniformly regardless of frequency",
          "b": "Low frequencies cause maximum movement at the base, high frequencies at the apex",
          "c": "Low frequencies cause maximum movement at the apex, high frequencies at the base",
          "d": "It only responds to frequencies above 1000 Hz"
        },
        "answer": "c"
      },
      {
        "number": 120,
        "text": "What is the apex of the basilar membrane?",
        "options": {
          "a": "The narrow, stiff end near the oval window",
          "b": "The wide, floppy tip end",
          "c": "The middle section responsive to mid-range frequencies",
          "d": "The point where the auditory nerve exits"
        },
        "answer": "b"
      },
      {
        "number": 121,
        "text": "What is the base of the basilar membrane?",
        "options": {
          "a": "The wide, floppy tip end",
          "b": "The narrow, stiff end near the oval window",
          "c": "The entire length of the membrane",
          "d": "The fluid surrounding the membrane"
        },
        "answer": "b"
      },
      {
        "number": 122,
        "text": "What are the inner hair cells?",
        "options": {
          "a": "Cells forming the auditory nerve",
          "b": "Specialized auditory receptor neurons in the basilar membrane",
          "c": "Bones in the middle ear",
          "d": "Protective cells in the outer ear canal"
        },
        "answer": "b"
      },
      {
        "number": 123,
        "text": "What happens to the inner hair cells when the basilar membrane moves?",
        "options": {
          "a": "They retract into the membrane",
          "b": "Their hairs bend back and forth in the cochlear fluid",
          "c": "They release chemical signals into the middle ear",
          "d": "They amplify the sound waves"
        },
        "answer": "b"
      },
      {
        "number": 124,
        "text": "The bending of inner hair cells generates what?",
        "options": {
          "a": "Mechanical vibrations",
          "b": "Fluid pressure waves",
          "c": "Rhythmic action potentials in the auditory nerve",
          "d": "Changes in the shape of the ossicles"
        },
        "answer": "c"
      },
      {
        "number": 125,
        "text": "How is the timing of action potentials from the auditory nerve related to the original sound wave?",
        "options": {
          "a": "It is random",
          "b": "It is precisely timed with the pressure peaks of the sound wave",
          "c": "It corresponds to the silent periods between sounds",
          "d": "It is inversely related to the frequency"
        },
        "answer": "b"
      },
      {
        "number": 126,
        "text": "Which auditory nerve axons fire the most in response to a sound?",
        "options": {
          "a": "Those connected to hair cells that are least stimulated",
          "b": "All axons fire equally",
          "c": "Those connected to hair cells in the area of the basilar membrane that moves the most",
          "d": "Only axons responsive to very low frequencies"
        },
        "answer": "c"
      },
      {
        "number": 127,
        "text": "Where do action potentials from the auditory nerve travel after leaving the inner ear?",
        "options": {
          "a": "Directly to the auditory cortex",
          "b": "To the visual cortex first",
          "c": "To the brainstem, then the thalamus, then the auditory cortex",
          "d": "To the cerebellum for processing"
        },
        "answer": "c"
      },
      {
        "number": 128,
        "text": "What is area A1?",
        "options": {
          "a": "The primary visual cortex",
          "b": "The primary auditory cortex in the temporal lobe",
          "c": "A region in the brainstem processing sound location",
          "d": "The part of the thalamus relaying auditory information"
        },
        "answer": "b"
      },
      {
        "number": 129,
        "text": "The auditory cortex is suggested to have two streams analogous to the visual system. What features are processed by the spatial ('where') stream?",
        "options": {
          "a": "Pitch and timbre",
          "b": "Sound identification ('what')",
          "c": "Location of the sound source",
          "d": "Loudness and duration"
        },
        "answer": "c"
      },
      {
        "number": 130,
        "text": "Where are the 'where' auditory features processed?",
        "options": {
          "a": "In the frontal lobe",
          "b": "In areas towards the back of the temporal lobe",
          "c": "In the lower (ventral) part of the temporal lobe",
          "d": "In the brainstem only"
        },
        "answer": "b"
      },
      {
        "number": 131,
        "text": "What features are processed by the 'what' auditory stream?",
        "options": {
          "a": "Sound source location",
          "b": "Identification of the sound",
          "c": "Timing differences between ears",
          "d": "Movement of the sound source"
        },
        "answer": "b"
      },
      {
        "number": 132,
        "text": "Where are the 'what' auditory features processed?",
        "options": {
          "a": "In areas towards the back of the temporal lobe",
          "b": "In the parietal lobe",
          "c": "In the lower (ventral) part of the temporal lobe",
          "d": "In the thalamus only"
        },
        "answer": "c"
      },
      {
        "number": 133,
        "text": "How is the perceptual attribute of loudness signaled in the auditory system?",
        "options": {
          "a": "By the specific place on the basilar membrane that is activated",
          "b": "By the timing of action potentials",
          "c": "By the total amount of activity in hair cells",
          "d": "By the complexity of the sound wave"
        },
        "answer": "c"
      },
      {
        "number": 134,
        "text": "What is the 'place code' for perceiving pitch?",
        "options": {
          "a": "The timing of action potentials in the auditory nerve",
          "b": "The total number of active hair cells",
          "c": "The brain using information about which specific places on the basilar membrane are active",
          "d": "The location of the sound source in space"
        },
        "answer": "c"
      },
      {
        "number": 135,
        "text": "What is the 'temporal code' for perceiving pitch?",
        "options": {
          "a": "The specific location of activity on the basilar membrane",
          "b": "The brain using the timing (synchronous firing) of action potentials in the auditory nerve",
          "c": "The overall loudness of the sound",
          "d": "The complexity or timbre of the sound"
        },
        "answer": "b"
      },
      {
        "number": 136,
        "text": "How does timbre perception relate to the activity of hair cells?",
        "options": {
          "a": "It depends only on the timing of action potentials",
          "b": "It depends on the total amount of activity",
          "c": "It depends on the relative activity of hair cells across the basilar membrane",
          "d": "It is independent of hair cell activity"
        },
        "answer": "c"
      },
      {
        "number": 137,
        "text": "What are monaural cues for sound localization?",
        "options": {
          "a": "Cues that require both ears",
          "b": "Cues based on the timing difference between ears",
          "c": "Cues based on the intensity difference between ears",
          "d": "Cues that depend on how the pinna alters the sound"
        },
        "answer": "d"
      },
      {
        "number": 138,
        "text": "What are binaural cues for sound localization?",
        "options": {
          "a": "Cues that work with only one ear",
          "b": "Cues based on visual information",
          "c": "Cues based on timing and intensity differences between the two ears",
          "d": "Cues related to the pitch of the sound"
        },
        "answer": "c"
      },
      {
        "number": 139,
        "text": "Why do sounds arrive at slightly different times at the two ears?",
        "options": {
          "a": "Because the speed of light is finite",
          "b": "Because the speed of sound is much slower than light",
          "c": "Because of interference from brain activity",
          "d": "Because the ears process information at different speeds"
        },
        "answer": "b"
      },
      {
        "number": 140,
        "text": "The time difference between ears is most effective for localizing which types of sounds?",
        "options": {
          "a": "High-frequency components",
          "b": "Low-frequency components",
          "c": "Very loud sounds only",
          "d": "Very quiet sounds only"
        },
        "answer": "b"
      },
      {
        "number": 141,
        "text": "Why are higher-frequency sounds more intense in the ear closer to the source?",
        "options": {
          "a": "Because high frequencies travel faster",
          "b": "Because the head blocks higher frequencies more effectively",
          "c": "Because the far ear amplifies low frequencies",
          "d": "Because high frequencies bend around the head easily"
        },
        "answer": "b"
      },
      {
        "number": 142,
        "text": "What is the purpose of turning your head side to side when trying to localize a sound?",
        "options": {
          "a": "To clean the auditory canals",
          "b": "To change the relative intensity and timing cues and use vision",
          "c": "To amplify the sound using the pinnae",
          "d": "To activate the temporal code for pitch"
        },
        "answer": "b"
      },
      {
        "number": 143,
        "text": "How does the auditory system group or segregate sound features into sources?",
        "options": {
          "a": "Based on random assignment",
          "b": "Primarily using visual cues",
          "c": "Using Gestalt principles like similarity, proximity, and common fate",
          "d": "By analyzing only the loudest frequency component"
        },
        "answer": "c"
      },
      {
        "number": 144,
        "text": "Which Gestalt principle suggests that sounds similar in pitch or location are grouped together?",
        "options": {
          "a": "Proximity",
          "b": "Similarity",
          "c": "Closure",
          "d": "Continuity"
        },
        "answer": "b"
      },
      {
        "number": 145,
        "text": "Which Gestalt principle suggests that sounds occurring close together in time are grouped together?",
        "options": {
          "a": "Proximity",
          "b": "Similarity",
          "c": "Common fate",
          "d": "Simplicity"
        },
        "answer": "a"
      },
      {
        "number": 146,
        "text": "What is conductive hearing loss?",
        "options": {
          "a": "Damage to the cochlea or auditory nerve",
          "b": "Damage to the eardrum or ossicles impairing sound conduction",
          "c": "Hearing loss caused by loud noise exposure",
          "d": "Age-related hearing decline"
        },
        "answer": "b"
      },
      {
        "number": 147,
        "text": "In conductive hearing loss, is the cochlea typically normal or damaged?",
        "options": {
          "a": "Damaged",
          "b": "Normal",
          "c": "Completely absent",
          "d": "Replaced by scar tissue"
        },
        "answer": "b"
      },
      {
        "number": 148,
        "text": "What is sensorineural hearing loss?",
        "options": {
          "a": "Damage to the eardrum or ossicles",
          "b": "A temporary blockage of the auditory canal",
          "c": "Damage to the cochlea, hair cells, or auditory nerve",
          "d": "Hearing loss caused only by genetic factors"
        },
        "answer": "c"
      },
      {
        "number": 149,
        "text": "What are the two main effects of sensorineural hearing loss mentioned?",
        "options": {
          "a": "Decreased sensitivity (sounds need to be louder) and decreased acuity (sounds smear)",
          "b": "Increased sensitivity to loud sounds and improved acuity",
          "c": "Loss of balance and tinnitus",
          "d": "Inability to hear low frequencies and perfect pitch for high frequencies"
        },
        "answer": "a"
      },
      {
        "number": 150,
        "text": "Which type of hearing loss is common with aging?",
        "options": {
          "a": "Conductive hearing loss only",
          "b": "Sensorineural hearing loss",
          "c": "Both conductive and sensorineural equally",
          "d": "Neither, hearing improves with age"
        },
        "answer": "b"
      },
      {
        "number": 151,
        "text": "Can hearing aids fix the acuity problem associated with sensorineural hearing loss?",
        "options": {
          "a": "Yes, perfectly",
          "b": "Yes, but only for low frequencies",
          "c": "No, they primarily amplify sounds to help with sensitivity",
          "d": "No, hearing aids are only for conductive loss"
        },
        "answer": "c"
      },
      {
        "number": 152,
        "text": "What is a cochlear implant?",
        "options": {
          "a": "An advanced type of hearing aid that fits inside the canal",
          "b": "A surgical procedure to repair the eardrum",
          "c": "An electronic device replacing the function of hair cells by stimulating the auditory nerve",
          "d": "A device to measure brain activity related to hearing"
        },
        "answer": "c"
      },
      {
        "number": 153,
        "text": "What part of the cochlear implant system is worn externally?",
        "options": {
          "a": "Electrodes inserted into the cochlea",
          "b": "Receiver inside the skull",
          "c": "Microphone, processor, and transmitter",
          "d": "The auditory nerve itself"
        },
        "answer": "c"
      },
      {
        "number": 154,
        "text": "What part of the cochlear implant system is implanted internally?",
        "options": {
          "a": "Microphone and processor",
          "b": "Receiver and electrodes",
          "c": "External transmitter only",
          "d": "Hearing aid battery"
        },
        "answer": "b"
      },
      {
        "number": 155,
        "text": "How does a cochlear implant work?",
        "options": {
          "a": "It amplifies sound mechanically like a hearing aid",
          "b": "It transforms sound into electrical signals that directly stimulate the auditory nerve",
          "c": "It repairs damaged hair cells within the cochlea",
          "d": "It bypasses the ear entirely and stimulates the auditory cortex directly"
        },
        "answer": "b"
      },
      {
        "number": 156,
        "text": "According to the 'Hot Science' box, what percentage of infants born deaf have hearing parents?",
        "options": {
          "a": "Less than 10%",
          "b": "About 50%",
          "c": "More than 90%",
          "d": "Exactly 75%"
        },
        "answer": "c"
      },
      {
        "number": 157,
        "text": "Why are deaf children of hearing parents vulnerable to language disorders?",
        "options": {
          "a": "Due to genetic factors linked to deafness",
          "b": "Because sign language is inherently limited",
          "c": "Because early communication with caregivers using spoken language is crucial",
          "d": "Because cochlear implants interfere with language"
        },
        "answer": "c"
      },
      {
        "number": 158,
        "text": "What does recent evidence (Caselli et al., 2021) suggest about deaf children exposed to ASL by 6 months?",
        "options": {
          "a": "They show delayed language development",
          "b": "They later show age-appropriate vocabulary growth",
          "c": "They struggle to learn spoken language later",
          "d": "They primarily communicate through gestures"
        },
        "answer": "b"
      },
      {
        "number": 159,
        "text": "What is a potential risk associated with cochlear implantation mentioned in the text?",
        "options": {
          "a": "Complete loss of remaining hearing",
          "b": "Increased chance of infections like meningitis",
          "c": "Interference with visual development",
          "d": "Dependence on external batteries"
        },
        "answer": "b"
      },
      {
        "number": 160,
        "text": "The study by Tobey et al. (2013) examined the link between spoken language ability and what factor in children with cochlear implants?",
        "options": {
          "a": "The brand of the implant",
          "b": "The number of electrodes",
          "c": "The age at which the implant was received",
          "d": "The hearing status of the parents"
        },
        "answer": "c"
      },
      {
        "number": 161,
        "text": "What did the results of the Tobey et al. (2013) study show regarding age at implantation?",
        "options": {
          "a": "Age at implantation did not matter for language outcomes",
          "b": "Children implanted later (e.g., 4-5 years) had the best outcomes",
          "c": "Children implanted at younger ages showed performance closer to the normal range",
          "d": "Performance depended only on the time since implantation, not the age it occurred"
        },
        "answer": "c"
      },
      {
        "number": 162,
        "text": "According to the 'Hot Science' box, early cochlear implantation is associated with enhanced development in which areas besides general language ability?",
        "options": {
          "a": "Musical talent and artistic skill",
          "b": "Athletic coordination and balance",
          "c": "Auditory comprehension and reading comprehension",
          "d": "Mathematical reasoning and spatial awareness"
        },
        "answer": "c"
      },
      {
        "number": 163,
        "text": "What is the main conclusion regarding the timing of cochlear implants based on the studies discussed?",
        "options": {
          "a": "It is always best to wait until the child is older",
          "b": "There are disadvantages to waiting to implant a child at an older age",
          "c": "The timing of the implant has no impact on language development",
          "d": "Implants are only effective if done within the first 6 months of life"
        },
        "answer": "b"
      },
      {
        "number": 164,
        "text": "What is the primary topic of Chapter 4?",
        "options": {
          "a": "Memory and Learning",
          "b": "Sensation and Perception",
          "c": "Social Psychology",
          "d": "Neuroscience and Behaviour"
        },
        "answer": "b"
      },
      {
        "number": 165,
        "text": "Which of the following is listed as a main section topic in Chapter 4?",
        "options": {
          "a": "The Chemical Senses: Adding Flavour",
          "b": "Theories of Emotion",
          "c": "Developmental Milestones",
          "d": "Cognitive Biases"
        },
        "answer": "a"
      },
      {
        "number": 166,
        "text": "Daniel Kish uses a form of echolocation, also known as:",
        "options": {
          "a": "Sonar",
          "b": "Radar",
          "c": "Infrared sensing",
          "d": "Magnetic field detection"
        },
        "answer": "a"
      },
      {
        "number": 167,
        "text": "How does Daniel Kish generate the sounds for echolocation?",
        "options": {
          "a": "By snapping his fingers",
          "b": "By using a handheld device",
          "c": "By clicking his tongue against the roof of his mouth",
          "d": "By whistling"
        },
        "answer": "c"
      },
      {
        "number": 168,
        "text": "What information can Daniel Kish obtain from the echoes of his clicks?",
        "options": {
          "a": "Only the distance to objects",
          "b": "Only the presence or absence of objects",
          "c": "Location, size, shape, and material composition of objects",
          "d": "The color and temperature of objects"
        },
        "answer": "c"
      },
      {
        "number": 169,
        "text": "Daniel Kish refers to his echolocation technique as:",
        "options": {
          "a": "Echo vision",
          "b": "Flash sonar",
          "c": "Sound mapping",
          "d": "Click sensing"
        },
        "answer": "b"
      },
      {
        "number": 170,
        "text": "How does Daniel Kish describe the 'vision' obtained through flash sonar?",
        "options": {
          "a": "As precise and clear as normal vision",
          "b": "Like a continuous sort of vision from flashes, a 3D fuzzy geometry",
          "c": "Purely two-dimensional, like a photograph",
          "d": "Focused only on auditory details, not spatial layout"
        },
        "answer": "b"
      },
      {
        "number": 171,
        "text": "Brain imaging studies of flash sonar users like Daniel Kish show activation in which part of the brain during echolocation?",
        "options": {
          "a": "Auditory cortex only",
          "b": "Motor cortex",
          "c": "'Visual' parts of the brain (occipital lobe)",
          "d": "Frontal lobe decision-making areas"
        },
        "answer": "c"
      },
      {
        "number": 172,
        "text": "What is the name of the nonprofit organization founded by Daniel Kish?",
        "options": {
          "a": "Seeing Eye Dogs of America",
          "b": "World Access for the Blind",
          "c": "National Federation of the Blind",
          "d": "Echolocation Education Foundation"
        },
        "answer": "b"
      },
      {
        "number": 173,
        "text": "What fundamental distinction is made at the beginning of the chapter?",
        "options": {
          "a": "Between vision and hearing",
          "b": "Between sensation and perception",
          "c": "Between conscious and unconscious thought",
          "d": "Between learning and memory"
        },
        "answer": "b"
      },
      {
        "number": 174,
        "text": "According to the text, research on sensation and perception forms the basis for understanding more complex processes like:",
        "options": {
          "a": "Muscle coordination",
          "b": "Cellular respiration",
          "c": "Memory, emotion, motivation, and decision making",
          "d": "Digestion and metabolism"
        },
        "answer": "c"
      },
      {
        "number": 175,
        "text": "What is the basic definition of sensation provided?",
        "options": {
          "a": "The interpretation of sensory information",
          "b": "The conscious awareness of the environment",
          "c": "Simple stimulation of a sense organ",
          "d": "The conversion of physical energy to electrical signals"
        },
        "answer": "c"
      },
      {
        "number": 176,
        "text": "What is the basic definition of perception provided?",
        "options": {
          "a": "The detection of physical energy by sense organs",
          "b": "The organization, identification, and interpretation of sensation",
          "c": "The process of sensory adaptation",
          "d": "The firing of sensory neurons"
        },
        "answer": "b"
      },
      {
        "number": 177,
        "text": "In the reading example, the eyes act as the ______ organs, while the brain acts as the ______ organ.",
        "options": {
          "a": "perceptual; sensory",
          "b": "sensory; perceptual",
          "c": "cognitive; emotional",
          "d": "motor; sensory"
        },
        "answer": "b"
      },
      {
        "number": 178,
        "text": "Transduction converts ______ signals into ______ signals.",
        "options": {
          "a": "neural; physical",
          "b": "physical; neural",
          "c": "chemical; electrical",
          "d": "electrical; chemical"
        },
        "answer": "b"
      },
      {
        "number": 179,
        "text": "What happens if you push gently on your closed eyelid, according to the text?",
        "options": {
          "a": "You feel pressure but see nothing",
          "b": "You hear a faint sound",
          "c": "You might perceive sparkly dots (light)",
          "d": "Your eye automatically opens"
        },
        "answer": "c"
      },
      {
        "number": 180,
        "text": "The phenomenon of seeing light when pressure is applied to the eye illustrates what principle?",
        "options": {
          "a": "Sensory adaptation",
          "b": "The brain interprets signals based on the pathway they arrive on (transduction to 'light')",
          "c": "Absolute threshold",
          "d": "Just noticeable difference"
        },
        "answer": "b"
      },
      {
        "number": 181,
        "text": "Why can humans only see a small portion of the electromagnetic spectrum?",
        "options": {
          "a": "Because only visible light frequencies can penetrate the atmosphere",
          "b": "Because those are the only frequencies that exist",
          "c": "Because we only have visual receptors sensitive to those frequencies",
          "d": "Because our brains filter out other frequencies"
        },
        "answer": "c"
      },
      {
        "number": 182,
        "text": "The text mentions that some animals can sense the Earth's magnetic field, which humans cannot. This illustrates:",
        "options": {
          "a": "Sensory adaptation",
          "b": "That our senses detect only a subset of the physical world",
          "c": "The process of transduction",
          "d": "Synesthesia"
        },
        "answer": "b"
      },
      {
        "number": 183,
        "text": "What reason is suggested for why human senses might be limited (related to head size)?",
        "options": {
          "a": "Larger heads would make balance difficult",
          "b": "Evolution favored speed over sensory capacity",
          "c": "Head size at birth is limited by the mother's pelvis, constraining brain/neuron capacity",
          "d": "More sensory input would be too overwhelming to process"
        },
        "answer": "c"
      },
      {
        "number": 184,
        "text": "What is sensory adaptation?",
        "options": {
          "a": "The process of converting physical energy to neural signals",
          "b": "The minimum intensity needed to detect a stimulus",
          "c": "Sensitivity to prolonged stimulation tends to decline over time",
          "d": "The ability to focus on one stimulus among many"
        },
        "answer": "c"
      },
      {
        "number": 185,
        "text": "The example of the smell in a bakery fading after a few minutes illustrates:",
        "options": {
          "a": "Absolute threshold",
          "b": "Just noticeable difference",
          "c": "Sensory adaptation",
          "d": "Transduction"
        },
        "answer": "c"
      },
      {
        "number": 186,
        "text": "Why is sensory adaptation considered useful?",
        "options": {
          "a": "It increases sensitivity to all stimuli",
          "b": "It prevents sensory overload from unchanging stimuli",
          "c": "It speeds up the process of transduction",
          "d": "It enhances our perception of color"
        },
        "answer": "b"
      },
      {
        "number": 187,
        "text": "The phenomenon where a grey cloud around a fixated black dot disappears is called:",
        "options": {
          "a": "Sensory overload",
          "b": "Troxler fading",
          "c": "Blind spot filling-in",
          "d": "Negative afterimage"
        },
        "answer": "b"
      },
      {
        "number": 188,
        "text": "Our sensory systems respond more strongly to ______ stimulation.",
        "options": {
          "a": "constant",
          "b": "prolonged",
          "c": "changes in",
          "d": "familiar"
        },
        "answer": "c"
      },
      {
        "number": 189,
        "text": "What is psychophysics?",
        "options": {
          "a": "The study of paranormal psychological phenomena",
          "b": "The physics of sensory organ function",
          "c": "Methods relating physical stimulus characteristics to observer's perception",
          "d": "The study of how drugs affect perception"
        },
        "answer": "c"
      },
      {
        "number": 190,
        "text": "Measuring the faintest light spot a person can see is an example of determining:",
        "options": {
          "a": "Just noticeable difference",
          "b": "Absolute threshold",
          "c": "Sensory adaptation rate",
          "d": "Signal detection criterion"
        },
        "answer": "b"
      },
      {
        "number": 191,
        "text": "The absolute threshold is the intensity at which a stimulus is detected on what percentage of trials?",
        "options": {
          "a": "10%",
          "b": "25%",
          "c": "50%",
          "d": "100%"
        },
        "answer": "c"
      },
      {
        "number": 192,
        "text": "According to Table 4.1, what is the approximate absolute threshold for touch?",
        "options": {
          "a": "A candle flame 48 km away",
          "b": "A clock's tick 6.1 m away",
          "c": "A fly's wing falling on the cheek from 1 cm away",
          "d": "A teaspoon of sugar in 7.6 litres of water"
        },
        "answer": "c"
      },
      {
        "number": 193,
        "text": "According to Table 4.1, what is the approximate absolute threshold for smell?",
        "options": {
          "a": "A fly's wing on the cheek",
          "b": "One drop of perfume in a six-room area",
          "c": "A clock's tick 6.1 m away",
          "d": "A candle flame 48 km away"
        },
        "answer": "b"
      },
      {
        "number": 194,
        "text": "According to Table 4.1, what is the approximate absolute threshold for taste?",
        "options": {
          "a": "One drop of perfume in six rooms",
          "b": "A teaspoon of sugar in 7.6 litres of water",
          "c": "A fly's wing on the cheek",
          "d": "A clock tick 6.1 m away"
        },
        "answer": "b"
      },
      {
        "number": 195,
        "text": "The graph in Figure 4.1 (Absolute Threshold) shows that the transition from not hearing to hearing is:",
        "options": {
          "a": "Abrupt and sudden",
          "b": "Gradual",
          "c": "Linear",
          "d": "Instantaneous"
        },
        "answer": "b"
      },
      {
        "number": 196,
        "text": "Humans tend to be most sensitive (have the lowest thresholds) to sounds corresponding to:",
        "options": {
          "a": "Very low pipe organ notes",
          "b": "Very high dog whistles",
          "c": "The human voice",
          "d": "Ultrasonic frequencies"
        },
        "answer": "c"
      },
      {
        "number": 197,
        "text": "What is the term for how well we can distinguish two very similar stimuli?",
        "options": {
          "a": "Sensitivity",
          "b": "Acuity",
          "c": "Absolute threshold",
          "d": "Adaptation"
        },
        "answer": "b"
      },
      {
        "number": 198,
        "text": "What is the Just Noticeable Difference (JND)?",
        "options": {
          "a": "The absolute minimum stimulus intensity detectable",
          "b": "The minimal change in a stimulus that can just barely be detected",
          "c": "The point where sensory adaptation occurs",
          "d": "The level of stimulus complexity"
        },
        "answer": "b"
      },
      {
        "number": 199,
        "text": "How does the JND typically change as the intensity of the standard stimulus (S) increases?",
        "options": {
          "a": "It decreases",
          "b": "It stays the same",
          "c": "It increases",
          "d": "It becomes zero"
        },
        "answer": "c"
      },
      {
        "number": 200,
        "text": "What does Weber's Law state?",
        "options": {
          "a": "Absolute threshold is constant across senses",
          "b": "Sensory adaptation occurs at a fixed rate",
          "c": "The JND for a stimulus is a constant proportion of the stimulus intensity",
          "d": "Perception is the sum of individual sensations"
        },
        "answer": "c"
      },
      {
        "number": 201,
        "text": "The example of noticing the difference between a 25g and 50g envelope, but not between a 10kg package and a 10.025kg package, illustrates:",
        "options": {
          "a": "Absolute threshold",
          "b": "Sensory adaptation",
          "c": "Weber's Law",
          "d": "Signal detection theory"
        },
        "answer": "c"
      },
      {
        "number": 202,
        "text": "Why is the assumption that a fixed threshold exists problematic?",
        "options": {
          "a": "Thresholds change constantly due to adaptation",
          "b": "The same person may perceive the same stimulus differently on different occasions",
          "c": "Thresholds are different for different sensory modalities",
          "d": "Physical intensity cannot be accurately measured"
        },
        "answer": "b"
      },
      {
        "number": 203,
        "text": "What is 'noise' in the context of signal detection theory?",
        "options": {
          "a": "Only auditory interference",
          "b": "Any stimulus presented below the absolute threshold",
          "c": "All other stimuli from internal and external environments competing with the signal",
          "d": "Errors made by the observer"
        },
        "answer": "c"
      },
      {
        "number": 204,
        "text": "According to signal detection theory, the response to a stimulus depends on:",
        "options": {
          "a": "Only the physical intensity of the stimulus",
          "b": "Only the observer's motivation",
          "c": "The observer's sensitivity and their decision criterion",
          "d": "The observer's absolute threshold only"
        },
        "answer": "c"
      },
      {
        "number": 205,
        "text": "In signal detection theory, what does an observer compare the sensory evidence to?",
        "options": {
          "a": "The absolute threshold",
          "b": "The JND",
          "c": "An internal decision criterion",
          "d": "The physical properties of the stimulus"
        },
        "answer": "c"
      },
      {
        "number": 206,
        "text": "A radiologist using a liberal criterion for detecting cancer in a mammogram would likely result in:",
        "options": {
          "a": "Missing many true cancers but few false alarms",
          "b": "Minimizing missed cancers but leading to many unnecessary biopsies",
          "c": "An equal number of missed cancers and false alarms",
          "d": "Perfect accuracy with no errors"
        },
        "answer": "b"
      },
      {
        "number": 207,
        "text": "A radiologist using a conservative criterion for detecting cancer would likely result in:",
        "options": {
          "a": "Detecting every possible cancer but many false alarms",
          "b": "Fewer unnecessary biopsies but missing some treatable cancers",
          "c": "An equal number of missed cancers and false alarms",
          "d": "Perfect accuracy with no errors"
        },
        "answer": "b"
      },
      {
        "number": 208,
        "text": "According to 'The Real World: Multitasking', using a cell phone while driving increases accident risk by approximately how much?",
        "options": {
          "a": "Two times",
          "b": "Four times",
          "c": "Ten times",
          "d": "No significant increase"
        },
        "answer": "b"
      },
      {
        "number": 209,
        "text": "Multitasking, like driving while talking on a phone, requires juggling multiple sources of sensory input, highlighting the issue of:",
        "options": {
          "a": "Sensory adaptation",
          "b": "Absolute threshold",
          "c": "Selective attention",
          "d": "Perceptual constancy"
        },
        "answer": "c"
      },
      {
        "number": 210,
        "text": "Research by Shomstein & Yantis (2004) found that when attention is directed to hearing, activity in visual areas tends to:",
        "options": {
          "a": "Increase",
          "b": "Decrease",
          "c": "Remain unchanged",
          "d": "Become synchronized"
        },
        "answer": "b"
      },
      {
        "number": 211,
        "text": "Why are phone conversations considered more distracting while driving than listening to the radio?",
        "options": {
          "a": "Radio signals interfere with car electronics",
          "b": "Phone conversations require more cognitive resources (memory, planning, emotion)",
          "c": "Radio volume is usually lower",
          "d": "Phone use requires holding the device"
        },
        "answer": "b"
      },
      {
        "number": 212,
        "text": "Does using a hands-free phone significantly reduce the risks associated with driving while talking, according to the studies cited?",
        "options": {
          "a": "Yes, it eliminates the risk",
          "b": "Yes, it significantly reduces the risk",
          "c": "No, it makes little difference to the cognitive distraction",
          "d": "The text does not address hands-free devices"
        },
        "answer": "c"
      },
      {
        "number": 213,
        "text": "Compared to driving without texting, texting while driving leads to:",
        "options": {
          "a": "Slightly faster reaction times",
          "b": "Better lane keeping",
          "c": "Dramatically less time looking at the road and difficulty maintaining lane/distance",
          "d": "No significant difference in driving performance"
        },
        "answer": "c"
      },
      {
        "number": 214,
        "text": "The impairing effect of texting while driving is comparable to:",
        "options": {
          "a": "Listening to the radio",
          "b": "Having a passenger in the car",
          "c": "Alcohol consumption and smoking marijuana",
          "d": "Driving in daylight versus nighttime"
        },
        "answer": "c"
      },
      {
        "number": 215,
        "text": "People who report frequent multitasking in everyday life tend to perform how on lab tasks requiring focused attention?",
        "options": {
          "a": "Better than non-multitaskers",
          "b": "The same as non-multitaskers",
          "c": "Worse (more difficulty focusing)",
          "d": "Faster but with more errors"
        },
        "answer": "c"
      },
      {
        "number": 216,
        "text": "What physical property of light waves determines the perception of hue (color)?",
        "options": {
          "a": "Amplitude",
          "b": "Purity",
          "c": "Wavelength",
          "d": "Frequency (used for sound)"
        },
        "answer": "c"
      },
      {
        "number": 217,
        "text": "What physical property of light waves determines the perception of brightness?",
        "options": {
          "a": "Wavelength",
          "b": "Amplitude (intensity)",
          "c": "Purity",
          "d": "Frequency"
        },
        "answer": "b"
      },
      {
        "number": 218,
        "text": "What physical property of light waves relates to the perception of saturation (richness of color)?",
        "options": {
          "a": "Amplitude",
          "b": "Wavelength",
          "c": "Purity (number of wavelengths)",
          "d": "Intensity"
        },
        "answer": "c"
      },
      {
        "number": 219,
        "text": "Which structure does light pass through first when entering the eye?",
        "options": {
          "a": "Lens",
          "b": "Pupil",
          "c": "Cornea",
          "d": "Retina"
        },
        "answer": "c"
      },
      {
        "number": 220,
        "text": "What is the pupil?",
        "options": {
          "a": "The colored part of the eye",
          "b": "The clear outer tissue",
          "c": "A hole in the center of the iris",
          "d": "The light-sensitive tissue at the back"
        },
        "answer": "c"
      },
      {
        "number": 221,
        "text": "What structure controls the size of the pupil?",
        "options": {
          "a": "Cornea",
          "b": "Lens",
          "c": "Retina",
          "d": "Iris"
        },
        "answer": "d"
      },
      {
        "number": 222,
        "text": "What structure changes shape to focus light onto the retina?",
        "options": {
          "a": "Cornea",
          "b": "Iris",
          "c": "Lens",
          "d": "Pupil"
        },
        "answer": "c"
      },
      {
        "number": 223,
        "text": "What is the retina?",
        "options": {
          "a": "The clear outer layer of the eye",
          "b": "The muscle that controls pupil size",
          "c": "The structure that focuses light",
          "d": "The light-sensitive tissue lining the back of the eyeball"
        },
        "answer": "d"
      },
      {
        "number": 224,
        "text": "The process by which the eye maintains a clear image on the retina by changing the lens shape is called:",
        "options": {
          "a": "Transduction",
          "b": "Adaptation",
          "c": "Accommodation",
          "d": "Refraction"
        },
        "answer": "c"
      },
      {
        "number": 225,
        "text": "Nearsightedness (myopia) occurs when the eyeball is too long and images focus:",
        "options": {
          "a": "Behind the retina",
          "b": "In front of the retina",
          "c": "Directly on the optic nerve",
          "d": "Perfectly on the retina"
        },
        "answer": "b"
      },
      {
        "number": 226,
        "text": "Farsightedness (hyperopia) occurs when the eyeball is too short and images focus:",
        "options": {
          "a": "Behind the retina",
          "b": "In front of the retina",
          "c": "Directly on the optic nerve",
          "d": "Perfectly on the retina"
        },
        "answer": "a"
      },
      {
        "number": 227,
        "text": "Which type of photoreceptor cell detects color and operates in daylight?",
        "options": {
          "a": "Rods",
          "b": "Cones",
          "c": "Bipolar cells",
          "d": "Retinal ganglion cells"
        },
        "answer": "b"
      },
      {
        "number": 228,
        "text": "Which type of photoreceptor cell becomes active in low-light conditions for night vision?",
        "options": {
          "a": "Rods",
          "b": "Cones",
          "c": "Bipolar cells",
          "d": "Retinal ganglion cells"
        },
        "answer": "a"
      },
      {
        "number": 229,
        "text": "What kind of information do rods provide?",
        "options": {
          "a": "Color and fine detail",
          "b": "Only shades of grey, no color information",
          "c": "Information about depth",
          "d": "Only information about motion"
        },
        "answer": "b"
      },
      {
        "number": 230,
        "text": "What is the fovea?",
        "options": {
          "a": "The point where the optic nerve leaves the eye",
          "b": "An area of the retina where vision is clearest, containing only cones",
          "c": "The outermost layer of the retina",
          "d": "A structure in the middle ear"
        },
        "answer": "b"
      },
      {
        "number": 231,
        "text": "Where are rods located in the retina?",
        "options": {
          "a": "Only in the fovea",
          "b": "Distributed evenly across the entire retina",
          "c": "Distributed around the retina except in the fovea",
          "d": "Only in the blind spot"
        },
        "answer": "c"
      },
      {
        "number": 232,
        "text": "Why might an astronomer look slightly to the side of a dim star to see it better?",
        "options": {
          "a": "To focus the image directly on the fovea",
          "b": "To focus the image on the periphery where sensitive rods are located",
          "c": "To avoid the blind spot",
          "d": "To engage color vision"
        },
        "answer": "b"
      },
      {
        "number": 233,
        "text": "Which cells in the retina collect signals from rods and cones and transmit them to retinal ganglion cells?",
        "options": {
          "a": "Amacrine cells",
          "b": "Horizontal cells",
          "c": "Bipolar cells",
          "d": "Glial cells"
        },
        "answer": "c"
      },
      {
        "number": 234,
        "text": "Which cells in the retina organize signals and send them to the brain via the optic nerve?",
        "options": {
          "a": "Rods",
          "b": "Cones",
          "c": "Bipolar cells",
          "d": "Retinal ganglion cells (RGCs)"
        },
        "answer": "d"
      },
      {
        "number": 235,
        "text": "What forms the optic nerve?",
        "options": {
          "a": "Bundled axons of bipolar cells",
          "b": "Bundled axons of retinal ganglion cells",
          "c": "Bundled axons of rods and cones",
          "d": "Blood vessels supplying the retina"
        },
        "answer": "b"
      },
      {
        "number": 236,
        "text": "What is the blind spot?",
        "options": {
          "a": "The fovea",
          "b": "Any area of the retina with low cone density",
          "c": "A location in the visual field where the optic nerve leaves the eye (no receptors)",
          "d": "A temporary loss of vision due to bright light"
        },
        "answer": "c"
      },
      {
        "number": 237,
        "text": "Why don't we normally notice our blind spot?",
        "options": {
          "a": "It is too small to detect",
          "b": "Our eyes are constantly moving",
          "c": "Our perceptual system 'fills in' the missing information",
          "d": "The other eye compensates perfectly"
        },
        "answer": "c"
      },
      {
        "number": 238,
        "text": "Where does visual information travel after leaving the optic nerve?",
        "options": {
          "a": "Directly to the visual cortex",
          "b": "To the cerebellum",
          "c": "To the lateral geniculate nucleus (LGN) in the thalamus, then to area V1",
          "d": "To the amygdala"
        },
        "answer": "c"
      },
      {
        "number": 239,
        "text": "Information from the right visual field is processed in which hemisphere of the brain?",
        "options": {
          "a": "Right hemisphere",
          "b": "Left hemisphere",
          "c": "Both hemispheres equally",
          "d": "The brainstem"
        },
        "answer": "b"
      },
      {
        "number": 240,
        "text": "Area V1, the primary visual cortex, is located in which lobe of the brain?",
        "options": {
          "a": "Frontal lobe",
          "b": "Temporal lobe",
          "c": "Parietal lobe",
          "d": "Occipital lobe"
        },
        "answer": "d"
      },
      {
        "number": 241,
        "text": "The perception of color is created by:",
        "options": {
          "a": "The light waves themselves",
          "b": "Pigments in the objects viewed",
          "c": "Our brain interpreting wavelengths of light",
          "d": "The temperature of the light source"
        },
        "answer": "c"
      },
      {
        "number": 242,
        "text": "Which visible wavelengths are perceived as deep purple?",
        "options": {
          "a": "Shortest",
          "b": "Medium",
          "c": "Longest",
          "d": "A mixture of all wavelengths"
        },
        "answer": "a"
      },
      {
        "number": 243,
        "text": "Which visible wavelengths are perceived as red?",
        "options": {
          "a": "Shortest",
          "b": "Medium",
          "c": "Longest",
          "d": "A mixture of all wavelengths"
        },
        "answer": "c"
      },
      {
        "number": 244,
        "text": "How is white light perceived?",
        "options": {
          "a": "From a single, specific wavelength",
          "b": "When no light is present",
          "c": "From a mixture containing about the same amounts of many different wavelengths",
          "d": "Only from the longest wavelengths"
        },
        "answer": "c"
      },
      {
        "number": 245,
        "text": "How many types of cone photoreceptors do humans typically have?",
        "options": {
          "a": "One",
          "b": "Two",
          "c": "Three",
          "d": "Four"
        },
        "answer": "c"
      },
      {
        "number": 246,
        "text": "What wavelengths are the three types of cones (L, M, S) primarily sensitive to?",
        "options": {
          "a": "Long (reddish), Medium (greenish), Short (bluish)",
          "b": "Long (bluish), Medium (greenish), Short (reddish)",
          "c": "Long (yellowish), Medium (cyanish), Short (magentish)",
          "d": "All are sensitive to the entire visible spectrum equally"
        },
        "answer": "a"
      },
      {
        "number": 247,
        "text": "How does the brain interpret color based on cone activity?",
        "options": {
          "a": "By the total activity across all three cone types",
          "b": "By the activity of only one cone type",
          "c": "By the relative levels of activity between pairs of cone types",
          "d": "By comparing cone activity to rod activity"
        },
        "answer": "c"
      },
      {
        "number": 248,
        "text": "What causes color vision deficiency (often called color blindness)?",
        "options": {
          "a": "Damage to the cornea",
          "b": "Absence of rods in the retina",
          "c": "One or more cone types being missing",
          "d": "Clouding of the lens"
        },
        "answer": "c"
      },
      {
        "number": 249,
        "text": "What is a color afterimage?",
        "options": {
          "a": "Seeing colors in the dark",
          "b": "A genetic defect in color perception",
          "c": "Perceiving an opposing color after staring at a color fatigues specific cones",
          "d": "The inability to distinguish certain colors"
        },
        "answer": "c"
      },
      {
        "number": 250,
        "text": "Staring at a red patch leads to a ______ afterimage.",
        "options": {
          "a": "Reddish",
          "b": "Bluish",
          "c": "Greenish",
          "d": "Yellowish"
        },
        "answer": "c"
      },
      {
        "number": 251,
        "text": "Staring at a yellow patch leads to a ______ afterimage.",
        "options": {
          "a": "Reddish",
          "b": "Bluish",
          "c": "Greenish",
          "d": "Yellowish"
        },
        "answer": "b"
      },
      {
        "number": 252,
        "text": "The color-opponent system explains afterimages by proposing that pairs of cone types work in opposition. Which pairs are mentioned?",
        "options": {
          "a": "L-cones vs M-cones, and S-cones vs M-cones",
          "b": "L-cones vs S-cones, and M-cones vs L-cones",
          "c": "Rods vs Cones",
          "d": "L-cones vs Rods, and S-cones vs Rods"
        },
        "answer": "a"
      },
      {
        "number": 253,
        "text": "Neurons in the primary visual cortex (Area V1) are known to respond selectively to what features?",
        "options": {
          "a": "Complex objects like faces",
          "b": "Colors only",
          "c": "Bars and edges in specific orientations",
          "d": "Sounds and visual stimuli equally"
        },
        "answer": "c"
      },
      {
        "number": 254,
        "text": "What is a visual receptive field?",
        "options": {
          "a": "The entire area a person can see",
          "b": "The specific color a neuron responds to",
          "c": "The region of the visual field to which a particular neuron responds",
          "d": "The part of the brain processing visual information"
        },
        "answer": "c"
      },
      {
        "number": 255,
        "text": "The ventral stream of visual processing travels to the ______ lobe and is involved in determining an object's ______.",
        "options": {
          "a": "parietal; location ('where')",
          "b": "temporal; shape and identity ('what')",
          "c": "occipital; color",
          "d": "frontal; movement"
        },
        "answer": "b"
      },
      {
        "number": 256,
        "text": "The dorsal stream of visual processing travels towards the ______ lobe and is involved in determining an object's ______.",
        "options": {
          "a": "temporal; identity ('what')",
          "b": "occipital; shape",
          "c": "parietal; location and movement ('where'/'how')",
          "d": "frontal; color"
        },
        "answer": "c"
      },
      {
        "number": 257,
        "text": "The case of patient DF, who had damage to the ventral stream, demonstrated an inability to ______ objects by sight, but an ability to ______.",
        "options": {
          "a": "locate; name",
          "b": "recognize; guide actions towards them",
          "c": "see color; recognize shape",
          "d": "guide actions towards; recognize"
        },
        "answer": "b"
      },
      {
        "number": 258,
        "text": "Visual form agnosia is the inability to:",
        "options": {
          "a": "Perceive motion",
          "b": "Recognize objects by sight",
          "c": "See colors",
          "d": "Judge distances"
        },
        "answer": "b"
      },
      {
        "number": 259,
        "text": "Damage to the dorsal stream (parietal lobe) can cause difficulty with:",
        "options": {
          "a": "Recognizing faces",
          "b": "Seeing colors",
          "c": "Using vision to guide reaching and grasping",
          "d": "Identifying objects by name"
        },
        "answer": "c"
      },
      {
        "number": 260,
        "text": "What is the 'binding problem' in perception?",
        "options": {
          "a": "How the eyes focus light on the retina",
          "b": "How transduction occurs in different senses",
          "c": "How the brain links features together to perceive unified objects",
          "d": "How sensory adaptation limits perception"
        },
        "answer": "c"
      },
      {
        "number": 261,
        "text": "Parallel processing in the visual system refers to the brain's ability to:",
        "options": {
          "a": "Focus on only one feature at a time",
          "b": "Analyze multiple features (orientation, color, size) simultaneously",
          "c": "Process visual information very slowly",
          "d": "Combine visual and auditory information"
        },
        "answer": "b"
      },
      {
        "number": 262,
        "text": "What is an illusory conjunction?",
        "options": {
          "a": "A hallucination of an object that isn't there",
          "b": "Failure to notice a change in a scene",
          "c": "A perceptual mistake where features from multiple objects are incorrectly combined",
          "d": "Seeing motion where there is none"
        },
        "answer": "c"
      },
      {
        "number": 263,
        "text": "In the study by Treisman and Schmidt (1982), participants shown colored letters flanked by digits sometimes reported seeing:",
        "options": {
          "a": "Only the digits",
          "b": "The letters with incorrect colors (e.g., a blue A instead of a red A)",
          "c": "Letters that were not presented at all",
          "d": "Colors that were not presented at all"
        },
        "answer": "b"
      },
      {
        "number": 264,
        "text": "According to feature-integration theory, what is required to bind individual features together?",
        "options": {
          "a": "Pre-attentive processing",
          "b": "Focused attention",
          "c": "Sensory memory",
          "d": "Bottom-up processing only"
        },
        "answer": "b"
      },
      {
        "number": 265,
        "text": "When do illusory conjunctions typically occur, according to feature-integration theory?",
        "options": {
          "a": "When stimuli are presented for a long time",
          "b": "When attention is highly focused on the features",
          "c": "When it is difficult to pay full attention to the features",
          "d": "When viewing very simple stimuli"
        },
        "answer": "c"
      },
      {
        "number": 266,
        "text": "The study flashing Black and white faces with neutral or angry expressions found that illusory conjunctions (misattributing anger) were more likely to occur:",
        "options": {
          "a": "When anger moved from a Black face to a white face",
          "b": "When anger moved from a white face to a Black face",
          "c": "Equally in both directions",
          "d": "When the faces were shown for a long time"
        },
        "answer": "b"
      },
      {
        "number": 267,
        "text": "The modular view of object recognition suggests that:",
        "options": {
          "a": "All brain areas process all objects equally",
          "b": "Object recognition relies solely on V1 activity",
          "c": "Specialized brain areas (modules) detect specific object categories (faces, places)",
          "d": "Recognition depends on distributed patterns across many regions"
        },
        "answer": "c"
      },
      {
        "number": 268,
        "text": "The distributed representation view of object recognition suggests that:",
        "options": {
          "a": "Only one brain area is active when viewing an object",
          "b": "Specific modules exist for every possible object",
          "c": "Object identification relies on the pattern of activity across multiple brain regions",
          "d": "Recognition happens entirely within the retina"
        },
        "answer": "c"
      },
      {
        "number": 269,
        "text": "Studies recording single neurons in the human temporal lobe found neurons that respond to:",
        "options": {
          "a": "Any visual stimulus",
          "b": "Only simple lines and edges",
          "c": "Specific objects or people viewed from multiple angles or represented by words",
          "d": "Only abstract concepts"
        },
        "answer": "c"
      },
      {
        "number": 270,
        "text": "What is perceptual constancy?",
        "options": {
          "a": "The tendency for perception to change rapidly",
          "b": "The idea that perception remains constant even as sensory signals change",
          "c": "The inability to perceive changes in a scene",
          "d": "The minimum level required for perception"
        },
        "answer": "b"
      },
      {
        "number": 271,
        "text": "Recognizing a friend under different lighting conditions (sunlight vs. blacklight) is an example of:",
        "options": {
          "a": "Sensory adaptation",
          "b": "Perceptual constancy",
          "c": "Illusory conjunction",
          "d": "Change blindness"
        },
        "answer": "b"
      },
      {
        "number": 272,
        "text": "What role does conceptual knowledge play in object recognition?",
        "options": {
          "a": "It is irrelevant; recognition is purely visual",
          "b": "It hinders recognition by creating biases",
          "c": "It helps us understand an object's characteristics and significance, aiding recognition",
          "d": "It is only used for recognizing abstract shapes"
        },
        "answer": "c"
      },
      {
        "number": 273,
        "text": "Gestalt psychology emphasized that we perceive:",
        "options": {
          "a": "Isolated sensory features",
          "b": "Whole objects organized in meaningful ways",
          "c": "Only what we expect to perceive",
          "d": "Random patterns of stimulation"
        },
        "answer": "b"
      },
      {
        "number": 274,
        "text": "The process of grouping and segregating features to create whole objects is called:",
        "options": {
          "a": "Sensory adaptation",
          "b": "Perceptual constancy",
          "c": "Perceptual organization",
          "d": "Feature integration"
        },
        "answer": "c"
      },
      {
        "number": 275,
        "text": "Which Gestalt principle states that the visual system selects the simplest interpretation?",
        "options": {
          "a": "Closure",
          "b": "Continuity",
          "c": "Proximity",
          "d": "Simplicity"
        },
        "answer": "d"
      },
      {
        "number": 276,
        "text": "Which Gestalt principle involves filling in missing elements to perceive complete objects?",
        "options": {
          "a": "Closure",
          "b": "Continuity",
          "c": "Similarity",
          "d": "Common fate"
        },
        "answer": "a"
      },
      {
        "number": 277,
        "text": "Which Gestalt principle involves grouping together edges or contours with the same orientation?",
        "options": {
          "a": "Proximity",
          "b": "Similarity",
          "c": "Continuity",
          "d": "Closure"
        },
        "answer": "c"
      },
      {
        "number": 278,
        "text": "Which Gestalt principle involves grouping together regions that are similar in color, shape, or texture?",
        "options": {
          "a": "Proximity",
          "b": "Continuity",
          "c": "Similarity",
          "d": "Common fate"
        },
        "answer": "c"
      },
      {
        "number": 279,
        "text": "Which Gestalt principle involves grouping together objects that are close together?",
        "options": {
          "a": "Similarity",
          "b": "Continuity",
          "c": "Proximity",
          "d": "Closure"
        },
        "answer": "c"
      },
      {
        "number": 280,
        "text": "Which Gestalt principle involves perceiving elements that move together as parts of a single moving object?",
        "options": {
          "a": "Similarity",
          "b": "Proximity",
          "c": "Common fate",
          "d": "Closure"
        },
        "answer": "c"
      },
      {
        "number": 281,
        "text": "In Gestalt terms, separating an object from its surroundings involves identifying a ______ apart from the ______. ",
        "options": {
          "a": "ground; figure",
          "b": "figure; ground",
          "c": "feature; object",
          "d": "object; feature"
        },
        "answer": "b"
      },
      {
        "number": 282,
        "text": "What cues help distinguish figure from ground?",
        "options": {
          "a": "Color and brightness only",
          "b": "Size (smaller regions tend to be figure) and movement",
          "c": "Texture and shape only",
          "d": "Familiarity and complexity"
        },
        "answer": "b"
      },
      {
        "number": 283,
        "text": "The Rubin vase illusion demonstrates:",
        "options": {
          "a": "Color constancy",
          "b": "A reversible figure-ground relationship",
          "c": "An illusory conjunction",
          "d": "Sensory adaptation"
        },
        "answer": "b"
      },
      {
        "number": 284,
        "text": "fMRI studies of the Rubin vase illusion show greater activity in face-selective areas when people perceive the image as:",
        "options": {
          "a": "A vase",
          "b": "Faces",
          "c": "Both simultaneously",
          "d": "Neither (activity decreases)"
        },
        "answer": "b"
      },
      {
        "number": 285,
        "text": "How does the brain perceive depth from a flat, 2-D retinal image?",
        "options": {
          "a": "It directly senses the third dimension",
          "b": "It relies only on color information",
          "c": "It uses various monocular and binocular visual cues as an 'educated guess'",
          "d": "It measures the physical size of the retinal image"
        },
        "answer": "c"
      },
      {
        "number": 286,
        "text": "What are monocular depth cues?",
        "options": {
          "a": "Cues requiring both eyes",
          "b": "Cues available from the image in one eye",
          "c": "Cues based only on object motion",
          "d": "Cues related to color perception"
        },
        "answer": "b"
      },
      {
        "number": 287,
        "text": "The tendency for parallel lines to seem to converge in the distance is which monocular cue?",
        "options": {
          "a": "Texture gradient",
          "b": "Interposition",
          "c": "Relative size",
          "d": "Linear perspective"
        },
        "answer": "d"
      },
      {
        "number": 288,
        "text": "The tendency for textures to appear less detailed further away is which monocular cue?",
        "options": {
          "a": "Linear perspective",
          "b": "Texture gradient",
          "c": "Interposition",
          "d": "Relative height"
        },
        "answer": "b"
      },
      {
        "number": 289,
        "text": "When one object partly blocks another, giving a cue that the blocking object is closer, this is:",
        "options": {
          "a": "Linear perspective",
          "b": "Relative size",
          "c": "Interposition",
          "d": "Texture gradient"
        },
        "answer": "c"
      },
      {
        "number": 290,
        "text": "The tendency for closer objects to be lower in the visual field is which monocular cue?",
        "options": {
          "a": "Relative height",
          "b": "Linear perspective",
          "c": "Interposition",
          "d": "Familiar size"
        },
        "answer": "a"
      },
      {
        "number": 291,
        "text": "Using the known size of objects (like people) to judge distance based on retinal image size is using the cue of:",
        "options": {
          "a": "Linear perspective",
          "b": "Interposition",
          "c": "Familiar size (or relative size)",
          "d": "Texture gradient"
        },
        "answer": "c"
      },
      {
        "number": 292,
        "text": "What is binocular disparity?",
        "options": {
          "a": "A monocular depth cue",
          "b": "The difference in the retinal images of the two eyes",
          "c": "The tendency for eyes to move together",
          "d": "A defect in color vision"
        },
        "answer": "b"
      },
      {
        "number": 293,
        "text": "How does the brain use binocular disparity to perceive depth?",
        "options": {
          "a": "It ignores the input from one eye",
          "b": "It averages the two images",
          "c": "It computes the difference (disparity) between images to gauge distance",
          "d": "It relies on the absolute size of the images"
        },
        "answer": "c"
      },
      {
        "number": 294,
        "text": "Greater binocular disparity indicates an object is ______, while lesser disparity indicates it is ______.",
        "options": {
          "a": "farther away; closer",
          "b": "closer; farther away",
          "c": "larger; smaller",
          "d": "moving; stationary"
        },
        "answer": "b"
      },
      {
        "number": 295,
        "text": "Who first discussed binocular disparity and invented the stereoscope?",
        "options": {
          "a": "Ernst Weber",
          "b": "Gustav Fechner",
          "c": "Sir Charles Wheatstone",
          "d": "Hermann von Helmholtz"
        },
        "answer": "c"
      },
      {
        "number": 296,
        "text": "Illusions like the Ames room rely on fooling the visual system about:",
        "options": {
          "a": "The color of objects",
          "b": "The motion of objects",
          "c": "How far away objects are (distance)",
          "d": "The brightness of the scene"
        },
        "answer": "c"
      },
      {
        "number": 297,
        "text": "The Ames room uses ______ to make a trapezoidal room appear square when viewed from a specific point.",
        "options": {
          "a": "Binocular disparity",
          "b": "Forced perspective",
          "c": "Motion parallax",
          "d": "Color contrast"
        },
        "answer": "b"
      },
      {
        "number": 298,
        "text": "In the Ames room illusion, why does a person in one corner appear much larger than a person in the other?",
        "options": {
          "a": "The people are actually different sizes",
          "b": "The lighting changes their apparent size",
          "c": "The viewer assumes they are equidistant, so retinal size differences are interpreted as real size differences",
          "d": "Binocular disparity cues are exaggerated"
        },
        "answer": "c"
      },
      {
        "number": 299,
        "text": "Perceiving motion involves encoding information about:",
        "options": {
          "a": "Color and shape",
          "b": "Space and time",
          "c": "Loudness and pitch",
          "d": "Texture and depth"
        },
        "answer": "b"
      },
      {
        "number": 300,
        "text": "Which brain region, part of the dorsal stream, is specialized for perceiving visual motion?",
        "options": {
          "a": "Area V1",
          "b": "Area MT (middle temporal)",
          "c": "Fusiform face area",
          "d": "Lateral geniculate nucleus (LGN)"
        },
        "answer": "b"
      },
      {
        "number": 301,
        "text": "Damage to area MT can cause a deficit in:",
        "options": {
          "a": "Color perception",
          "b": "Object recognition",
          "c": "Motion perception",
          "d": "Depth perception"
        },
        "answer": "c"
      },
      {
        "number": 302,
        "text": "How does the brain account for self-motion (eye/head movements) when perceiving object motion?",
        "options": {
          "a": "It ignores self-motion signals",
          "b": "It assumes all retinal image motion is object motion",
          "c": "It monitors self-motion and 'subtracts' it from retinal motion",
          "d": "It relies solely on auditory cues for motion"
        },
        "answer": "c"
      },
      {
        "number": 303,
        "text": "The waterfall illusion is an example of a motion ______.",
        "options": {
          "a": "threshold",
          "b": "constancy",
          "c": "aftereffect",
          "d": "conjunction"
        },
        "answer": "c"
      },
      {
        "number": 304,
        "text": "The waterfall illusion occurs because:",
        "options": {
          "a": "Staring fatigues motion detectors for one direction, causing opposing detectors to dominate",
          "b": "The brain fills in missing information",
          "c": "Water reflects light in unusual ways",
          "d": "Binocular disparity cues are disrupted"
        },
        "answer": "a"
      },
      {
        "number": 305,
        "text": "fMRI studies show increased activity in which brain region during the waterfall illusion?",
        "options": {
          "a": "V1",
          "b": "LGN",
          "c": "MT",
          "d": "Auditory cortex"
        },
        "answer": "c"
      },
      {
        "number": 306,
        "text": "Perceiving motion from rapidly alternating stationary signals (like casino lights) is called:",
        "options": {
          "a": "Real motion",
          "b": "Apparent motion",
          "c": "Motion aftereffect",
          "d": "Biological motion"
        },
        "answer": "b"
      },
      {
        "number": 307,
        "text": "The ability to perceive motion from minimal cues, like moving dots depicting a person walking, is called:",
        "options": {
          "a": "Apparent motion perception",
          "b": "Biological motion perception",
          "c": "Motion aftereffect",
          "d": "Forced perspective"
        },
        "answer": "b"
      },
      {
        "number": 308,
        "text": "Which brain area is strongly linked to biological motion perception?",
        "options": {
          "a": "Primary visual cortex (V1)",
          "b": "Posterior superior temporal sulcus (STS)",
          "c": "Primary auditory cortex (A1)",
          "d": "Hippocampus"
        },
        "answer": "b"
      },
      {
        "number": 309,
        "text": "The posterior STS region involved in biological motion is functionally connected with which nearby region involved in social processing?",
        "options": {
          "a": "Amygdala",
          "b": "Prefrontal cortex",
          "c": "Temporo-parietal junction (TPJ)",
          "d": "Motor cortex"
        },
        "answer": "c"
      },
      {
        "number": 310,
        "text": "The visual system has excellent ______ acuity, while the auditory system excels at ______ acuity.",
        "options": {
          "a": "temporal; spatial",
          "b": "spatial; temporal",
          "c": "color; pitch",
          "d": "motion; depth"
        },
        "answer": "b"
      },
      {
        "number": 311,
        "text": "Spatial acuity refers to the ability to distinguish stimuli that are close together in ______.",
        "options": {
          "a": "time",
          "b": "frequency",
          "c": "space",
          "d": "intensity"
        },
        "answer": "c"
      },
      {
        "number": 312,
        "text": "Temporal acuity refers to the ability to distinguish stimuli that are close together in ______.",
        "options": {
          "a": "time",
          "b": "location",
          "c": "space",
          "d": "color"
        },
        "answer": "a"
      },
      {
        "number": 313,
        "text": "Events that stimulate multiple senses at the same time are called:",
        "options": {
          "a": "Unisensory",
          "b": "Subliminal",
          "c": "Multisensory",
          "d": "Ambiguous"
        },
        "answer": "c"
      },
      {
        "number": 314,
        "text": "The ventriloquist illusion, where speech seems to come from a moving mouth on screen, occurs because we trust the ______ system more for spatial location.",
        "options": {
          "a": "auditory",
          "b": "visual",
          "c": "tactile",
          "d": "olfactory"
        },
        "answer": "b"
      },
      {
        "number": 315,
        "text": "What is change blindness?",
        "options": {
          "a": "Inability to perceive color",
          "b": "Inability to perceive motion",
          "c": "Failure to detect changes to the visual details of a scene",
          "d": "A temporary loss of vision"
        },
        "answer": "c"
      },
      {
        "number": 316,
        "text": "The study where experimenters swapped places while hidden by a door demonstrated:",
        "options": {
          "a": "Inattentional blindness",
          "b": "Change blindness",
          "c": "Sensory adaptation",
          "d": "Perceptual constancy"
        },
        "answer": "b"
      },
      {
        "number": 317,
        "text": "Change blindness illustrates that our perception of the world is less ______ than we intuitively feel.",
        "options": {
          "a": "accurate",
          "b": "stable",
          "c": "complete",
          "d": "colorful"
        },
        "answer": "c"
      },
      {
        "number": 318,
        "text": "Change blindness is most likely to occur when we fail to focus ______ on the object undergoing change.",
        "options": {
          "a": "memory",
          "b": "attention",
          "c": "sensation",
          "d": "emotion"
        },
        "answer": "b"
      },
      {
        "number": 319,
        "text": "What is inattentional blindness?",
        "options": {
          "a": "Failure to detect changes in a scene",
          "b": "Failure to perceive objects that are not the focus of attention",
          "c": "The inability to recognize familiar objects",
          "d": "Blindness caused by lack of sleep"
        },
        "answer": "b"
      },
      {
        "number": 320,
        "text": "The study with the unicycling clown found that students using ______ were much more likely to fail to notice the clown.",
        "options": {
          "a": "sunglasses",
          "b": "headphones",
          "c": "cell phones",
          "d": "textbooks"
        },
        "answer": "c"
      },
      {
        "number": 321,
        "text": "Inattentional blindness emphasizes that our conscious visual experience is restricted to features selected by:",
        "options": {
          "a": "Peripheral vision",
          "b": "Sensory memory",
          "c": "Focused attention",
          "d": "Long-term memory"
        },
        "answer": "c"
      },
      {
        "number": 322,
        "text": "What is synesthesia, as described in the 'World of Difference' box?",
        "options": {
          "a": "A complete loss of one sense",
          "b": "Enhanced acuity in all senses",
          "c": "When one attribute of a stimulus (e.g., sound) leads to experiencing another attribute (e.g., color)",
          "d": "A type of visual illusion"
        },
        "answer": "c"
      },
      {
        "number": 323,
        "text": "Which musicians are mentioned as experiencing synesthesia?",
        "options": {
          "a": "Mozart and Beethoven",
          "b": "Lorde and Billie Eilish",
          "c": "Elvis Presley and Johnny Cash",
          "d": "Madonna and Michael Jackson"
        },
        "answer": "b"
      },
      {
        "number": 324,
        "text": "What type of synesthesia did novelist Vladimir Nabokov describe?",
        "options": {
          "a": "Seeing sounds as colors",
          "b": "Tasting shapes",
          "c": "Associating letters/sounds with specific colors",
          "d": "Feeling textures when hearing music"
        },
        "answer": "c"
      },
      {
        "number": 325,
        "text": "How common is the type of synesthesia where specific letters are seen in specific colors?",
        "options": {
          "a": "Extremely rare (1 in a million)",
          "b": "About 1 in 10,000",
          "c": "About 1 in 100",
          "d": "Very common (about 1 in 10)"
        },
        "answer": "c"
      },
      {
        "number": 326,
        "text": "Synesthetes who see colors for letters/numbers show enhanced ability in what perceptual task?",
        "options": {
          "a": "Discriminating sounds",
          "b": "Discriminating objective colors",
          "c": "Reading speed",
          "d": "Remembering numbers"
        },
        "answer": "b"
      },
      {
        "number": 327,
        "text": "What evidence suggests a genetic contribution to synesthesia?",
        "options": {
          "a": "Synesthesia can be learned through practice",
          "b": "It only occurs after brain injury",
          "c": "Shared gene alterations were found in families with sound-color synesthesia",
          "d": "All identical twins share the same synesthetic experiences"
        },
        "answer": "c"
      },
      {
        "number": 328,
        "text": "For performers like Lorde and Eilish, synesthesia is described as:",
        "options": {
          "a": "A perceptual anomaly and hindrance",
          "b": "An integral part of their creative process",
          "c": "Something they try to ignore",
          "d": "A recently acquired condition"
        },
        "answer": "b"
      },
        {
          "number": 329,
          "text": "According to the text, what is the primary way the three major kinds of memory storage (sensory, short-term, and long-term) are distinguished?",
          "options": { "a": "The type of information stored", "b": "The brain region involved", "c": "The amount of time the memory is retained", "d": "The accuracy of the memory" },
          "answer": "c"
        },
        {
          "number": 330,
          "text": "What is defined as the process of maintaining information in memory over time?",
          "options": { "a": "Encoding", "b": "Retrieval", "c": "Storage", "d": "Rehearsal" },
          "answer": "c"
        },
        {
          "number": 331,
          "text": "Sensory memory is a type of storage that holds sensory information for:",
          "options": { "a": "A few seconds or less", "b": "Up to a minute", "c": "Several minutes", "d": "Hours or days" },
          "answer": "a"
        },
        {
          "number": 332,
          "text": "In Sperling's (1960) classic experiment on iconic memory, participants viewed three rows of four letters. When asked to recall all 12 letters after a brief flash, what typically happened?",
          "options": { "a": "They recalled almost all the letters perfectly.", "b": "They recalled fewer than half the letters.", "c": "They recalled only the letters from the top row.", "d": "They recalled only the letters from the bottom row." },
          "answer": "b"
        },
        {
          "number": 333,
          "text": "What were the two possible explanations Sperling considered for why participants recalled fewer than half the letters in the whole report condition?",
          "options": { "a": "Poor vision and lack of motivation", "b": "Failure to encode all letters and forgetting during recall", "c": "Distraction by the experimental setup and misunderstanding instructions", "d": "Letters were flashed too quickly and letters were too similar" },
          "answer": "b"
        },
        {
          "number": 334,
          "text": "In Sperling's partial report procedure, what did the tone signal to the participants?",
          "options": { "a": "To start recalling all the letters", "b": "Which specific row of letters to report", "c": "That the experiment was over", "d": "To guess the letters they couldn't see clearly" },
          "answer": "b"
        },
        {
          "number": 335,
          "text": "What did the results of Sperling's partial report procedure (high accuracy when cued immediately) allow him to infer?",
          "options": { "a": "Participants could only encode one row at a time.", "b": "Participants had guessed the correct row.", "c": "Virtually all the letters had been briefly encoded in sensory memory.", "d": "The tone helped participants guess the letters." },
          "answer": "c"
        },
        {
          "number": 336,
          "text": "What happens to performance on Sperling's partial report task if the cueing tone is substantially delayed?",
          "options": { "a": "Performance improves as participants have more time.", "b": "Performance remains high.", "c": "Performance drops significantly because the information fades from sensory memory.", "d": "Performance becomes random." },
          "answer": "c"
        },
        {
          "number": 337,
          "text": "Iconic memory refers to a fast-decaying store of:",
          "options": { "a": "Auditory information", "b": "Visual information", "c": "Tactile information", "d": "Semantic information" },
          "answer": "b"
        },
        {
          "number": 338,
          "text": "Echoic memory refers to a fast-decaying store of:",
          "options": { "a": "Auditory information", "b": "Visual information", "c": "Olfactory information", "d": "Procedural information" },
          "answer": "a"
        },
        {
          "number": 339,
          "text": "Replaying the last few words someone just said in your 'mind's ear' is an example of accessing information held in which memory store?",
          "options": { "a": "Iconic memory", "b": "Echoic memory", "c": "Short-term memory", "d": "Long-term memory" },
          "answer": "b"
        },
        {
          "number": 340,
          "text": "What is the approximate duration of iconic memory decay?",
          "options": { "a": "1/20th of a second", "b": "1 second or less", "c": "About 5 seconds", "d": "15-20 seconds" },
          "answer": "b"
        },
        {
          "number": 341,
          "text": "What is the approximate duration of echoic memory decay, according to Darwin et al. (1972)?",
          "options": { "a": "1 second or less", "b": "About 5 seconds", "c": "15-20 seconds", "d": "Up to a minute" },
          "answer": "b"
        },
        {
          "number": 342,
          "text": "According to Figure 6.6 (Flow of Information), what process is necessary for information to move from sensory memory to short-term memory?",
          "options": { "a": "Encoding", "b": "Retrieval", "c": "Rehearsal", "d": "Attention" },
          "answer": "d"
        },
        {
          "number": 343,
          "text": "What happens to information in sensory memory if it is not attended to?",
          "options": { "a": "It moves to long-term memory.", "b": "It is rehearsed.", "c": "It is lost.", "d": "It remains indefinitely." },
          "answer": "c"
        },
        {
          "number": 344,
          "text": "Short-term memory (STM) is defined as storage that holds nonsensory information for:",
          "options": { "a": "Less than a second", "b": "More than a few seconds but less than a minute", "c": "Several minutes to an hour", "d": "Indefinitely" },
          "answer": "b"
        },
        {
          "number": 345,
          "text": "What happens to information in short-term memory when attention shifts to something else?",
          "options": { "a": "It is automatically transferred to long-term memory.", "b": "It is quickly lost.", "c": "It is strengthened.", "d": "It remains stable for about a minute." },
          "answer": "b"
        },
        {
          "number": 346,
          "text": "In the Peterson & Peterson (1959) study, what task were participants asked to do immediately after seeing consonant strings to prevent rehearsal?",
          "options": { "a": "Recall the letters", "b": "Count backward by 3s", "c": "Look at a blank screen", "d": "Write down the letters" },
          "answer": "b"
        },
        {
          "number": 347,
          "text": "The results of the Peterson & Peterson (1959) study suggest that information can be held in the short-term memory store for approximately how long without rehearsal?",
          "options": { "a": "1-2 seconds", "b": "5 seconds", "c": "15-20 seconds", "d": "About a minute" },
          "answer": "c"
        },
        {
          "number": 348,
          "text": "What is rehearsal?",
          "options": { "a": "The process of transferring information to LTM", "b": "The process of attending to sensory information", "c": "The process of keeping information in STM by mentally repeating it", "d": "The process of combining small pieces of information" },
          "answer": "c"
        },
        {
          "number": 349,
          "text": "How does rehearsal affect the duration of information in short-term memory?",
          "options": { "a": "It shortens the duration.", "b": "It has no effect.", "c": "It essentially resets the clock, giving it another 15-20 seconds.", "d": "It transfers the information immediately to LTM." },
          "answer": "c"
        },
        {
          "number": 350,
          "text": "The serial position effect refers to the observation that which items in a series are most likely to be recalled?",
          "options": { "a": "Only the items in the middle", "b": "Only the first few items", "c": "Only the last few items", "d": "The first few and last few items" },
          "answer": "d"
        },
        {
          "number": 351,
          "text": "Enhanced recall of the first few items in a list is called the:",
          "options": { "a": "Recency effect", "b": "Primacy effect", "c": "Chunking effect", "d": "Rehearsal effect" },
          "answer": "b"
        },
        {
          "number": 352,
          "text": "Why does the primacy effect occur, according to the text?",
          "options": { "a": "These items are still being actively rehearsed in STM.", "b": "These items receive more rehearsals and are more likely to enter LTM.", "c": "These items are inherently more memorable.", "d": "These items benefit from proactive interference." },
          "answer": "b"
        },
        {
          "number": 353,
          "text": "Enhanced recall of the last few items in a list is called the:",
          "options": { "a": "Recency effect", "b": "Primacy effect", "c": "Storage effect", "d": "Attention effect" },
          "answer": "a"
        },
        {
          "number": 354,
          "text": "According to Atkinson & Shiffrin (1968), the recency effect can result from:",
          "options": { "a": "Information being transferred to LTM", "b": "Rehearsing items that are still in STM", "c": "Better initial encoding of the last items", "d": "Reduced interference for the last items" },
          "answer": "b"
        },
        {
          "number": 355,
          "text": "What task, when performed immediately after the presentation of a list, eliminates the recency effect but not the primacy effect (Glanzer & Cunitz, 1966)?",
          "options": { "a": "Immediate recall", "b": "Taking a short break", "c": "Counting backward by 3s", "d": "Rehearsing the first item" },
          "answer": "c"
        },
        {
          "number": 356,
          "text": "The study involving recalling the order of Harry Potter books (Kelley et al., 2013) demonstrated that:",
          "options": { "a": "Only the recency effect occurs for LTM.", "b": "Only the primacy effect occurs for LTM.", "c": "Neither primacy nor recency effects occur for LTM.", "d": "Both primacy and recency effects can be observed in LTM tasks." },
          "answer": "d"
        },
        {
          "number": 357,
          "text": "According to Miller (1956), what is the approximate capacity of short-term memory in terms of meaningful items?",
          "options": { "a": "3 items", "b": "7 items", "c": "12 items", "d": "Unlimited items" },
          "answer": "b"
        },
        {
          "number": 358,
          "text": "What is chunking?",
          "options": { "a": "Repeating information silently.", "b": "Paying attention to sensory input.", "c": "Combining small pieces of information into larger meaningful units.", "d": "Forgetting information over time." },
          "answer": "c"
        },
        {
          "number": 359,
          "text": "How does chunking affect short-term memory?",
          "options": { "a": "It decreases capacity but increases duration.", "b": "It increases the effective capacity.", "c": "It decreases the duration.", "d": "It only affects sensory memory." },
          "answer": "b"
        },
        {
          "number": 360,
          "text": "Working memory, as conceptualized by Baddeley & Hitch (1974), differs from the older concept of STM by emphasizing:",
          "options": { "a": "Only passive storage", "b": "Only visual information", "c": "Active maintenance and manipulation of information", "d": "Unlimited capacity" },
          "answer": "c"
        },
        {
          "number": 361,
          "text": "In Baddeley's model of working memory, which component is responsible for holding and manipulating visual and spatial information?",
          "options": { "a": "Phonological loop", "b": "Central executive", "c": "Episodic buffer", "d": "Visuo-spatial sketchpad" },
          "answer": "d"
        },
        {
          "number": 362,
          "text": "Which component of Baddeley's working memory model deals with verbal and auditory information?",
          "options": { "a": "Phonological loop", "b": "Central executive", "c": "Episodic buffer", "d": "Visuo-spatial sketchpad" },
          "answer": "a"
        },
        {
          "number": 363,
          "text": "What is the role of the central executive in Baddeley's working memory model?",
          "options": { "a": "Storing visual images", "b": "Storing verbal information", "c": "Coordinating subsystems and controlling attention/information flow", "d": "Integrating information into a multidimensional code" },
          "answer": "c"
        },
        {
          "number": 364,
          "text": "Which component of working memory integrates visual and verbal information into a multidimensional code and links to LTM?",
          "options": { "a": "Phonological loop", "b": "Central executive", "c": "Episodic buffer", "d": "Visuo-spatial sketchpad" },
          "answer": "c"
        },
        {
          "number": 365,
          "text": "When using Google Maps to navigate, holding the visual layout in mind uses the ____, while mentally rehearsing street names uses the ____.",
          "options": { "a": "phonological loop; visuo-spatial sketchpad", "b": "visuo-spatial sketchpad; phonological loop", "c": "central executive; episodic buffer", "d": "episodic buffer; central executive" },
          "answer": "b"
        },
        {
          "number": 366,
          "text": "Damage to the phonological loop subsystem is associated with difficulty in:",
          "options": { "a": "Recognizing faces", "b": "Navigating familiar routes", "c": "Holding strings of digits and learning novel words", "d": "Recalling emotional events" },
          "answer": "c"
        },
        {
          "number": 367,
          "text": "Research by Xie et al. (2020) linked higher working memory capacity to:",
          "options": { "a": "Greater resistance to the common cold", "b": "Better athletic performance", "c": "Increased compliance with COVID-19 social distancing guidelines", "d": "Faster reading speed" },
          "answer": "c"
        },
        {
          "number": 368,
          "text": "Brain imaging studies suggest that the central executive component of working memory relies heavily on regions within the:",
          "options": { "a": "Hippocampus", "b": "Temporal lobe", "c": "Occipital lobe", "d": "Frontal lobe" },
          "answer": "d"
        },
        {
          "number": 369,
          "text": "The episodic buffer is thought to play a crucial role in which learning task?",
          "options": { "a": "Learning motor skills", "b": "Learning to recognize words (combining visual/verbal info)", "c": "Learning geographical facts", "d": "Learning emotional responses" },
          "answer": "b"
        },
        {
          "number": 370,
          "text": "What is the general conclusion from current research on working memory training, according to the text?",
          "options": { "a": "It produces large, general improvements in cognitive function.", "b": "It significantly boosts intelligence across the board.", "c": "People learn specific strategies for the trained tasks, with limited broader impact.", "d": "It is most effective for improving long-term memory." },
          "answer": "c"
        },
        {
          "number": 371,
          "text": "Long-term memory (LTM) is characterized by holding information for:",
          "options": { "a": "Less than a second", "b": "Less than a minute", "c": "Hours, days, weeks, or years", "d": "Only as long as it is rehearsed" },
          "answer": "c"
        },
        {
          "number": 372,
          "text": "What is the known capacity limit of long-term memory?",
          "options": { "a": "About 7 items", "b": "About 100 items", "c": "About 1 million items", "d": "No known limits" },
          "answer": "d"
        },
        {
          "number": 373,
          "text": "Bahrick's (2000) research on recalling high school classmates from yearbook photos suggests that:",
          "options": { "a": "LTM fades completely within 10 years.", "b": "LTM recognition can remain remarkably high even after 50 years.", "c": "Recognition memory is much weaker than recall memory.", "d": "Only faces of close friends are stored in LTM." },
          "answer": "b"
        },
        {
          "number": 374,
          "text": "Patient HM underwent surgery that removed parts of his temporal lobes, including the hippocampus, to treat:",
          "options": { "a": "Severe depression", "b": "Intractable epilepsy", "c": "A brain tumor", "d": "Memory loss" },
          "answer": "b"
        },
        {
          "number": 375,
          "text": "What was the primary memory deficit experienced by patient HM after his surgery?",
          "options": { "a": "Inability to retrieve old memories (retrograde amnesia)", "b": "Complete loss of short-term memory", "c": "Inability to form new long-term memories (anterograde amnesia)", "d": "Loss of language abilities" },
          "answer": "c"
        },
        {
          "number": 376,
          "text": "HM's ability to repeat a telephone number indicated that his ______ was relatively intact.",
          "options": { "a": "Long-term memory store", "b": "Short-term memory store", "c": "Sensory memory store", "d": "Episodic buffer" },
          "answer": "b"
        },
        {
          "number": 377,
          "text": "Anterograde amnesia is defined as:",
          "options": { "a": "The inability to retrieve information acquired before an injury", "b": "The inability to transfer new information from STM to LTM", "c": "The loss of sensory memory", "d": "The enhancement of short-term memory" },
          "answer": "b"
        },
        {
          "number": 378,
          "text": "Studies of HM and others with similar damage indicate that the hippocampal region is critical for:",
          "options": { "a": "Storing all long-term memories permanently", "b": "Retrieving very old memories", "c": "Putting new information into the long-term store", "d": "Controlling the visuo-spatial sketchpad" },
          "answer": "c"
        },
        {
          "number": 379,
          "text": "Retrograde amnesia is defined as:",
          "options": { "a": "The inability to retrieve information acquired before a particular date/injury", "b": "The inability to form new long-term memories", "c": "A deficit in working memory capacity", "d": "The loss of iconic memory" },
          "answer": "a"
        },
        {
          "number": 380,
          "text": "The fact that HM had much worse anterograde than retrograde amnesia suggests that:",
          "options": { "a": "The hippocampus stores all long-term memories.", "b": "Short-term memory relies on the hippocampus.", "c": "The hippocampus is not the primary site of long-term storage.", "d": "Retrograde amnesia is always more severe." },
          "answer": "c"
        },
        {
          "number": 381,
          "text": "Where are the different aspects (sights, sounds, smells) of a single memory thought to be stored in the brain?",
          "options": { "a": "Solely within the hippocampus", "b": "Solely within the amygdala", "c": "In different places in the cortex", "d": "Within the short-term memory store" },
          "answer": "c"
        },
        {
          "number": 382,
          "text": "What role is proposed for the hippocampus according to the 'index' theory of memory?",
          "options": { "a": "It permanently stores the entire memory.", "b": "It links together the separate components of a memory stored elsewhere.", "c": "It generates the emotional content of memories.", "d": "It controls the rehearsal process in STM." },
          "answer": "b"
        },
        {
          "number": 383,
          "text": "According to the 'index' view and the cooking analogy, why might the hippocampus become less necessary for a memory over time?",
          "options": { "a": "The memory fades completely.", "b": "The cortex takes over the indexing function.", "c": "Direct connections form between cortical areas, making the index less critical.", "d": "The memory moves to short-term storage." },
          "answer": "c"
        },
        {
          "number": 384,
          "text": "The 'index' theory helps explain why patient HM could remember old memories but not form new ones because:",
          "options": { "a": "His old index entries were intact, but he couldn't create new ones.", "b": "His cortex was damaged, preventing retrieval.", "c": "His short-term memory was completely lost.", "d": "The surgery enhanced his old memories." },
          "answer": "a"
        },
        {
          "number": 385,
          "text": "What is consolidation in the context of memory?",
          "options": { "a": "The process of retrieving a memory", "b": "The process by which memories become stable in the brain", "c": "The process of chunking information", "d": "The process of forgetting unimportant details" },
          "answer": "b"
        },
        {
          "number": 386,
          "text": "Shortly after encoding, memories exist in a state that is:",
          "options": { "a": "Highly stable and resistant", "b": "Permanently stored", "c": "Fragile and easily disrupted", "d": "Only accessible through hypnosis" },
          "answer": "c"
        },
        {
          "number": 387,
          "text": "The type of consolidation that operates over seconds or minutes might explain why:",
          "options": { "a": "People remember childhood events clearly.", "b": "Head injury patients may not recall events just before the crash.", "c": "We recognize faces easily.", "d": "Sleep improves memory." },
          "answer": "b"
        },
        {
          "number": 388,
          "text": "Longer-term consolidation, occurring over days to years, is thought to involve:",
          "options": { "a": "Strengthening of synaptic connections within the hippocampus only.", "b": "Transfer of information from the hippocampus to the cortex.", "c": "A decrease in the number of neurons involved.", "d": "The complete erasure of the hippocampal trace." },
          "answer": "b"
        },
        {
          "number": 389,
          "text": "The temporal gradient often seen in retrograde amnesia (better memory for distant past than recent past) supports the idea of:",
          "options": { "a": "Rapid forgetting from STM", "b": "Long-term consolidation involving transfer from hippocampus", "c": "The limits of sensory memory", "d": "The function of the phonological loop" },
          "answer": "b"
        },
        {
          "number": 390,
          "text": "What activity, often done effortlessly every night, is mentioned as playing an important role in memory consolidation?",
          "options": { "a": "Eating", "b": "Exercising", "c": "Sleeping", "d": "Talking" },
          "answer": "c"
        },
        {
          "number": 391,
          "text": "What is reconsolidation?",
          "options": { "a": "The initial process of stabilizing a new memory.", "b": "The process where recalled memories become vulnerable and must be consolidated again.", "c": "A technique for improving short-term memory capacity.", "d": "The transfer of memory from cortex back to hippocampus." },
          "answer": "b"
        },
        {
          "number": 392,
          "text": "Early evidence for reconsolidation came from studies showing that if an animal retrieves a memory and is then given a drug that blocks consolidation:",
          "options": { "a": "The memory becomes stronger.", "b": "The memory is unaffected.", "c": "Forgetting occurs, even though the memory was previously consolidated.", "d": "Only short-term memory is affected." },
          "answer": "c"
        },
        {
          "number": 393,
          "text": "Forgetting induced by blocking reconsolidation only occurs if:",
          "options": { "a": "The memory is very old.", "b": "The animal is asleep.", "c": "The memory is actively retrieved just before the blocking agent.", "d": "The blocking agent is given long after retrieval." },
          "answer": "c"
        },
        {
          "number": 394,
          "text": "The study involving memories of the Boston Marathon bombing (Kredlow & Otto, 2015) suggested that reconsolidation can be disrupted by:",
          "options": { "a": "Taking a nap", "b": "Actively trying to forget", "c": "Reading an interfering story shortly after memory reactivation", "d": "Thinking about a positive memory instead" },
          "answer": "c"
        },
        {
          "number": 395,
          "text": "In the Boston Marathon study, which group showed the most significant reduction in recalled details a week later?",
          "options": { "a": "The control group (did nothing)", "b": "The group that read a positive story", "c": "The group that read a neutral story", "d": "The group that read a negative story" },
          "answer": "d"
        },
        {
          "number": 396,
          "text": "Research suggests that disrupting reconsolidation might be used to:",
          "options": { "a": "Enhance memory for facts", "b": "Improve short-term memory capacity", "c": "Reduce the impact or detail of traumatic memories", "d": "Speed up learning" },
          "answer": "c"
        },
        {
          "number": 397,
          "text": "Which brain structure, playing a key role in emotional memory, has been implicated in studies where disrupting reconsolidation reduces fear memories?",
          "options": { "a": "Hippocampus", "b": "Frontal lobe", "c": "Cerebellum", "d": "Amygdala" },
          "answer": "d"
        },
        {
          "number": 398,
          "text": "Research suggests that memory storage depends critically on the spaces between neurons, known as:",
          "options": { "a": "Axons", "b": "Dendrites", "c": "Synapses", "d": "Myelin sheaths" },
          "answer": "c"
        },
        {
          "number": 399,
          "text": "What does Donald Hebb's phrase 'Cells that fire together wire together' mean in the context of memory?",
          "options": { "a": "Neurons randomly connect during firing.", "b": "Communication between neurons strengthens their connection.", "c": "Neurons that fire simultaneously deplete their resources.", "d": "Electrical wires are needed for memory." },
          "answer": "b"
        },
        {
          "number": 400,
          "text": "Why was the sea slug Aplysia chosen by Eric Kandel for memory research?",
          "options": { "a": "It has human-like memory capacity.", "b": "It has a very complex brain.", "c": "It has a relatively simple nervous system.", "d": "It learns extremely quickly." },
          "answer": "c"
        },
        {
          "number": 401,
          "text": "In Aplysia, short-term memory (like withdrawing its gill faster after a recent shock) is associated with:",
          "options": { "a": "Growth of new synapses", "b": "Enhanced neurotransmitter release", "c": "Changes in the cell body", "d": "Rewiring of the entire neural circuit" },
          "answer": "b"
        },
        {
          "number": 402,
          "text": "In Aplysia, long-term memory (an enduring response after repeated shocks) involves:",
          "options": { "a": "Temporary increase in neurotransmitters", "b": "Growth of new synaptic connections", "c": "A decrease in neuronal firing", "d": "Changes only in sensory neurons" },
          "answer": "b"
        },
        {
          "number": 403,
          "text": "What is Long-Term Potentiation (LTP)?",
          "options": { "a": "A temporary decrease in synaptic strength", "b": "A process where repeated communication across a synapse strengthens the connection", "c": "The growth of new neurons", "d": "A type of sensory memory" },
          "answer": "b"
        },
        {
          "number": 404,
          "text": "LTP was first demonstrated by Bliss & Lømo (1973) in which brain structure of rats?",
          "options": { "a": "Amygdala", "b": "Cerebellum", "c": "Hippocampus", "d": "Frontal cortex" },
          "answer": "c"
        },
        {
          "number": 405,
          "text": "Which property of LTP supports its role as a potential mechanism for long-term memory storage?",
          "options": { "a": "It is very short-lived.", "b": "It can be induced rapidly and last for a long time.", "c": "It only occurs outside the hippocampus.", "d": "It weakens synaptic connections." },
          "answer": "b"
        },
        {
          "number": 406,
          "text": "What effect do drugs that block LTP have on learning and memory in rats?",
          "options": { "a": "They enhance memory.", "b": "They have no effect.", "c": "They impair memory and maze learning.", "d": "They only affect short-term memory." },
          "answer": "c"
        },
        {
          "number": 407,
          "text": "The early study by Jenkins and Dallenbach (1924) found that recall was better after:",
          "options": { "a": "A period of waking activity", "b": "A period of sleep", "c": "Intense exercise", "d": "Eating a large meal" },
          "answer": "b"
        },
        {
          "number": 408,
          "text": "How did Jenkins and Dallenbach interpret their findings regarding sleep and memory?",
          "options": { "a": "Sleep actively consolidates memories.", "b": "Sleep passively protects memories from interference.", "c": "Sleep causes forgetting.", "d": "Waking activity enhances memory." },
          "answer": "b"
        },
        {
          "number": 409,
          "text": "Targeted Memory Reactivation (TMR) involves:",
          "options": { "a": "Intense studying right before sleep.", "b": "Presenting memory cues (like sounds) during sleep.", "c": "Using drugs to enhance memory during sleep.", "d": "Waking participants up frequently." },
          "answer": "b"
        },
        {
          "number": 410,
          "text": "Studies using TMR have shown that presenting characteristic sounds associated with learned object-locations during sleep leads to:",
          "options": { "a": "Worse memory for those locations.", "b": "No change in memory.", "c": "More accurate memory for the cued locations.", "d": "Memory improvement only if participants wake up." },
          "answer": "c"
        },
        {
          "number": 411,
          "text": "According to Creery et al. (2015), TMR effects during sleep are strongest for:",
          "options": { "a": "Memories that are already very well learned.", "b": "Associations that are not well learned initially.", "c": "Visual memories only.", "d": "Procedural memories." },
          "answer": "b"
        },
        {
          "number": 412,
          "text": "A meta-analysis of TMR studies (Hu et al., 2020) found that TMR effects are statistically significant, but primarily when administered during which stage(s) of sleep?",
          "options": { "a": "Only REM sleep", "b": "Only Stage 1 sleep", "c": "Stage 2 and slow-wave sleep (non-REM)", "d": "Equally effective in all sleep stages" },
          "answer": "c"
        },
        {
          "number": 413,
          "text": "Which learning outcome relates to distinguishing sensory memory from short-term memory?",
          "options": { "a": "Duration and capacity differences", "b": "Role of the hippocampus", "c": "Neural synapse function", "d": "Working memory model elements" },
          "answer": "a"
        },{
          "number": 414,
          "text": "According to the text, the definition of learning emphasizes which three key ideas?",
          "options": { "a": "Instinct, maturation, and reflexes", "b": "Experience, changes in the organism, and relative permanence", "c": "Observation, imitation, and memory", "d": "Reinforcement, punishment, and association" },
          "answer": "b"
        },
        {
          "number": 415,
          "text": "Jennifer, the military nurse, experienced heightened fear and anxiety upon hearing helicopters after her return from Iraq. This is primarily explained by which learning process?",
          "options": { "a": "Operant Conditioning", "b": "Implicit Learning", "c": "Observational Learning", "d": "Classical Conditioning" },
          "answer": "d"
        },
        {
          "number": 416,
          "text": "The gradual reduction in responding to a repeated or prolonged stimulus, like ignoring the sound of traffic after living near a highway for a while, is known as:",
          "options": { "a": "Sensitization", "b": "Extinction", "c": "Habituation", "d": "Discrimination" },
          "answer": "c"
        },
        {
          "number": 417,
          "text": "Eric Kandel's research on the sea slug Aplysia demonstrated which simple forms of learning?",
          "options": { "a": "Classical and Operant Conditioning", "b": "Habituation and Sensitization", "c": "Observational and Implicit Learning", "d": "Taste Aversion and Second-Order Conditioning" },
          "answer": "b"
        },
        {
          "number": 418,
          "text": "If, after being broken into, a person becomes hypersensitive to late-night sounds that previously didn't bother them, this exemplifies:",
          "options": { "a": "Habituation", "b": "Sensitization", "c": "Spontaneous Recovery", "d": "Generalization" },
          "answer": "b"
        },
        {
          "number": 419,
          "text": "Behaviourism, the dominant psychological outlook from the 1930s-1950s, emphasized the study of learning through:",
          "options": { "a": "Mental states and consciousness", "b": "Observable, quantifiable behaviour", "c": "Unconscious processes and early experiences", "d": "Cognitive expectations and interpretations" },
          "answer": "b"
        },
        {
          "number": 420,
          "text": "John B. Watson, a key figure in behaviourism, was heavily influenced by the work of which researcher?",
          "options": { "a": "Sigmund Freud", "b": "Edward Thorndike", "c": "Ivan Pavlov", "d": "B. F. Skinner" },
          "answer": "c"
        },
        {
          "number": 421,
          "text": "In Pavlov's experiments, the food presented to the dogs served as the:",
          "options": { "a": "Conditioned Stimulus (CS)", "b": "Unconditioned Stimulus (US)", "c": "Conditioned Response (CR)", "d": "Unconditioned Response (UR)" },
          "answer": "b"
        },
        {
          "number": 422,
          "text": "The dogs' salivation in response to the food in Pavlov's experiments was the:",
          "options": { "a": "Conditioned Stimulus (CS)", "b": "Unconditioned Stimulus (US)", "c": "Conditioned Response (CR)", "d": "Unconditioned Response (UR)" },
          "answer": "d"
        },
        {
          "number": 423,
          "text": "Classical conditioning occurs when:",
          "options": { "a": "A behaviour is followed by reinforcement", "b": "A neutral stimulus produces a response after being paired with a stimulus that naturally produces that response", "c": "An organism learns by observing others", "d": "Learning occurs without conscious awareness of the process" },
          "answer": "b"
        },
        {
          "number": 424,
          "text": "In Pavlov's studies, the buzzer or metronome, after being paired with food, became the:",
          "options": { "a": "Conditioned Stimulus (CS)", "b": "Unconditioned Stimulus (US)", "c": "Conditioned Response (CR)", "d": "Unconditioned Response (UR)" },
          "answer": "a"
        },
        {
          "number": 425,
          "text": "The dogs' salivation to the sound of the buzzer or metronome alone was the:",
          "options": { "a": "Conditioned Stimulus (CS)", "b": "Unconditioned Stimulus (US)", "c": "Conditioned Response (CR)", "d": "Unconditioned Response (UR)" },
          "answer": "c"
        },
        {
          "number": 426,
          "text": "The phase of classical conditioning where the CS and US are presented together is called:",
          "options": { "a": "Extinction", "b": "Acquisition", "c": "Spontaneous Recovery", "d": "Generalization" },
          "answer": "b"
        },
        {
          "number": 427,
          "text": "If a dog conditioned to salivate to a ticking metronome also salivates to a similar ticking sound, this demonstrates:",
          "options": { "a": "Discrimination", "b": "Extinction", "c": "Generalization", "d": "Second-Order Conditioning" },
          "answer": "c"
        },
        {
          "number": 428,
          "text": "The gradual elimination of a learned response when the CS is repeatedly presented without the US is known as:",
          "options": { "a": "Acquisition", "b": "Spontaneous Recovery", "c": "Extinction", "d": "Sensitization" },
          "answer": "c"
        },
        {
          "number": 429,
          "text": "After a period of rest following extinction, the reappearance of the conditioned response when the CS is presented again is called:",
          "options": { "a": "Reacquisition", "b": "Spontaneous Recovery", "c": "Generalization", "d": "Habituation" },
          "answer": "b"
        },
        {
          "number": 430,
          "text": "The capacity to distinguish between similar but distinct stimuli is known as:",
          "options": { "a": "Generalization", "b": "Discrimination", "c": "Extinction", "d": "Acquisition" },
          "answer": "b"
        },
        {
          "number": 431,
          "text": "In the Little Albert experiment, the loud noise produced by striking a steel bar was the:",
          "options": { "a": "Conditioned Stimulus (CS)", "b": "Unconditioned Stimulus (US)", "c": "Conditioned Response (CR)", "d": "Unconditioned Response (UR)" },
          "answer": "b"
        },
        {
          "number": 432,
          "text": "In the Little Albert experiment, the white rat, initially a neutral object, became the:",
          "options": { "a": "Conditioned Stimulus (CS)", "b": "Unconditioned Stimulus (US)", "c": "Conditioned Response (CR)", "d": "Unconditioned Response (UR)" },
          "answer": "a"
        },
        {
          "number": 433,
          "text": "Little Albert's fear response to the white rat alone was the:",
          "options": { "a": "Conditioned Stimulus (CS)", "b": "Unconditioned Stimulus (US)", "c": "Conditioned Response (CR)", "d": "Unconditioned Response (UR)" },
          "answer": "c"
        },
        {
          "number": 434,
          "text": "Little Albert's fear of other furry objects like a rabbit and a Santa Claus mask demonstrated:",
          "options": { "a": "Stimulus Discrimination", "b": "Stimulus Generalization", "c": "Extinction", "d": "Spontaneous Recovery" },
          "answer": "b"
        },
        {
          "number": 435,
          "text": "One of Watson's main goals with the Little Albert study was to show that:",
          "options": { "a": "Fear is an innate, unlearned emotion", "b": "Complex emotional responses could be classically conditioned", "c": "Phobias are primarily caused by unconscious conflicts", "d": "Operant conditioning is more powerful than classical conditioning" },
          "answer": "b"
        },
        {
          "number": 436,
          "text": "Therapies for trauma-induced fears often involve repeatedly exposing individuals to trauma-related cues in a safe setting. This technique is based on the principle of:",
          "options": { "a": "Acquisition", "b": "Generalization", "c": "Extinction", "d": "Sensitization" },
          "answer": "c"
        },
        {
          "number": 437,
          "text": "Advertisers often pair their products with attractive people or pleasant music. This strategy relies on creating:",
          "options": { "a": "Operantly conditioned preferences", "b": "Conditioned emotional responses", "c": "Implicit learning associations", "d": "Habituated responses" },
          "answer": "b"
        },
        {
          "number": 438,
          "text": "The Rescorla-Wagner model introduced which element into the understanding of classical conditioning?",
          "options": { "a": "The role of evolutionary preparedness", "b": "The importance of the cerebellum", "c": "The concept of cognitive expectations", "d": "The necessity of biological reinforcers" },
          "answer": "c"
        },
        {
          "number": 439,
          "text": "According to the Rescorla-Wagner model, why didn't Pavlov himself become a reliable CS for salivation in his dogs?",
          "options": { "a": "Pavlov was not presented immediately before the food.", "b": "The dogs discriminated between Pavlov and the feeders.", "c": "Pavlov was associated with many activities, not just reliably predicting food.", "d": "Human stimuli cannot become conditioned stimuli for dogs." },
          "answer": "c"
        },
        {
          "number": 440,
          "text": "The Rescorla-Wagner model predicts that conditioning is easier when the CS is:",
          "options": { "a": "Familiar", "b": "Complex", "c": "Unfamiliar", "d": "Biologically relevant" },
          "answer": "c"
        },
        {
          "number": 441,
          "text": "Research by Richard Thompson on eyeblink conditioning in rabbits identified which brain structure as critical for this type of classical conditioning?",
          "options": { "a": "Amygdala", "b": "Hippocampus", "c": "Cerebellum", "d": "Hypothalamus" },
          "answer": "c"
        },
        {
          "number": 442,
          "text": "The central nucleus of the amygdala is crucial for which type of conditioning?",
          "options": { "a": "Eyeblink conditioning", "b": "Taste aversion conditioning", "c": "Emotional conditioning, particularly fear", "d": "Operant conditioning" },
          "answer": "c"
        },
        {
          "number": 443,
          "text": "In fear conditioning studies with rats, if the connection between the amygdala and the midbrain is disrupted, what outcome is observed?",
          "options": { "a": "The rat does not show autonomic fear responses (heart rate increase).", "b": "The rat does not exhibit the behavioural freezing response.", "c": "The rat cannot learn the association between the CS and US.", "d": "The rat shows exaggerated fear responses." },
          "answer": "b"
        },
        {
          "number": 444,
          "text": "If the connection between the amygdala and the hypothalamus is severed in a fear-conditioned rat, what happens?",
          "options": { "a": "The rat no longer freezes in response to the CS.", "b": "The rat forgets the association between the CS and US.", "c": "The rat fails to show autonomic responses (heart rate, hormones) associated with fear.", "d": "The rat shows increased generalization of fear." },
          "answer": "c"
        },
        {
          "number": 445,
          "text": "The development of taste aversions, where an organism learns to avoid a food after a single instance of illness, often hours later, highlights the role of what in classical conditioning?",
          "options": { "a": "Cognitive expectancy", "b": "Neural pathways in the cerebellum", "c": "Evolutionary adaptiveness and biological preparedness", "d": "Second-order conditioning principles" },
          "answer": "c"
        },
        {
          "number": 446,
          "text": "Which of the following is NOT a typical characteristic of learned taste aversions explained by evolutionary principles?",
          "options": { "a": "Learning can occur in one or two trials.", "b": "Conditioning can span long intervals (hours).", "c": "Aversion develops primarily to visual cues of the food.", "d": "Aversions occur more readily with novel foods." },
          "answer": "c"
        },
        {
          "number": 447,
          "text": "Garcia's research on taste aversion in rats found that conditioning was strongest when the CS was:",
          "options": { "a": "A visual stimulus (light)", "b": "An auditory stimulus (tone)", "c": "A tactile stimulus (shock)", "d": "A distinct taste or smell" },
          "answer": "d"
        },
        {
          "number": 448,
          "text": "The propensity for learning particular kinds of associations over others (e.g., taste aversion in rats vs. visual aversion in birds) is known as:",
          "options": { "a": "Latent learning", "b": "Biological preparedness", "c": "Stimulus control", "d": "Higher-order conditioning" },
          "answer": "b"
        },
        {
          "number": 449,
          "text": "Giving cancer patients an unusual-flavored candy before chemotherapy to prevent aversion to other foods is an application derived from research on:",
          "options": { "a": "Fear conditioning", "b": "Eyeblink conditioning", "c": "Taste aversion learning", "d": "Operant conditioning schedules" },
          "answer": "c"
        },
        {
          "number": 450,
          "text": "Shepard Siegel's research suggests that drug overdoses often occur in experienced users when:",
          "options": { "a": "They take a significantly larger dose than usual.", "b": "They combine multiple drugs.", "c": "They take the usual dose but in an unfamiliar setting.", "d": "Their tolerance has decreased due to abstinence." },
          "answer": "c"
        },
        {
          "number": 451,
          "text": "According to Siegel's model of drug tolerance and overdose, the environmental cues associated with drug use (paraphernalia, setting) act as the:",
          "options": { "a": "Unconditioned Stimulus (US)", "b": "Conditioned Stimulus (CS)", "c": "Unconditioned Response (UR)", "d": "Conditioned Response (CR)" },
          "answer": "b"
        },
        {
          "number": 452,
          "text": "In Siegel's model, the body's physiological reactions that counteract the drug's effects (e.g., speeding up breathing in response to heroin) represent the:",
          "options": { "a": "Unconditioned Stimulus (US)", "b": "Conditioned Stimulus (CS)", "c": "Unconditioned Response (UR)", "d": "Conditioned Response (CR - compensatory reaction)" },
          "answer": "d"
        },
        {
          "number": 453,
          "text": "Drug tolerance develops, according to classical conditioning principles, because:",
          "options": { "a": "The drug itself becomes less potent over time.", "b": "The body develops compensatory conditioned responses to cues associated with drug use.", "c": "The user learns to metabolize the drug more efficiently.", "d": "The user seeks out increasingly larger doses purely for psychological reasons." },
          "answer": "b"
        },
        {
          "number": 454,
          "text": "Cue exposure therapies for addiction aim to:",
          "options": { "a": "Reinforce abstinence behaviors.", "b": "Punish drug-seeking behaviors.", "c": "Extinguish the conditioned compensatory responses elicited by drug-related cues.", "d": "Teach users how to use drugs more safely in familiar environments." },
          "answer": "c"
        },
        {
          "number": 455,
          "text": "Operant conditioning primarily studies behaviours that are:",
          "options": { "a": "Reactive and involuntary", "b": "Reflexive and innate", "c": "Active and voluntary", "d": "Learned through observation" },
          "answer": "c"
        },
        {
          "number": 456,
          "text": "Edward L. Thorndike's research with cats in puzzle boxes focused on what type of behaviour?",
          "options": { "a": "Respondent behaviour", "b": "Classical conditioning", "c": "Instrumental behaviour", "d": "Observational learning" },
          "answer": "c"
        },
        {
          "number": 457,
          "text": "Thorndike's Law of Effect states that:",
          "options": { "a": "Learning occurs through association between stimuli.", "b": "Behaviours followed by satisfying consequences are more likely to be repeated.", "c": "Observation is sufficient for learning complex behaviours.", "d": "Punishment is more effective than reinforcement in shaping behaviour." },
          "answer": "b"
        },
        {
          "number": 458,
          "text": "How did the learning situation in Thorndike's experiments differ fundamentally from Pavlov's?",
          "options": { "a": "Thorndike used cats, while Pavlov used dogs.", "b": "In Thorndike's setup, the animal's behaviour determined the outcome (food).", "c": "Pavlov measured salivation, while Thorndike measured escape time.", "d": "Thorndike's research involved punishment, while Pavlov's did not." },
          "answer": "b"
        },
        {
          "number": 459,
          "text": "B. F. Skinner coined the term ______ to refer to behaviour that an organism performs that has some impact on the environment.",
          "options": { "a": "Respondent behaviour", "b": "Classical behaviour", "c": "Operant behaviour", "d": "Instrumental behaviour" },
          "answer": "c"
        },
        {
          "number": 460,
          "text": "In Skinner's terminology, a reinforcer is any stimulus or event that ______ the likelihood of the behaviour that led to it.",
          "options": { "a": "Decreases", "b": "Has no effect on", "c": "Increases", "d": "Extinguishes" },
          "answer": "c"
        },
        {
          "number": 461,
          "text": "A punisher, according to Skinner, is any stimulus or event that ______ the likelihood of the behaviour that led to it.",
          "options": { "a": "Decreases", "b": "Has no effect on", "c": "Increases", "d": "Generalizes" },
          "answer": "a"
        },
        {
          "number": 462,
          "text": "Presenting a desired stimulus (like food) to increase a behaviour is called:",
          "options": { "a": "Positive Reinforcement", "b": "Negative Reinforcement", "c": "Positive Punishment", "d": "Negative Punishment" },
          "answer": "a"
        },
        {
          "number": 463,
          "text": "Removing an unpleasant stimulus (like stopping a shock) to increase a behaviour is called:",
          "options": { "a": "Positive Reinforcement", "b": "Negative Reinforcement", "c": "Positive Punishment", "d": "Negative Punishment" },
          "answer": "b"
        },
        {
          "number": 464,
          "text": "Administering an unpleasant stimulus (like a scolding) to decrease a behaviour is called:",
          "options": { "a": "Positive Reinforcement", "b": "Negative Reinforcement", "c": "Positive Punishment", "d": "Negative Punishment" },
          "answer": "c"
        },
        {
          "number": 465,
          "text": "Removing a desired stimulus (like taking away driving privileges) to decrease a behaviour is called:",
          "options": { "a": "Positive Reinforcement", "b": "Negative Reinforcement", "c": "Positive Punishment", "d": "Negative Punishment" },
          "answer": "d"
        },
        {
          "number": 466,
          "text": "A parent gives a child dessert after the child eats vegetables. This is an example of:",
          "options": { "a": "Positive Reinforcement", "b": "Negative Reinforcement", "c": "Positive Punishment", "d": "Negative Punishment" },
          "answer": "a"
        },
        {
          "number": 467,
          "text": "Fastening your seatbelt to stop the annoying beeping sound in your car is an example of:",
          "options": { "a": "Positive Reinforcement", "b": "Negative Reinforcement", "c": "Positive Punishment", "d": "Negative Punishment" },
          "answer": "b"
        },
        {
          "number": 468,
          "text": "A teacher gives a student detention for being late to class. This is an example of:",
          "options": { "a": "Positive Reinforcement", "b": "Negative Reinforcement", "c": "Positive Punishment", "d": "Negative Punishment" },
          "answer": "c"
        },
        {
          "number": 469,
          "text": "A teenager loses their phone privileges for breaking curfew. This is an example of:",
          "options": { "a": "Positive Reinforcement", "b": "Negative Reinforcement", "c": "Positive Punishment", "d": "Negative Punishment" },
          "answer": "d"
        },
        {
          "number": 470,
          "text": "Why is reinforcement generally considered more effective than punishment for promoting learning?",
          "options": { "a": "Punishment often causes physical harm.", "b": "Reinforcement is easier to administer consistently.", "c": "Punishment only signals unacceptable behaviour, not the desired one.", "d": "Reinforcement works faster than punishment." },
          "answer": "c"
        },
        {
          "number": 471,
          "text": "Food, water, and shelter are examples of:",
          "options": { "a": "Secondary Reinforcers", "b": "Primary Reinforcers", "c": "Generalized Reinforcers", "d": "Conditioned Punishers" },
          "answer": "b"
        },
        {
          "number": 472,
          "text": "Money, grades, and verbal approval gain their reinforcing power through association with primary reinforcers. They are known as:",
          "options": { "a": "Primary Reinforcers", "b": "Unconditioned Reinforcers", "c": "Secondary Reinforcers", "d": "Intrinsic Reinforcers" },
          "answer": "c"
        },
        {
          "number": 473,
          "text": "The effectiveness of secondary reinforcers is derived from their association with primary reinforcers through which learning process?",
          "options": { "a": "Operant Conditioning", "b": "Observational Learning", "c": "Classical Conditioning", "d": "Implicit Learning" },
          "answer": "c"
        },
        {
          "number": 474,
          "text": "Learning based on experience, resulting in relatively permanent changes, is the core definition of which concept?",
          "options": { "a": "Memory", "b": "Learning", "c": "Cognition", "d": "Development" },
          "answer": "b"
        },
        {
          "number": 475,
          "text": "Jennifer's aversion to the smell of cooking meat after her experiences in Iraq is an example of a learned association impacting:",
          "options": { "a": "Operant behavior", "b": "Sensory adaptation", "c": "A conditioned response", "d": "Implicit memory" },
          "answer": "c"
        },
        {
          "number": 476,
          "text": "Which type of learning does NOT require the organism to associate two stimuli or a behavior and its consequence?",
          "options": { "a": "Classical conditioning", "b": "Operant conditioning", "c": "Second-order conditioning", "d": "Habituation" },
          "answer": "d"
        },
        {
          "number": 477,
          "text": "Behaviourists argued that learning could be understood without referencing:",
          "options": { "a": "Observable actions", "b": "Environmental stimuli", "c": "Internal mental states", "d": "Physiological responses" },
          "answer": "c"
        },
        {
          "number": 478,
          "text": "Pavlov's initial interest before discovering classical conditioning was in:",
          "options": { "a": "Psychology of learning", "b": "Canine behavior", "c": "Physiology of digestion", "d": "Neurology of reflexes" },
          "answer": "c"
        },
        {
          "number": 479,
          "text": "In the context of classical conditioning, what must be true for a stimulus to become a CS?",
          "options": { "a": "It must naturally elicit the response.", "b": "It must be presented after the US.", "c": "It must be initially neutral regarding the response.", "d": "It must be aversive." },
          "answer": "c"
        },
        {
          "number": 480,
          "text": "Conditioning a dog to salivate to a light (CS1), then pairing the light with a bell (CS2) until the dog salivates to the bell alone, illustrates:",
          "options": { "a": "Stimulus generalization", "b": "Extinction", "c": "Spontaneous recovery", "d": "Second-order conditioning" },
          "answer": "d"
        },
        {
          "number": 481,
          "text": "Why is the conditioned response (CR) often slightly different from the unconditioned response (UR)?",
          "options": { "a": "The CR is learned, while the UR is reflexive.", "b": "The CR is always weaker than the UR.", "c": "The CR is produced by the CS, while the UR is produced by the US.", "d": "All of the above contribute to potential differences." },
          "answer": "d"
        },
        {
          "number": 482,
          "text": "If a dog is conditioned to salivate to a specific high-pitched tone but not to a low-pitched tone, it demonstrates:",
          "options": { "a": "Generalization", "b": "Discrimination", "c": "Extinction", "d": "Acquisition" },
          "answer": "b"
        },
        {
          "number": 483,
          "text": "The ethical concerns surrounding the Little Albert experiment primarily involved:",
          "options": { "a": "Lack of a control group", "b": "Inducing fear in an infant without plans for removal", "c": "Using an animal stimulus", "d": "Failure to replicate the findings" },
          "answer": "b"
        },
        {
          "number": 484,
          "text": "The Rescorla-Wagner model suggests that conditioning depends on the extent to which the US is:",
          "options": { "a": "Intense", "b": "Pleasant", "c": "Biologically significant", "d": "Unexpected or surprising" },
          "answer": "d"
        },
        {
          "number": 485,
          "text": "Eyeblink conditioning is considered a form of ________ conditioning.",
          "options": { "a": "Operant", "b": "Aversive", "c": "Appetitive", "d": "Classical" },
          "answer": "d"
        },
        {
          "number": 486,
          "text": "The amygdala's role in fear conditioning involves processing the ________ significance of a stimulus.",
          "options": { "a": "Sensory", "b": "Emotional", "c": "Motor", "d": "Cognitive" },
          "answer": "b"
        },
        {
          "number": 487,
          "text": "Why might taste aversions be learned so quickly and over long delays compared to other forms of conditioning?",
          "options": { "a": "Taste receptors are directly linked to the amygdala.", "b": "It provides a significant survival advantage.", "c": "Food stimuli are inherently more salient.", "d": "The digestive system has unique neural pathways." },
          "answer": "b"
        },
        {
          "number": 488,
          "text": "A bird learning to avoid brightly colored insects after eating one that tasted bad demonstrates biological preparedness based on:",
          "options": { "a": "Taste cues", "b": "Auditory cues", "c": "Olfactory cues", "d": "Visual cues" },
          "answer": "d"
        },
        {
          "number": 489,
          "text": "The 'Real World' box on drug overdoses explains that the ___________ acts as the CS, triggering a compensatory CR.",
          "options": { "a": "Drug itself", "b": "User's mood", "c": "Environmental setting and cues", "d": "Passage of time since last dose" },
          "answer": "c"
        },
        {
          "number": 490,
          "text": "When an addict takes drugs in a new environment, the usual compensatory CR may not occur, leading to:",
          "options": { "a": "Increased tolerance", "b": "An overdose effect", "c": "Rapid extinction", "d": "Negative reinforcement" },
          "answer": "b"
        },
        {
          "number": 491,
          "text": "Thorndike's cats gradually decreased ineffective behaviors and increased the effective lever-pressing behavior through a process of:",
          "options": { "a": "Classical conditioning", "b": "Insight learning", "c": "Trial and error", "d": "Observational learning" },
          "answer": "c"
        },
        {
          "number": 492,
          "text": "The Skinner box was designed to study:",
          "options": { "a": "Classical conditioning principles", "b": "Operant conditioning in a controlled environment", "c": "Social learning phenomena", "d": "Habituation and sensitization" },
          "answer": "b"
        },
        {
          "number": 493,
          "text": "Getting paid for working is an example of:",
          "options": { "a": "Positive Reinforcement", "b": "Negative Reinforcement", "c": "Positive Punishment", "d": "Negative Punishment" },
          "answer": "a"
        },
        {
          "number": 494,
          "text": "Taking an aspirin to relieve a headache results in the headache going away, making you more likely to take aspirin for future headaches. This is:",
          "options": { "a": "Positive Reinforcement", "b": "Negative Reinforcement", "c": "Positive Punishment", "d": "Negative Punishment" },
          "answer": "b"
        },
        {
          "number": 495,
          "text": "Receiving a speeding ticket for driving too fast is intended as:",
          "options": { "a": "Positive Reinforcement", "b": "Negative Reinforcement", "c": "Positive Punishment", "d": "Negative Punishment" },
          "answer": "c"
        },
        {
          "number": 496,
          "text": "A child who previously enjoyed playing video games is no longer allowed to play them after misbehaving. This is:",
          "options": { "a": "Positive Reinforcement", "b": "Negative Reinforcement", "c": "Positive Punishment", "d": "Negative Punishment" },
          "answer": "d"
        },
        {
          "number": 497,
          "text": "Which term is incorrectly matched with its effect on behavior?",
          "options": { "a": "Positive Reinforcement: Increases behavior", "b": "Negative Reinforcement: Decreases behavior", "c": "Positive Punishment: Decreases behavior", "d": "Negative Punishment: Decreases behavior" },
          "answer": "b"
        },
        {
          "number": 498,
          "text": "Primary reinforcers satisfy ________ needs.",
          "options": { "a": "Social", "b": "Emotional", "c": "Biological", "d": "Cognitive" },
          "answer": "c"
        },
        {
          "number": 499,
          "text": "The fact that a bronze trophy can be a powerful motivator for an athlete demonstrates the concept of:",
          "options": { "a": "Primary reinforcement", "b": "Secondary reinforcement", "c": "Negative punishment", "d": "Classical conditioning" },
          "answer": "b"
        },
        {
          "number": 500,
          "text": "Learning that occurs largely independent of awareness of both the process and the products of information acquisition is called:",
          "options": { "a": "Classical Conditioning", "b": "Operant Conditioning", "c": "Observational Learning", "d": "Implicit Learning" },
          "answer": "d"
        },
        {
          "number": 501,
          "text": "Learning by watching the actions of others is known as:",
          "options": { "a": "Implicit Learning", "b": "Classical Conditioning", "c": "Observational Learning", "d": "Operant Conditioning" },
          "answer": "c"
        },
        {
          "number": 502,
          "text": "Which process best explains why you might start using slang terms you hear your friends use frequently?",
          "options": { "a": "Classical Conditioning", "b": "Operant Conditioning", "c": "Observational Learning", "d": "Habituation" },
          "answer": "c"
        },
        {
          "number": 503,
          "text": "The text implies that Jennifer's learned reactions were relatively ________, a key feature of the definition of learning.",
          "options": { "a": "Temporary", "b": "Reflexive", "c": "Permanent", "d": "Implicit" },
          "answer": "c"
        },
        {
          "number": 504,
          "text": "A key difference between habituation and sensory adaptation is that habituation:",
          "options": { "a": "Occurs at the sensory receptor level", "b": "Is a form of learning involving reduced responding", "c": "Is usually permanent", "d": "Only occurs with pleasant stimuli" },
          "answer": "b"
        },
        {
          "number": 505,
          "text": "Pavlov's finding that dogs salivated simply by being put into the experimental harness illustrates:",
          "options": { "a": "The initial acquisition phase", "b": "Conditioning to contextual cues", "c": "Stimulus discrimination", "d": "Operant conditioning" },
          "answer": "b"
        },
        {
          "number": 506,
          "text": "If extinction occurs, and then the CS is presented again much later, what is likely to happen?",
          "options": { "a": "No response will occur.", "b": "The CR will return, but stronger than before.", "c": "Spontaneous recovery of the CR may occur.", "d": "The organism will show generalization." },
          "answer": "c"
        },
        {
          "number": 507,
          "text": "Watson believed that principles of ________ could explain virtually all human behavior.",
          "options": { "a": "Operant Conditioning", "b": "Classical Conditioning", "c": "Observational Learning", "d": "Psychoanalysis" },
          "answer": "b"
        },
        {
          "number": 508,
          "text": "The cognitive element in classical conditioning involves the organism learning an ________ about the relationship between the CS and US.",
          "options": { "a": "Aversion", "b": "Emotional response", "c": "Expectation", "d": "Motor reflex" },
          "answer": "c"
        },
        {
          "number": 509,
          "text": "Impairment in eyeblink conditioning following damage to the cerebellum supports the idea that this structure is involved in:",
          "options": { "a": "Emotional learning", "b": "Motor skill learning underlying the conditioned response", "c": "Processing the US", "d": "Cognitive expectation" },
          "answer": "b"
        },
        {
          "number": 510,
          "text": "Conditioned food aversions are particularly relevant for species that:",
          "options": { "a": "Hunt live prey", "b": "Have a very limited diet", "c": "Consume a variety of foods (forage)", "d": "Rely heavily on vision for feeding" },
          "answer": "c"
        },
        {
          "number": 511,
          "text": "The concept of biological preparedness challenges which behaviourist assumption?",
          "options": { "a": "That learning requires reinforcement.", "b": "That any two stimuli could be associated with equal ease.", "c": "That learning involves observable behavior.", "d": "That punishment is ineffective." },
          "answer": "b"
        },
        {
          "number": 512,
          "text": "In operant conditioning, the organism's behavior is primarily influenced by its:",
          "options": { "a": "Antecedents (preceding stimuli)", "b": "Consequences (following stimuli)", "c": "Association with other stimuli", "d": "Biological predispositions" },
          "answer": "b"
        },
        {
          "number": 513,
          "text": "Thorndike used the term 'satisfying state of affairs' to refer to what Skinner would later call:",
          "options": { "a": "Punishment", "b": "Reinforcement", "c": "Extinction", "d": "Discrimination" },
          "answer": "b"
        },
        {
          "number": 514,
          "text": "The main difference between positive and negative reinforcement is:",
          "options": { "a": "Whether the behavior increases or decreases", "b": "Whether a stimulus is added or removed", "c": "Whether the consequence is pleasant or unpleasant", "d": "Whether the learning is fast or slow" },
          "answer": "b"
        },
        {
          "number": 515,
          "text": "A parent stops nagging a teenager after the teenager finally cleans their room. For the teenager, cleaning the room was influenced by:",
          "options": { "a": "Positive Reinforcement", "b": "Negative Reinforcement", "c": "Positive Punishment", "d": "Negative Punishment" },
          "answer": "b"
        },
        {
          "number": 516,
          "text": "For the parent in the previous question, the teenager cleaning their room leads to the removal of the unpleasant need to nag. The parent's nagging behavior in the future might decrease due to the cleaning, but the parent stopping nagging acted as ________ for the teenager's cleaning.",
          "options": { "a": "Positive Reinforcement", "b": "Negative Reinforcement", "c": "Positive Punishment", "d": "Negative Punishment" },
          "answer": "b"
        },
        {
          "number": 517,
          "text": "The example of babies training parents through smiling/cooing (positive reinforcement) or stopping crying (negative reinforcement) illustrates that reinforcement:",
          "options": { "a": "Only works on simple behaviors", "b": "Is determined by the recipient's interpretation", "c": "Is defined by its effect on the behavior", "d": "Must be biologically significant" },
          "answer": "c"
        },
        {
          "number": 518,
          "text": "Learning complex sequences, like navigating a maze or mastering grammar rules, without explicit instruction often involves:",
          "options": { "a": "Classical Conditioning", "b": "Operant Conditioning", "c": "Observational Learning", "d": "Implicit Learning" },
          "answer": "d"
        },
        {
          "number": 519,
          "text": "Bandura's Bobo doll experiments were seminal in demonstrating the power of:",
          "options": { "a": "Classical Conditioning", "b": "Operant Conditioning", "c": "Observational Learning", "d": "Implicit Learning" },
          "answer": "c"
        },
        {
          "number": 520,
          "text": "Which learning principle suggests that the consequences of a behavior are critical for learning?",
          "options": { "a": "Classical Conditioning", "b": "Law of Effect", "c": "Habituation", "d": "Biological Preparedness" },
          "answer": "b"
        },
        {
          "number": 521,
          "text": "A teacher ignores a student who shouts out answers but calls on them when they raise their hand. The teacher is using ______ for shouting and ______ for hand-raising.",
          "options": { "a": "Punishment; Reinforcement", "b": "Extinction; Reinforcement", "c": "Punishment; Punishment", "d": "Extinction; Punishment" },
          "answer": "b"
        },
        {
          "number": 522,
          "text": "Classical conditioning involves learning associations between:",
          "options": { "a": "Behavior and consequence", "b": "Two stimuli", "c": "Observation and imitation", "d": "Thoughts and feelings" },
          "answer": "b"
        },
        {
          "number": 523,
          "text": "Operant conditioning involves learning associations between:",
          "options": { "a": "Behavior and consequence", "b": "Two stimuli", "c": "Observation and imitation", "d": "Physiological and emotional responses" },
          "answer": "a"
        },
        {
          "number": 524,
          "text": "The phenomenon where a CS previously paired with a US can interfere with the conditioning of a new CS presented simultaneously is explained by:",
          "options": { "a": "Extinction", "b": "Spontaneous recovery", "c": "Blocking (related to Rescorla-Wagner)", "d": "Second-order conditioning" },
          "answer": "c"
        },
        {
          "number": 525,
          "text": "The text suggests that learning involves acquiring new knowledge, skills, or responses ________.",
          "options": { "a": "Through genetic inheritance", "b": "From experience", "c": "Only through formal education", "d": "Via unconscious processes exclusively" },
          "answer": "b"
        },
        {
          "number": 526,
          "text": "Jennifer's case illustrates that learned associations can be powerful and ________.",
          "options": { "a": "Easily extinguished", "b": "Limited to animal subjects", "c": "Long-lasting", "d": "Always adaptive" },
          "answer": "c"
        },
        {
          "number": 527,
          "text": "Habituation allows organisms to:",
          "options": { "a": "Increase sensitivity to important stimuli", "b": "Learn complex motor skills", "c": "Ignore repetitive, irrelevant stimuli", "d": "Associate stimuli with consequences" },
          "answer": "c"
        },
        {
          "number": 528,
          "text": "Unlike habituation, sensitization leads to:",
          "options": { "a": "A decreased response to a stimulus", "b": "An increased response to a later stimulus", "c": "Learning through consequences", "d": "Ignoring familiar stimuli" },
          "answer": "b"
        },
        {
          "number": 529,
          "text": "The 'blank slate' or 'tabula rasa' view, often associated with behaviourists like Watson, aligns least well with which concept?",
          "options": { "a": "Classical conditioning", "b": "Operant conditioning", "c": "Biological preparedness", "d": "Extinction" },
          "answer": "c"
        },
        {
          "number": 530,
          "text": "Pavlov termed the initial neutral stimulus (like the bell) the ________ before conditioning began.",
          "options": { "a": "Unconditioned Stimulus", "b": "Orienting Stimulus", "c": "Neutral Stimulus", "d": "Conditioned Stimulus" },
          "answer": "c"
        },
        {
          "number": 531,
          "text": "The reappearance of an extinguished CR suggests that extinction does not involve _______ the learned association.",
          "options": { "a": "Strengthening", "b": "Completely erasing", "c": "Generalizing", "d": "Discriminating" },
          "answer": "b"
        },
        {
          "number": 532,
          "text": "John B. Watson's work is most associated with which school of thought in psychology?",
          "options": { "a": "Psychoanalysis", "b": "Cognitive Psychology", "c": "Humanistic Psychology", "d": "Behaviourism" },
          "answer": "d"
        },
        {
          "number": 533,
          "text": "Conditioned emotional responses, like fears or positive feelings triggered by certain stimuli, are primarily a result of:",
          "options": { "a": "Operant Conditioning", "b": "Classical Conditioning", "c": "Implicit Learning", "d": "Observational Learning" },
          "answer": "b"
        },
        {
          "number": 534,
          "text": "The idea that a CS must reliably predict the US for strong conditioning to occur is central to:",
          "options": { "a": "Thorndike's Law of Effect", "b": "The Rescorla-Wagner model", "c": "Skinner's theory of reinforcement", "d": "Pavlov's original findings" },
          "answer": "b"
        },
        {
          "number": 535,
          "text": "The cerebellum's role in classical conditioning appears most critical for learning involving:",
          "options": { "a": "Emotional responses like fear", "b": "Simple motor responses like eyeblinks", "c": "Taste aversions", "d": "Complex cognitive expectations" },
          "answer": "b"
        },
        {
          "number": 536,
          "text": "The amygdala is to ______ conditioning as the cerebellum is to ______ conditioning.",
          "options": { "a": "Taste; Eyeblink", "b": "Fear; Taste", "c": "Fear; Eyeblink", "d": "Eyeblink; Fear" },
          "answer": "c"
        },
        {
          "number": 537,
          "text": "The evolutionary perspective emphasizes the _______ value of learning mechanisms.",
          "options": { "a": "Cognitive", "b": "Emotional", "c": "Adaptive", "d": "Social" },
          "answer": "c"
        },
        {
          "number": 538,
          "text": "Shepard Siegel's work highlights the importance of ________ in understanding drug tolerance and overdose.",
          "options": { "a": "Operant principles", "b": "Observational learning", "c": "Classical conditioning", "d": "Implicit memory" },
          "answer": "c"
        },
        {
          "number": 539,
          "text": "Thorndike referred to the type of learning he studied as instrumental because the organism's behavior was ________ in producing the outcome.",
          "options": { "a": "Irrelevant", "b": "Accidental", "c": "Instrumental (key)", "d": "Reflexive" },
          "answer": "c"
        },
        {
          "number": 540,
          "text": "Skinner's approach emphasized the ________ control of behavior.",
          "options": { "a": "Cognitive", "b": "Emotional", "c": "Environmental", "d": "Biological" },
          "answer": "c"
        },
        {
          "number": 541,
          "text": "Negative reinforcement involves the ________ of an ________ stimulus.",
          "options": { "a": "Presentation; appetitive", "b": "Removal; appetitive", "c": "Presentation; aversive", "d": "Removal; aversive" },
          "answer": "d"
        },
        {
          "number": 542,
          "text": "Positive punishment involves the ________ of an ________ stimulus.",
          "options": { "a": "Presentation; appetitive", "b": "Removal; appetitive", "c": "Presentation; aversive", "d": "Removal; aversive" },
          "answer": "c"
        },
        {
          "number": 543,
          "text": "Which is NOT a primary reinforcer?",
          "options": { "a": "Food", "b": "Water", "c": "Money", "d": "Warmth" },
          "answer": "c"
        },
        {
          "number": 544,
          "text": "Observational learning requires attention, retention, reproduction, and:",
          "options": { "a": "Reinforcement", "b": "Motivation", "c": "Punishment", "d": "Extinction" },
          "answer": "b"
        },
        {
          "number": 545,
          "text": "Implicit learning often underlies the acquisition of:",
          "options": { "a": "Explicit facts", "b": "Complex motor skills", "c": "Emotional responses", "d": "Grammar and social rules" },
          "answer": "d"
        },
        {
          "number": 546,
          "text": "Compared to classical conditioning, operant conditioning places more emphasis on behavior that is:",
          "options": { "a": "Involuntary", "b": "Emitted rather than elicited", "c": "Reflexive", "d": "Associated with neutral stimuli" },
          "answer": "b"
        },
        {
          "number": 547,
          "text": "A key takeaway from the 'Real World' box on drug overdoses is that ________ can become powerful conditioned stimuli.",
          "options": { "a": "Internal mood states", "b": "The drug's chemical properties", "c": "Contextual cues", "d": "Genetic predispositions" },
          "answer": "c"
        },
        {
          "number": 548,
          "text": "If a conditioned fear is extinguished, it is most likely to reappear through:",
          "options": { "a": "Generalization", "b": "Discrimination", "c": "Spontaneous recovery", "d": "Second-order conditioning" },
          "answer": "c"
        },
        {
          "number": 549,
          "text": "Learning to fear a specific intersection after witnessing an accident there is an example of:",
          "options": { "a": "Operant Conditioning", "b": "Classical Conditioning (aversive)", "c": "Habituation", "d": "Implicit Learning" },
          "answer": "b"
        },
        {
          "number": 550,
          "text": "Which process explains why a child might stop throwing tantrums if the tantrums are consistently ignored?",
          "options": { "a": "Positive Punishment", "b": "Negative Punishment", "c": "Extinction (in operant conditioning)", "d": "Habituation" },
          "answer": "c"
        },
        {
          "number": 551,
          "text": "The effectiveness of a token economy, where tokens earned for good behavior can be exchanged for rewards, relies on tokens acting as:",
          "options": { "a": "Primary reinforcers", "b": "Secondary reinforcers", "c": "Negative punishers", "d": "Unconditioned stimuli" },
          "answer": "b"
        },
        {
          "number": 552,
          "text": "Biological preparedness suggests that certain associations are learned more readily because they:",
          "options": { "a": "Are cognitively simpler", "b": "Have survival value", "c": "Involve primary reinforcers", "d": "Are taught explicitly" },
          "answer": "b"
        },
        {
          "number": 553,
          "text": "Getting praise from a teacher for a good answer is an example of:",
          "options": { "a": "Primary reinforcement", "b": "Secondary reinforcement", "c": "Negative reinforcement", "d": "Positive punishment" },
          "answer": "b"
        },
        {
          "number": 554,
          "text": "According to the text, classical and operant conditioning are two major approaches within the broader topic of:",
          "options": { "a": "Memory", "b": "Cognition", "c": "Motivation", "d": "Learning" },
          "answer": "d"
        },
        {
          "number": 555,
          "text": "The Rescorla-Wagner model emphasizes the ______ role in classical conditioning.",
          "options": { "a": "Predictive", "b": "Emotional", "c": "Motor", "d": "Biological" },
          "answer": "a"
        },
        {
          "number": 556,
          "text": "Which learning concept is demonstrated when Aplysia withdraws its gill less strongly after repeated light touches?",
          "options": { "a": "Sensitization", "b": "Habituation", "c": "Classical Conditioning", "d": "Operant Conditioning" },
          "answer": "b"
        },
        {
          "number": 557,
          "text": "Learning in the classroom, according to the chapter outline, represents a specific _______ where learning principles apply.",
          "options": { "a": "Theory", "b": "Mechanism", "c": "Context", "d": "Outcome" },
          "answer": "c"
        },
        {
          "number": 558,
          "text": "The case of Jennifer highlights how learning can lead to significant and sometimes ______ changes in behavior and emotion.",
          "options": { "a": "Temporary", "b": "Maladaptive", "c": "Innate", "d": "Unconscious" },
          "answer": "b"
        },
        {
          "number": 559,
          "text": "Thorndike's puzzle box experiments laid the groundwork for:",
          "options": { "a": "Classical conditioning", "b": "Operant conditioning", "c": "Observational learning", "d": "Cognitive psychology" },
          "answer": "b"
        },
        {
          "number": 560,
          "text": "Skinner defined reinforcement and punishment based on their observed effects on:",
          "options": { "a": "Emotional state", "b": "Cognitive expectancy", "c": "Behavior frequency", "d": "Physiological response" },
          "answer": "c"
        },
        {
          "number": 561,
          "text": "The primary difference between classical and operant conditioning lies in:",
          "options": { "a": "The type of response (voluntary vs. involuntary)", "b": "The role of consequences", "c": "The necessity of pairing stimuli", "d": "All of the above" },
          "answer": "d"
        },
        {
          "number": 562,
          "text": "A rat pressing a lever to receive food illustrates:",
          "options": { "a": "Classical conditioning", "b": "Operant conditioning", "c": "Habituation", "d": "Observational learning" },
          "answer": "b"
        },
        {
          "number": 563,
          "text": "A dog learning to associate the sound of a can opener with food illustrates:",
          "options": { "a": "Classical conditioning", "b": "Operant conditioning", "c": "Sensitization", "d": "Implicit learning" },
          "answer": "a"
        }
];    
