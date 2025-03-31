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
          "c": "Sound waves (changes in air pressure)",
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
        },
        {
          "number": 414,
          "text": "The visuo-spatial sketchpad, phonological loop, episodic buffer, and central executive are elements of the:",
          "options": { "a": "Sensory memory model", "b": "Long-term potentiation process", "c": "Model of working memory", "d": "Consolidation theory" },
          "answer": "c"
        },
        {
          "number": 415,
          "text": "Patient HM's case primarily illuminated the interrelationship between memory and which brain structure?",
          "options": { "a": "Amygdala", "b": "Cerebellum", "c": "Frontal Lobe", "d": "Hippocampus" },
          "answer": "d"
        },
        {
          "number": 416,
          "text": "The work with Aplysia and the concept of LTP highlight the role of what neural component in long-term memory storage?",
          "options": { "a": "Glial cells", "b": "The neural synapse", "c": "The cell nucleus", "d": "Neurotransmitter type" },
          "answer": "b"
        },
        {
          "number": 417,
          "text": "According to the chapter introduction, Jennifer, the military nurse, served for how long abroad during the Iraq war?",
          "options": { "a": "4 months", "b": "12 months", "c": "19 months", "d": "21 years" },
          "answer": "c"
        },
        {
          "number": 418,
          "text": "Where did Jennifer serve 4 months of her assignment in Iraq?",
          "options": { "a": "In a field hospital near the front lines", "b": "In a prison hospital near Baghdad", "c": "On a hospital ship in the Persian Gulf", "d": "At a civilian hospital in Baghdad" },
          "answer": "b"
        },
        {
          "number": 419,
          "text": "What kind of events did Jennifer witness frequently at the prison hospital?",
          "options": { "a": "Successful recovery of most patients", "b": "Relentless mortar fire causing casualties", "c": "Diplomatic negotiations with extremists", "d": "Cultural exchange programs with Iraqi civilians" },
          "answer": "b"
        },
        {
          "number": 420,
          "text": "What specific sensory experience did Jennifer frequently encounter while tending to wounded cases in Iraq?",
          "options": { "a": "The sound of distant music", "b": "The smell of antiseptic solutions", "c": "The smell of burned flesh", "d": "The taste of field rations" },
          "answer": "c"
        },
        {
          "number": 421,
          "text": "The text states that Jennifer learned to associate the sound of an arriving helicopter with what?",
          "options": { "a": "Incoming supplies", "b": "Senior officers visiting", "c": "Wounded soldiers arriving", "d": "The end of her shift" },
          "answer": "c"
        },
        {
          "number": 422,
          "text": "According to Feczer & Bjorklund (2009), Jennifer frequently encountered the sight of what as part of her daily duties?",
          "options": { "a": "Advanced medical equipment", "b": "Visiting dignitaries", "c": "“Young, mangled bodies”", "d": "Local wildlife" },
          "answer": "c"
        },
        {
          "number": 423,
          "text": "Upon returning home, what reaction did Jennifer have to the sight of blood or the smell of cooking meat?",
          "options": { "a": "Increased appetite", "b": "Nostalgia for her service", "c": "Feeling sick to her stomach", "d": "Indifference" },
          "answer": "c"
        },
        {
          "number": 424,
          "text": "What effect did the previously innocent sound of an approaching helicopter have on Jennifer after her return?",
          "options": { "a": "It made her feel calm and safe", "b": "It created heightened feelings of fear and anxiety", "c": "It reminded her of positive experiences", "d": "It had no significant effect" },
          "answer": "b"
        },
        {
          "number": 425,
          "text": "Jennifer's experiences after returning home, such as her reaction to helicopters, reflect a kind of learning based on what?",
          "options": { "a": "Trial and error", "b": "Explicit instruction", "c": "Association", "d": "Logical deduction" },
          "answer": "c"
        },
        {
          "number": 426,
          "text": "The text defines Learning as shorthand for a collection of different yet related processes that produce changes in what?",
          "options": { "a": "An organism's physical structure", "b": "An organism's genetic makeup", "c": "An organism's behaviour", "d": "An organism's social status" },
          "answer": "c"
        },
        {
          "number": 427,
          "text": "Approximately how many different types of learning have learning psychologists identified and studied?",
          "options": { "a": "About 10", "b": "About 20", "c": "About 40", "d": "Over 100" },
          "answer": "c"
        },
        {
          "number": 428,
          "text": "Which two major approaches to learning are discussed first in this chapter?",
          "options": { "a": "Implicit learning and observational learning", "b": "Classical conditioning and operant conditioning", "c": "Habituation and sensitization", "d": "Learning in the classroom and cognitive learning" },
          "answer": "b"
        },
        {
          "number": 429,
          "text": "What type of learning involves simply watching others?",
          "options": { "a": "Classical conditioning", "b": "Operant conditioning", "c": "Observational learning", "d": "Implicit learning" },
          "answer": "c"
        },
        {
          "number": 430,
          "text": "Which type of learning can occur entirely outside of awareness?",
          "options": { "a": "Classical conditioning", "b": "Operant conditioning", "c": "Observational learning", "d": "Implicit learning" },
          "answer": "d"
        },
        {
          "number": 431,
          "text": "What is the formal definition of Learning provided in the text?",
          "options": { "a": "The process of memorizing facts and figures.", "b": "The acquisition, from experience, of new knowledge, skills, or responses that results in a relatively permanent change in the state of the learner.", "c": "A temporary change in behavior due to maturation.", "d": "The development of innate reflexes and instincts." },
          "answer": "b"
        },
        {
          "number": 432,
          "text": "Which of the following is NOT one of the key ideas emphasized in the definition of learning?",
          "options": { "a": "Learning is based on experience.", "b": "Learning produces changes in the organism.", "c": "These changes are always permanent and irreversible.", "d": "These changes are relatively permanent." },
          "answer": "c"
        },
        {
          "number": 433,
          "text": "Jennifer's association of helicopters with wounded soldiers illustrates which key idea about learning?",
          "options": { "a": "Learning occurs instantly without experience.", "b": "Learning involves temporary changes.", "c": "Learning is based on experience leading to relatively permanent changes.", "d": "Learning only involves acquiring new knowledge." },
          "answer": "c"
        },
        {
          "number": 434,
          "text": "What is habituation defined as?",
          "options": { "a": "An increase in responding after repeated exposure to a stimulus.", "b": "Learning to associate two different stimuli.", "c": "A general process in which repeated or prolonged exposure to a stimulus results in a gradual reduction in responding.", "d": "Learning through reinforcement and punishment." },
          "answer": "c"
        },
        {
          "number": 435,
          "text": "Living near an airport and eventually ignoring the plane noise is an example of which learning process?",
          "options": { "a": "Sensitization", "b": "Classical conditioning", "c": "Operant conditioning", "d": "Habituation" },
          "answer": "d"
        },
        {
          "number": 436,
          "text": "Which Nobel Prize-winner studied habituation in the sea slug Aplysia?",
          "options": { "a": "Ivan Pavlov", "b": "B. F. Skinner", "c": "John B. Watson", "d": "Eric Kandel" },
          "answer": "d"
        },
        {
          "number": 437,
          "text": "What response does Aplysia initially show when lightly touched, which then weakens with repeated touches?",
          "options": { "a": "It releases ink.", "b": "It withdraws its gill.", "c": "It moves away quickly.", "d": "It changes color." },
          "answer": "b"
        },
        {
          "number": 438,
          "text": "The text suggests habituation might explain why action movies today compare to those of the 1950s in what way?",
          "options": { "a": "They show less graphic violence.", "b": "They focus more on dialogue.", "c": "They tend to show much more graphic violence.", "d": "They have simpler plots." },
          "answer": "c"
        },
        {
          "number": 439,
          "text": "What is sensitization?",
          "options": { "a": "A gradual reduction in responding to a repeated stimulus.", "b": "Learning through association of a neutral stimulus with an unconditioned stimulus.", "c": "Learning through consequences.", "d": "When presentation of a stimulus leads to an increased response to a later stimulus." },
          "answer": "d"
        },
        {
          "number": 440,
          "text": "After receiving a strong shock, Kandel found that Aplysia showed an increased gill-withdrawal response to a light touch. This is an example of:",
          "options": { "a": "Habituation", "b": "Sensitization", "c": "Classical conditioning", "d": "Operant conditioning" },
          "answer": "b"
        },
        {
          "number": 441,
          "text": "The example of people becoming hypersensitive to late-night sounds after a house break-in illustrates:",
          "options": { "a": "Habituation", "b": "Sensitization", "c": "Extinction", "d": "Discrimination" },
          "answer": "b"
        },
        {
          "number": 442,
          "text": "Which psychological school of thought insisted on measuring only observable, quantifiable behaviour and dismissed mental activity?",
          "options": { "a": "Psychoanalysis", "b": "Humanistic psychology", "c": "Cognitive psychology", "d": "Behaviourism" },
          "answer": "d"
        },
        {
          "number": 443,
          "text": "During which period was behaviourism the major outlook of most psychologists working on learning theory?",
          "options": { "a": "Late 1800s", "b": "Early 1900s", "c": "1930s through the 1950s", "d": "1970s through the 1990s" },
          "answer": "c"
        },
        {
          "number": 444,
          "text": "Behaviourists argued that learning's 'permanent change in experience' could be demonstrated in which organisms?",
          "options": { "a": "Only humans", "b": "Only primates", "c": "Only dogs and rats", "d": "Almost any organism: rats, dogs, pigeons, humans, etc." },
          "answer": "d"
        },
        {
          "number": 445,
          "text": "While behaviourists advanced the field, the text suggests they overstated their case by ignoring what?",
          "options": { "a": "The role of genetics", "b": "Important cognitive considerations (mental activity)", "c": "The influence of social factors", "d": "Evolutionary influences" },
          "answer": "b"
        },
        {
          "number": 446,
          "text": "Which American psychologist kick-started the behaviourist movement in the early 20th century?",
          "options": { "a": "Ivan Pavlov", "b": "B. F. Skinner", "c": "John B. Watson", "d": "Edward Thorndike" },
          "answer": "c"
        },
        {
          "number": 447,
          "text": "John B. Watson argued psychologists should 'never use terms' like:",
          "options": { "a": "Stimulus and response", "b": "Reinforcement and punishment", "c": "Consciousness, mental states, mind", "d": "Learning and behaviour" },
          "answer": "c"
        },
        {
          "number": 448,
          "text": "Whose work heavily influenced John B. Watson's behaviourist stance?",
          "options": { "a": "Sigmund Freud", "b": "Ivan Pavlov", "c": "William James", "d": "Eric Kandel" },
          "answer": "b"
        },
        {
          "number": 449,
          "text": "Ivan Pavlov received the Nobel Prize in Physiology in 1904 for his work on:",
          "options": { "a": "Learning mechanisms", "b": "The nervous system", "c": "The digestive processes of dogs", "d": "Visual perception" },
          "answer": "c"
        },
        {
          "number": 450,
          "text": "Classical conditioning is defined as a type of learning that occurs when:",
          "options": { "a": "Behaviour is followed by reinforcement.", "b": "A neutral stimulus produces a response after being paired with a stimulus that naturally produces a response.", "c": "An organism learns by observing others.", "d": "Responding decreases after repeated exposure to a stimulus." },
          "answer": "b"
        },
        {
          "number": 451,
          "text": "In Pavlov's classic experiments, what did the dogs learn to salivate to?",
          "options": { "a": "Only the sight of food", "b": "Only the smell of food", "c": "Neutral stimuli like a buzzer or metronome", "d": "The presence of Pavlov himself" },
          "answer": "c"
        },
        {
          "number": 452,
          "text": "Why did Pavlov's findings appeal strongly to behaviourists like Watson?",
          "options": { "a": "They focused on unobservable mental states.", "b": "They involved observable stimuli and responses without needing mental explanations.", "c": "They proved the existence of the subconscious mind.", "d": "They could only be demonstrated in humans." },
          "answer": "b"
        },
        {
          "number": 453,
          "text": "In Pavlov's terminology, the food presented to the dog is called the:",
          "options": { "a": "Conditioned stimulus (CS)", "b": "Unconditioned stimulus (US)", "c": "Conditioned response (CR)", "d": "Unconditioned response (UR)" },
          "answer": "b"
        },
        {
          "number": 454,
          "text": "An unconditioned stimulus (US) is something that:",
          "options": { "a": "Reliably produces a naturally occurring reaction.", "b": "Is initially neutral.", "c": "Produces a response only after learning.", "d": "Resembles a learned response." },
          "answer": "a"
        },
        {
          "number": 455,
          "text": "The dog's salivation in response to food is called the:",
          "options": { "a": "Conditioned stimulus (CS)", "b": "Unconditioned stimulus (US)", "c": "Conditioned response (CR)", "d": "Unconditioned response (UR)" },
          "answer": "d"
        },
        {
          "number": 456,
          "text": "An unconditioned response (UR) is defined as:",
          "options": { "a": "A learned reaction to a previously neutral stimulus.", "b": "A stimulus that produces a response without prior learning.", "c": "A reflexive reaction reliably produced by an unconditioned stimulus.", "d": "The phase where learning occurs." },
          "answer": "c"
        },
        {
          "number": 457,
          "text": "What is the phase of classical conditioning when the CS and the US are presented together called?",
          "options": { "a": "Extinction", "b": "Generalization", "c": "Discrimination", "d": "Acquisition" },
          "answer": "d"
        },
        {
          "number": 458,
          "text": "After pairing the metronome (CS) with food (US), the metronome comes to elicit salivation. The metronome has become a(n):",
          "options": { "a": "Unconditioned stimulus (US)", "b": "Unconditioned response (UR)", "c": "Conditioned stimulus (CS)", "d": "Conditioned response (CR)" },
          "answer": "c"
        },
        {
          "number": 459,
          "text": "A conditioned stimulus (CS) is a:",
          "options": { "a": "Stimulus that naturally causes a response.", "b": "Reflexive reaction.", "c": "Previously neutral stimulus that produces a reliable response after being paired with a US.", "d": "Response that resembles an unconditioned response." },
          "answer": "c"
        },
        {
          "number": 460,
          "text": "The dog's salivation to the sound of the metronome alone is called the:",
          "options": { "a": "Conditioned stimulus (CS)", "b": "Unconditioned stimulus (US)", "c": "Conditioned response (CR)", "d": "Unconditioned response (UR)" },
          "answer": "c"
        },
        {
          "number": 461,
          "text": "A conditioned response (CR) is a reaction that:",
          "options": { "a": "Is naturally produced by a US.", "b": "Is produced by a CS after learning.", "c": "Is identical to the UR in all respects.", "d": "Occurs before conditioning begins." },
          "answer": "b"
        },
        {
          "number": 462,
          "text": "Which response reflects learning in classical conditioning?",
          "options": { "a": "The unconditioned response (UR)", "b": "The conditioned response (CR)", "c": "Both the UR and the CR", "d": "Neither the UR nor the CR" },
          "answer": "b"
        },
        {
          "number": 463,
          "text": "Figure 7.2 illustrates that before conditioning, the neutral stimulus (ticking metronome) produces:",
          "options": { "a": "Salivation", "b": "Fear", "c": "No salivation", "d": "Excitement" },
          "answer": "c"
        },
        {
          "number": 464,
          "text": "During the acquisition phase shown in Figure 7.2b, what is paired together?",
          "options": { "a": "CS and CR", "b": "US and UR", "c": "CS and US", "d": "CR and UR" },
          "answer": "c"
        },
        {
          "number": 465,
          "text": "After conditioning (Figure 7.2c), the CS (ticking metronome) alone elicits the:",
          "options": { "a": "US", "b": "UR", "c": "CR", "d": "Neutral response" },
          "answer": "c"
        },
        {
          "number": 466,
          "text": "Your dog getting excited when you move into the kitchen and open the cabinet before dinner is an example of a CR triggered by a:",
          "options": { "a": "Simple US", "b": "Simple CS", "c": "Complex US", "d": "Complex CS" },
          "answer": "d"
        },
        {
          "number": 467,
          "text": "Feeling the urge to check your phone immediately upon hearing the text message sound is presented as an example of:",
          "options": { "a": "Habituation", "b": "Sensitization", "c": "Classical conditioning", "d": "Operant conditioning" },
          "answer": "c"
        },
        {
          "number": 468,
          "text": "In the smartphone example, what acts as the conditioned stimulus (CS)?",
          "options": { "a": "The important information in the text", "b": "The act of checking the phone", "c": "The text message sound", "d": "The feeling of anxiety" },
          "answer": "c"
        },
        {
          "number": 469,
          "text": "What is second-order conditioning?",
          "options": { "a": "Conditioning that occurs without awareness.", "b": "Learning that occurs by watching others.", "c": "A type of learning where a CS is paired with a stimulus that became associated with the US in an earlier procedure.", "d": "The weakening of a conditioned response." },
          "answer": "c"
        },
        {
          "number": 470,
          "text": "In Pavlov's example of second-order conditioning, dogs salivated to a black square after it was paired with:",
          "options": { "a": "Food", "b": "A light", "c": "The reliable tone (an established CS)", "d": "Water" },
          "answer": "c"
        },
        {
          "number": 471,
          "text": "The text suggests second-order conditioning helps explain why people might desire money excessively because money is associated with:",
          "options": { "a": "Biological needs directly", "b": "Objects or experiences that produce gratifying outcomes", "c": "Painful stimuli", "d": "Neutral stimuli only" },
          "answer": "b"
        },
        {
          "number": 472,
          "text": "During the initial phase of acquisition in classical conditioning, learning typically:",
          "options": { "a": "Starts high and decreases", "b": "Is instantaneous", "c": "Starts low, rises rapidly, and then levels off", "d": "Occurs at a steady, constant rate" },
          "answer": "c"
        },
        {
          "number": 473,
          "text": "According to Figure 7.3, what happens during the acquisition phase?",
          "options": { "a": "The CS is presented alone.", "b": "The US is presented alone.", "c": "CS-US pairings occur, and the CR increases.", "d": "The CR diminishes and disappears." },
          "answer": "c"
        },
        {
          "number": 474,
          "text": "What is extinction in classical conditioning?",
          "options": { "a": "The initial phase of learning the association.", "b": "The reappearance of a learned response after a rest period.", "c": "The gradual elimination of a learned response when the CS is repeatedly presented without the US.", "d": "Pairing a CS with a new neutral stimulus." },
          "answer": "c"
        },
        {
          "number": 475,
          "text": "According to Figure 7.3, presenting the CS alone after acquisition leads to:",
          "options": { "a": "An increase in the CR", "b": "A decrease and eventual cessation of the CR", "c": "The appearance of the US", "d": "No change in the CR" },
          "answer": "b"
        },
        {
          "number": 476,
          "text": "What did Pavlov wonder after extinguishing a conditioned response?",
          "options": { "a": "If the animal could learn a new response", "b": "If the elimination of the CR was permanent", "c": "If the US was still effective", "d": "If the CS had changed" },
          "answer": "b"
        },
        {
          "number": 477,
          "text": "What is spontaneous recovery?",
          "options": { "a": "The sudden learning of a response without conditioning.", "b": "The tendency of a learned behaviour to recover from extinction after a rest period.", "c": "Forgetting the learned association.", "d": "The strengthening of a response during acquisition." },
          "answer": "b"
        },
        {
          "number": 478,
          "text": "Figure 7.3 shows that spontaneous recovery occurs:",
          "options": { "a": "Only with additional CS-US pairings.", "b": "Immediately after extinction begins.", "c": "After a rest period following extinction, even without more CS-US pairings.", "d": "Only if extinction never occurred." },
          "answer": "c"
        },
        {
          "number": 479,
          "text": "Spontaneous recovery suggests that extinction:",
          "options": { "a": "Completely erases the learned association.", "b": "Strengthens the learned association.", "c": "Weakens the ability of the CS to elicit the CR but does not eliminate it.", "d": "Permanently changes the CS." },
          "answer": "c"
        },
        {
          "number": 480,
          "text": "What is generalization in classical conditioning?",
          "options": { "a": "The ability to distinguish between similar stimuli.", "b": "The reappearance of an extinguished response.", "c": "The tendency for the CR to be observed even though the CS is slightly different from the original CS.", "d": "The process of learning the CS-US association." },
          "answer": "c"
        },
        {
          "number": 481,
          "text": "If a dog conditioned to salivate to a specific tone also salivates to a similar, new tone, it is demonstrating:",
          "options": { "a": "Extinction", "b": "Discrimination", "c": "Spontaneous recovery", "d": "Generalization" },
          "answer": "d"
        },
        {
          "number": 482,
          "text": "The principle of generalization suggests that the more a new stimulus differs from the original CS, the:",
          "options": { "a": "Stronger the CR will be.", "b": "Less conditioned responding will be observed.", "c": "Faster extinction will occur.", "d": "More likely discrimination is." },
          "answer": "b"
        },
        {
          "number": 483,
          "text": "What is discrimination in classical conditioning?",
          "options": { "a": "Responding to stimuli similar to the original CS.", "b": "The capacity to distinguish between similar but distinct stimuli.", "c": "The weakening of the CR.", "d": "Learning through observation." },
          "answer": "b"
        },
        {
          "number": 484,
          "text": "If a dog salivates to the original CS tone but not to a very different tone, it is demonstrating:",
          "options": { "a": "Generalization", "b": "Extinction", "c": "Discrimination", "d": "Acquisition" },
          "answer": "c"
        },
        {
          "number": 485,
          "text": "Generalization and discrimination are described as:",
          "options": { "a": "Unrelated processes", "b": "Opposite ends of a spectrum", "c": "Two sides of the same coin", "d": "Relevant only to operant conditioning" },
          "answer": "c"
        },
        {
          "number": 486,
          "text": "Who conducted the controversial 'Little Albert' study?",
          "options": { "a": "Pavlov", "b": "Skinner", "c": "Watson and Rayner", "d": "Thorndike" },
          "answer": "c"
        },
        {
          "number": 487,
          "text": "What was the primary goal of the Little Albert study?",
          "options": { "a": "To demonstrate habituation in infants.", "b": "To show that complex emotional reactions like fear could be classically conditioned.", "c": "To test the effectiveness of reinforcement schedules.", "d": "To study infant cognitive development." },
          "answer": "b"
        },
        {
          "number": 488,
          "text": "In the Little Albert experiment, what was the unconditioned stimulus (US)?",
          "options": { "a": "The white rat", "b": "The rabbit", "c": "The loud noise", "d": "Albert's crying" },
          "answer": "c"
        },
        {
          "number": 489,
          "text": "What was the conditioned stimulus (CS) in the Little Albert experiment?",
          "options": { "a": "The loud noise", "b": "The white rat", "c": "Watson's presence", "d": "The steel bar" },
          "answer": "b"
        },
        {
          "number": 490,
          "text": "What was the conditioned response (CR) observed in Little Albert?",
          "options": { "a": "Curiosity towards the rat", "b": "Salivation", "c": "Fear reaction to the rat", "d": "Reaching for the rat" },
          "answer": "c"
        },
        {
          "number": 491,
          "text": "Little Albert's fear of a white rabbit, a seal-fur coat, and a Santa Claus mask after being conditioned to fear a white rat demonstrates:",
          "options": { "a": "Extinction", "b": "Discrimination", "c": "Spontaneous recovery", "d": "Stimulus generalization" },
          "answer": "d"
        },
        {
          "number": 492,
          "text": "One of Watson's goals with the Little Albert study was to show that fear could be learned and did not necessarily stem from:",
          "options": { "a": "Genetic predispositions", "b": "Direct physical harm", "c": "Deeper unconscious processes or early life experiences (as Freud argued)", "d": "Observing others' fear" },
          "answer": "c"
        },
        {
          "number": 493,
          "text": "Why is the Little Albert study considered ethically controversial today?",
          "options": { "a": "The loud noise was potentially damaging to Albert's hearing.", "b": "It involved conditioning fear in an infant without clear consent or follow-up/deconditioning.", "c": "The stimuli used were not culturally appropriate.", "d": "Watson published the results without Rayner's permission." },
          "answer": "b"
        },
        {
          "number": 494,
          "text": "Therapies for trauma-induced fears, like Jennifer's, often involve repeated exposure to conditioned stimuli in a safe setting to promote:",
          "options": { "a": "Generalization", "b": "Acquisition", "c": "Extinction", "d": "Sensitization" },
          "answer": "c"
        },
        {
          "number": 495,
          "text": "Using attractive people or enjoyable music in advertising aims to create what through classical conditioning?",
          "options": { "a": "Conditioned fear responses", "b": "Conditioned positive emotional responses associated with the product", "c": "Habituation to the product", "d": "Discriminative stimuli for purchasing" },
          "answer": "b"
        },
        {
          "number": 496,
          "text": "Classical conditioning initially seemed like a simple process, but deeper understanding requires examining which elements?",
          "options": { "a": "Only stimulus and response", "b": "Only acquisition and extinction", "c": "Cognitive, neural, and evolutionary elements", "d": "Social and cultural factors only" },
          "answer": "c"
        },
        {
          "number": 497,
          "text": "The observation that Pavlov's dogs salivated to their feeders but not to Pavlov himself led to questions about what aspect of conditioning?",
          "options": { "a": "The role of the US", "b": "The permanence of the CR", "c": "The cognitive element or expectation", "d": "The type of UR involved" },
          "answer": "c"
        },
        {
          "number": 498,
          "text": "Who proposed the theory that classical conditioning occurs when an animal learns to set up an expectation?",
          "options": { "a": "Pavlov", "b": "Watson and Rayner", "c": "Rescorla and Wagner", "d": "Skinner" },
          "answer": "c"
        },
        {
          "number": 499,
          "text": "According to the Rescorla-Wagner model, Pavlov himself was NOT a reliable CS for food because:",
          "options": { "a": "He never brought the food.", "b": "He was also linked with other activities unrelated to food.", "c": "The dogs disliked him.", "d": "He was present too often." },
          "answer": "b"
        },
        {
          "number": 500,
          "text": "The Rescorla-Wagner model suggests that conditioning is easier when the CS is:",
          "options": { "a": "A familiar event", "b": "An unfamiliar event", "c": "A very intense stimulus", "d": "A very weak stimulus" },
          "answer": "b"
        },
        {
          "number": 501,
          "text": "Why is conditioning thought to be harder with a familiar CS according to the cognitive perspective?",
          "options": { "a": "Familiar events cannot become CSs.", "b": "Familiar events lose their ability to signal anything.", "c": "Familiar events already have expectations associated with them.", "d": "Animals habituate too quickly to familiar events." },
          "answer": "c"
        },
        {
          "number": 502,
          "text": "Which brain structure did Richard Thompson's research identify as critical for eyeblink conditioning?",
          "options": { "a": "Amygdala", "b": "Hippocampus", "c": "Cerebellum", "d": "Hypothalamus" },
          "answer": "c"
        },
        {
          "number": 503,
          "text": "Studies of humans with lesions and neuroimaging findings support the role of the cerebellum in which type of conditioning?",
          "options": { "a": "Fear conditioning", "b": "Taste aversion conditioning", "c": "Eyeblink conditioning", "d": "Operant conditioning" },
          "answer": "c"
        },
        {
          "number": 504,
          "text": "Which brain structure, particularly its central nucleus, is identified as critical for emotional conditioning, especially fear conditioning?",
          "options": { "a": "Cerebellum", "b": "Amygdala", "c": "Thalamus", "d": "Prefrontal cortex" },
          "answer": "b"
        },
        {
          "number": 505,
          "text": "In fear conditioning studies with rats (tone CS, shock US), the amygdala is essential for producing which components of the CR?",
          "options": { "a": "Only the behavioural freezing response", "b": "Only the autonomic responses (heart rate, hormones)", "c": "Both the behavioural freezing and the autonomic responses", "d": "Neither the freezing nor the autonomic responses" },
          "answer": "c"
        },
        {
          "number": 506,
          "text": "Disrupting connections between the amygdala and the midbrain affects which part of the fear response in rats?",
          "options": { "a": "Autonomic responses", "b": "Hormone release", "c": "Behavioural freezing", "d": "Memory of the shock" },
          "answer": "c"
        },
        {
          "number": 507,
          "text": "Disrupting connections between the amygdala and the hypothalamus affects which part of the fear response in rats?",
          "options": { "a": "Behavioural freezing", "b": "Auditory perception", "c": "Autonomic responses", "d": "Taste aversion" },
          "answer": "c"
        },
        {
          "number": 508,
          "text": "The evolutionary perspective on classical conditioning emphasizes the _______ value of learning.",
          "options": { "a": "cognitive", "b": "emotional", "c": "social", "d": "adaptive" },
          "answer": "d"
        },
        {
          "number": 509,
          "text": "Conditioned food aversions are a key example used to illustrate which perspective on classical conditioning?",
          "options": { "a": "Cognitive", "b": "Neural", "c": "Evolutionary", "d": "Behaviourist" },
          "answer": "c"
        },
        {
          "number": 510,
          "text": "Conditioned taste aversions are peculiar because they often occur with:",
          "options": { "a": "Multiple trials and short delays", "b": "A single trial and potentially long delays", "c": "Only familiar foods", "d": "Only visual stimuli" },
          "answer": "b"
        },
        {
          "number": 511,
          "text": "From an evolutionary standpoint, why should taste aversion learning be rapid (1-2 trials)?",
          "options": { "a": "To ensure the animal enjoys the food.", "b": "To prevent the animal from dying from eating a toxic substance repeatedly.", "c": "To make learning more challenging.", "d": "To match the speed of digestion." },
          "answer": "b"
        },
        {
          "number": 512,
          "text": "Why should taste aversion conditioning be possible over long delays (hours)?",
          "options": { "a": "Because taste perception is slow.", "b": "Because toxic substances often cause illness after a delay.", "c": "To allow the animal time to find an antidote.", "d": "Because memory formation takes hours." },
          "answer": "b"
        },
        {
          "number": 513,
          "text": "Evolutionarily, it is more adaptive for taste aversions to be associated with the _______ of food, rather than just its ingestion.",
          "options": { "a": "color or shape", "b": "location where it was found", "c": "smell or taste", "d": "sound it makes when eaten" },
          "answer": "c"
        },
        {
          "number": 514,
          "text": "Taste aversions are more likely to develop for _______ foods.",
          "options": { "a": "familiar", "b": "novel (unfamiliar)", "c": "sweet", "d": "salty" },
          "answer": "b"
        },
        {
          "number": 515,
          "text": "John Garcia's research with rats showed that nausea (US) was most easily associated with which type of CS?",
          "options": { "a": "Visual (light)", "b": "Auditory (tone)", "c": "Tactile (shock)", "d": "Taste or smell" },
          "answer": "d"
        },
        {
          "number": 516,
          "text": "Broberg and Bernstein used Garcia's findings to help cancer patients avoid food aversions by:",
          "options": { "a": "Giving them anti-nausea medication.", "b": "Telling them not to eat before therapy.", "c": "Giving them an unusual-tasting food before therapy to become the target of the aversion.", "d": "Exposing them repeatedly to the foods they normally eat." },
          "answer": "c"
        },
        {
          "number": 517,
          "text": "What is biological preparedness?",
          "options": { "a": "The state of being ready to learn any association equally well.", "b": "A propensity for learning particular kinds of associations over other kinds.", "c": "The physical readiness of the brain for conditioning.", "d": "An immunity to certain types of conditioning." },
          "answer": "b"
        },
        {
          "number": 518,
          "text": "While rats easily develop taste/smell aversions, birds are more likely to develop food aversions based on _______ cues.",
          "options": { "a": "auditory", "b": "tactile", "c": "visual", "d": "olfactory" },
          "answer": "c"
        },
        {
          "number": 519,
          "text": "Shepard Siegel used classical conditioning principles to explain what phenomenon?",
          "options": { "a": "How phobias develop", "b": "Drug overdoses in experienced users in unusual settings", "c": "Taste aversions in cancer patients", "d": "How pigeons learn complex discriminations" },
          "answer": "b"
        },
        {
          "number": 520,
          "text": "According to Siegel's model, the conditioned stimulus (CS) in drug use includes:",
          "options": { "a": "Only the drug itself", "b": "Only the user's mood", "c": "Only the needle", "d": "The entire context (paraphernalia, setting, companions)" },
          "answer": "d"
        },
        {
          "number": 521,
          "text": "In Siegel's model of drug conditioning, the conditioned response (CR) is often a _______ reaction to the drug's effects (US).",
          "options": { "a": "mimicking", "b": "compensatory (opposite)", "c": "identical", "d": "unrelated" },
          "answer": "b"
        },
        {
          "number": 522,
          "text": "The compensatory CR, triggered by the drug-associated context (CS), leads to the development of:",
          "options": { "a": "Drug sensitization", "b": "Drug tolerance", "c": "Drug aversion", "d": "Drug-induced psychosis" },
          "answer": "b"
        },
        {
          "number": 523,
          "text": "Why might taking the usual drug dose in a novel environment be fatal for an experienced user?",
          "options": { "a": "The drug is stronger in new environments.", "b": "The novel environment lacks the CS, so the protective compensatory CR is reduced or absent.", "c": "The user forgets how much to take in a new place.", "d": "Novel environments trigger allergic reactions to the drug." },
          "answer": "b"
        },
        {
          "number": 524,
          "text": "Cue exposure therapies for addiction involve exposing the addict to _______ without the _______, in order to promote extinction.",
          "options": { "a": "the US / the CS", "b": "the CR / the UR", "c": "the drug (US) / the cues (CS)", "d": "drug-related cues (CS) / the drug (US)" },
          "answer": "d"
        },
        {
          "number": 525,
          "text": "Operant conditioning is the study of how organisms learn from the _______ of their behaviour.",
          "options": { "a": "causes", "b": "motivations", "c": "consequences", "d": "frequency" },
          "answer": "c"
        },
        {
          "number": 526,
          "text": "Classical conditioning primarily involves _______ behaviours, while operant conditioning involves _______ behaviours.",
          "options": { "a": "voluntary / involuntary", "b": "active / reactive", "c": "reactive / active", "d": "complex / simple" },
          "answer": "c"
        },
        {
          "number": 527,
          "text": "Who first studied active (instrumental) behaviours using puzzle boxes with cats?",
          "options": { "a": "Ivan Pavlov", "b": "B. F. Skinner", "c": "John B. Watson", "d": "Edward L. Thorndike" },
          "answer": "d"
        },
        {
          "number": 528,
          "text": "Thorndike's research focused on behaviours that required an organism to do something to manipulate its environment, which he called _______ behaviours.",
          "options": { "a": "respondent", "b": "instrumental", "c": "conditioned", "d": "reflexive" },
          "answer": "b"
        },
        {
          "number": 529,
          "text": "What principle did Thorndike develop based on his puzzle box experiments?",
          "options": { "a": "Law of Association", "b": "Principle of Conditioning", "c": "Law of Effect", "d": "Theory of Preparedness" },
          "answer": "c"
        },
        {
          "number": 530,
          "text": "The Law of Effect states that behaviours followed by a _______ state of affairs tend to be repeated.",
          "options": { "a": "neutral", "b": "punishing", "c": "satisfying", "d": "novel" },
          "answer": "c"
        },
        {
          "number": 531,
          "text": "The Law of Effect states that behaviours followed by an _______ state of affairs are less likely to be repeated.",
          "options": { "a": "unpleasant", "b": "expected", "c": "reinforcing", "d": "intermittent" },
          "answer": "a"
        },
        {
          "number": 532,
          "text": "A key difference between Thorndike's setup and Pavlov's was that in Thorndike's experiments:",
          "options": { "a": "The animal was passive.", "b": "Only punishment was used.", "c": "The animal's behaviour determined the outcome (reward).", "d": "The reward was given regardless of the animal's behaviour." },
          "answer": "c"
        },
        {
          "number": 533,
          "text": "Who coined the term 'operant behaviour'?",
          "options": { "a": "Thorndike", "b": "Pavlov", "c": "Watson", "d": "Skinner" },
          "answer": "d"
        },
        {
          "number": 534,
          "text": "Operant behaviour refers to behaviour that an organism performs that:",
          "options": { "a": "Is purely reflexive.", "b": "Has some impact on the environment.", "c": "Is learned through association.", "d": "Occurs without awareness." },
          "answer": "b"
        },
        {
          "number": 535,
          "text": "Skinner believed most organisms actively engage the environment to reap rewards, much like:",
          "options": { "a": "Dogs passively waiting in a harness", "b": "Cats actively solving a puzzle box", "c": "Aplysia habituating to touch", "d": "Little Albert fearing a rat" },
          "answer": "b"
        },
        {
          "number": 536,
          "text": "What is the Skinner box (or operant conditioning chamber) used for?",
          "options": { "a": "Studying classical conditioning in dogs.", "b": "Measuring physiological responses.", "c": "Studying operant behaviour of small organisms in a controlled environment.", "d": "Testing intelligence in primates." },
          "answer": "c"
        },
        {
          "number": 537,
          "text": "Skinner defined a reinforcer as any stimulus or event that:",
          "options": { "a": "Decreases the likelihood of the behaviour that led to it.", "b": "Is biologically necessary.", "c": "Increases the likelihood of the behaviour that led to it.", "d": "Is perceived as pleasant." },
          "answer": "c"
        },
        {
          "number": 538,
          "text": "Skinner defined a punisher as any stimulus or event that:",
          "options": { "a": "Increases the likelihood of the behaviour that led to it.", "b": "Is perceived as unpleasant.", "c": "Decreases the likelihood of the behaviour that led to it.", "d": "Occurs naturally." },
          "answer": "c"
        },
        {
          "number": 539,
          "text": "In Skinner's terminology, 'positive' refers to situations where a stimulus is _______, and 'negative' refers to situations where a stimulus is ______.",
          "options": { "a": "good / bad", "b": "pleasant / unpleasant", "c": "presented / removed", "d": "increased / decreased" },
          "answer": "c"
        },
        {
          "number": 540,
          "text": "What is positive reinforcement?",
          "options": { "a": "A stimulus is removed, increasing behaviour.", "b": "A stimulus is presented, increasing behaviour.", "c": "A stimulus is removed, decreasing behaviour.", "d": "A stimulus is presented, decreasing behaviour." },
          "answer": "b"
        },
        {
          "number": 541,
          "text": "What is negative reinforcement?",
          "options": { "a": "A stimulus is removed, increasing behaviour.", "b": "A stimulus is presented, increasing behaviour.", "c": "A stimulus is removed, decreasing behaviour.", "d": "A stimulus is presented, decreasing behaviour." },
          "answer": "a"
        },
        {
          "number": 542,
          "text": "What is positive punishment?",
          "options": { "a": "A stimulus is removed, increasing behaviour.", "b": "A stimulus is presented, increasing behaviour.", "c": "A stimulus is removed, decreasing behaviour.", "d": "A stimulus is presented, decreasing behaviour." },
          "answer": "d"
        },
        {
          "number": 543,
          "text": "What is negative punishment?",
          "options": { "a": "A stimulus is removed, increasing behaviour.", "b": "A stimulus is presented, increasing behaviour.", "c": "A stimulus is removed, decreasing behaviour.", "d": "A stimulus is presented, decreasing behaviour." },
          "answer": "c"
        },
        {
          "number": 544,
          "text": "A teenager getting their car keys taken away for speeding is an example of:",
          "options": { "a": "Positive reinforcement", "b": "Negative reinforcement", "c": "Positive punishment", "d": "Negative punishment" },
          "answer": "d"
        },
        {
          "number": 545,
          "text": "Taking an aspirin to get rid of a headache, which makes you more likely to take aspirin for headaches in the future, is an example of:",
          "options": { "a": "Positive reinforcement", "b": "Negative reinforcement", "c": "Positive punishment", "d": "Negative punishment" },
          "answer": "b"
        },
        {
          "number": 546,
          "text": "Receiving praise (a presented stimulus) for doing well on an exam, making you study harder in the future, is an example of:",
          "options": { "a": "Positive reinforcement", "b": "Negative reinforcement", "c": "Positive punishment", "d": "Negative punishment" },
          "answer": "a"
        },
        {
          "number": 547,
          "text": "Getting a speeding ticket (a presented stimulus) that makes you less likely to speed in the future is an example of:",
          "options": { "a": "Positive reinforcement", "b": "Negative reinforcement", "c": "Positive punishment", "d": "Negative punishment" },
          "answer": "c"
        },
        {
          "number": 548,
          "text": "According to the text, reinforcement is generally more effective than punishment in promoting learning because punishment:",
          "options": { "a": "Is always too severe.", "b": "Signals unacceptable behaviour but doesn't specify desired behaviour.", "c": "Only works if it's negative punishment.", "d": "Causes too much fear and anxiety." },
          "answer": "b"
        },
        {
          "number": 549,
          "text": "Food, comfort, shelter, and warmth are examples of _______ reinforcers.",
          "options": { "a": "secondary", "b": "conditioned", "c": "negative", "d": "primary" },
          "answer": "d"
        },
        {
          "number": 550,
          "text": "Why are primary reinforcers effective?",
          "options": { "a": "They are associated with other rewards.", "b": "They help satisfy biological needs or desires.", "c": "They are always presented immediately.", "d": "They only work for animals." },
          "answer": "b"
        },
        {
          "number": 551,
          "text": "Money, verbal approval, and trophies are examples of _______ reinforcers.",
          "options": { "a": "primary", "b": "unconditioned", "c": "secondary (or conditioned)", "d": "negative" },
          "answer": "c"
        },
        {
          "number": 552,
          "text": "How do secondary reinforcers derive their effectiveness?",
          "options": { "a": "From satisfying biological needs directly.", "b": "From their association with primary reinforcers through classical conditioning.", "c": "From being naturally rewarding.", "d": "From being presented on a fixed schedule." },
          "answer": "b"
        },
        {
          "number": 553,
          "text": "What is a key determinant of the effectiveness of a reinforcer related to timing?",
          "options": { "a": "The type of reinforcer used.", "b": "The amount of time between the behaviour and the reinforcer.", "c": "The time of day the behaviour occurs.", "d": "How long the reinforcer lasts." },
          "answer": "b"
        },
        {
          "number": 554,
          "text": "Generally, the _______ the delay between a behaviour and reinforcement, the _______ effective the reinforcer is.",
          "options": { "a": "shorter / less", "b": "longer / more", "c": "longer / less", "d": "shorter / equally" },
          "answer": "c"
        },
        {
          "number": 555,
          "text": "The difficulty in quitting smoking or sticking to a diet can be partly explained by:",
          "options": { "a": "The weakness of primary reinforcers.", "b": "The greater potency of immediate versus delayed reinforcement.", "c": "The overuse of punishment.", "d": "A lack of biological preparedness." },
          "answer": "b"
        },
        {
          "number": 556,
          "text": "Similar to reinforcement, the effectiveness of punishment _______ as the delay between the behaviour and the punishment increases.",
          "options": { "a": "increases", "b": "decreases", "c": "stays the same", "d": "becomes unpredictable" },
          "answer": "b"
        },
        {
          "number": 557,
          "text": "Strategies for increasing the effectiveness of delayed punishment include increasing severity and:",
          "options": { "a": "Using only primary punishers.", "b": "Punishing intermittently.", "c": "Using verbal instructions to bridge the gap.", "d": "Ensuring the punishment is positive, not negative." },
          "answer": "c"
        },
        {
          "number": 558,
          "text": "Learning often takes place in specific contexts, and behaviour may come under _______, developing when a response occurs only with an appropriate discriminative stimulus.",
          "options": { "a": "extinction", "b": "generalization", "c": "stimulus control", "d": "sensitization" },
          "answer": "c"
        },
        {
          "number": 559,
          "text": "What is a discriminative stimulus?",
          "options": { "a": "A stimulus that automatically triggers a response.", "b": "A stimulus that indicates that a response will be reinforced.", "c": "A stimulus that has been paired with punishment.", "d": "A stimulus similar to the original conditioned stimulus." },
          "answer": "b"
        },
        {
          "number": 560,
          "text": "Skinner described stimulus control using the 'three-term contingency'. What are the three terms?",
          "options": { "a": "Stimulus, Response, Consequence", "b": "Discriminative Stimulus, Response, Reinforcer", "c": "CS, US, CR", "d": "Acquisition, Extinction, Recovery" },
          "answer": "b"
        },
        {
          "number": 561,
          "text": "The study where pigeons learned to discriminate between Monet and Picasso paintings demonstrates what principle in operant conditioning?",
          "options": { "a": "Shaping", "b": "Stimulus control (including discrimination and generalization)", "c": "Negative reinforcement", "d": "Intermittent reinforcement effect" },
          "answer": "b"
        },
        {
          "number": 562,
          "text": "In operant conditioning, extinction occurs when:",
          "options": { "a": "The discriminative stimulus is removed.", "b": "Reinforcement stops.", "c": "Punishment is introduced.", "d": "The behaviour is performed too frequently." },
          "answer": "b"
        },
        {
          "number": 563,
          "text": "Compared to classical conditioning, extinction in operant conditioning is more complicated because:",
          "options": { "a": "Operant behaviours cannot be extinguished.", "b": "Reinforcement may not occur after every response (intermittent schedules).", "c": "Only punishment causes extinction.", "d": "Spontaneous recovery never happens." },
          "answer": "b"
        },
        {
          "number": 564,
          "text": "Skinner's exploration of reinforcement schedules revealed that the _______ with which reinforcements appear is crucial in operant conditioning.",
          "options": { "a": "intensity", "b": "type", "c": "pattern (schedule)", "d": "source" },
          "answer": "c"
        },
        {
          "number": 565,
          "text": "What are the two main types of reinforcement schedules based on?",
          "options": { "a": "Positive vs. Negative", "b": "Primary vs. Secondary", "c": "Interval (time) vs. Ratio (responses)", "d": "Continuous vs. Partial" },
          "answer": "c"
        },
        {
          "number": 566,
          "text": "Under which schedule is reinforcement presented at fixed time periods, provided a response is made?",
          "options": { "a": "Fixed Ratio (FR)", "b": "Variable Ratio (VR)", "c": "Fixed Interval (FI)", "d": "Variable Interval (VI)" },
          "answer": "c"
        },
        {
          "number": 567,
          "text": "The 'scalloped' pattern of responding (low rate after reinforcement, high rate before next interval) is characteristic of which schedule?",
          "options": { "a": "Fixed Ratio (FR)", "b": "Variable Ratio (VR)", "c": "Fixed Interval (FI)", "d": "Variable Interval (VI)" },
          "answer": "c"
        },
        {
          "number": 568,
          "text": "Students cramming for exams just before the test date resembles behaviour on a _______ schedule.",
          "options": { "a": "Fixed Ratio (FR)", "b": "Variable Ratio (VR)", "c": "Fixed Interval (FI)", "d": "Variable Interval (VI)" },
          "answer": "c"
        },
        {
          "number": 569,
          "text": "Under which schedule is reinforcement based on an average time elapsed since the last reinforcement?",
          "options": { "a": "Fixed Ratio (FR)", "b": "Variable Ratio (VR)", "c": "Fixed Interval (FI)", "d": "Variable Interval (VI)" },
          "answer": "d"
        },
        {
          "number": 570,
          "text": "Which schedule typically produces steady, consistent responding because the time of the next reinforcement is unpredictable?",
          "options": { "a": "Fixed Ratio (FR)", "b": "Variable Ratio (VR)", "c": "Fixed Interval (FI)", "d": "Variable Interval (VI)" },
          "answer": "d"
        },
        {
          "number": 571,
          "text": "Radio promotional giveaways that occur unpredictably around once per hour are an example of a _______ schedule.",
          "options": { "a": "Fixed Ratio (FR)", "b": "Variable Ratio (VR)", "c": "Fixed Interval (FI)", "d": "Variable Interval (VI)" },
          "answer": "d"
        },
        {
          "number": 572,
          "text": "Under which schedule is reinforcement delivered after a specific number of responses have been made?",
          "options": { "a": "Fixed Ratio (FR)", "b": "Variable Ratio (VR)", "c": "Fixed Interval (FI)", "d": "Variable Interval (VI)" },
          "answer": "a"
        },
        {
          "number": 573,
          "text": "Piecework pay (payment after making a set number of items) operates on a _______ schedule.",
          "options": { "a": "Fixed Ratio (FR)", "b": "Variable Ratio (VR)", "c": "Fixed Interval (FI)", "d": "Variable Interval (VI)" },
          "answer": "a"
        },
        {
          "number": 574,
          "text": "What is continuous reinforcement?",
          "options": { "a": "Reinforcement given randomly.", "b": "Reinforcement given after every single response.", "c": "Reinforcement given after a fixed time interval.", "d": "Reinforcement given after an average number of responses." },
          "answer": "b"
        },
        {
          "number": 575,
          "text": "Under which schedule is reinforcement based on a particular average number of responses?",
          "options": { "a": "Fixed Ratio (FR)", "b": "Variable Ratio (VR)", "c": "Fixed Interval (FI)", "d": "Variable Interval (VI)" },
          "answer": "b"
        },
        {
          "number": 576,
          "text": "Slot machines in casinos typically pay out on a _______ schedule.",
          "options": { "a": "Fixed Ratio (FR)", "b": "Variable Ratio (VR)", "c": "Fixed Interval (FI)", "d": "Variable Interval (VI)" },
          "answer": "b"
        },
        {
          "number": 577,
          "text": "Which type of schedule generally produces the highest and most consistent rates of responding?",
          "options": { "a": "Fixed Interval (FI)", "b": "Variable Interval (VI)", "c": "Fixed Ratio (FR)", "d": "Variable Ratio (VR)" },
          "answer": "d"
        },
        {
          "number": 578,
          "text": "What is intermittent reinforcement?",
          "options": { "a": "Reinforcement given after every response.", "b": "When only some of the responses made are followed by reinforcement.", "c": "Another term for punishment.", "d": "Reinforcement that satisfies biological needs." },
          "answer": "b"
        },
        {
          "number": 579,
          "text": "What is the intermittent reinforcement effect?",
          "options": { "a": "Behaviours learned quickly under intermittent reinforcement.", "b": "Behaviours maintained under intermittent schedules resist extinction better than those under continuous reinforcement.", "c": "Intermittent reinforcement is less effective than continuous reinforcement.", "d": "Organisms prefer intermittent reinforcement." },
          "answer": "b"
        },
        {
          "number": 580,
          "text": "Why are behaviours on intermittent schedules more resistant to extinction?",
          "options": { "a": "The reinforcement is stronger.", "b": "The organism forgets the behaviour less easily.", "c": "It's harder for the organism to detect when reinforcement has actually stopped.", "d": "Continuous reinforcement weakens the behaviour." },
          "answer": "c"
        },
        {
          "number": 581,
          "text": "Behaviour maintained under which schedule would likely be most resistant to extinction?",
          "options": { "a": "Continuous reinforcement (FR-1)", "b": "Fixed Interval (FI-1 minute)", "c": "Fixed Ratio (FR-10)", "d": "Variable Ratio (VR-100)" },
          "answer": "d"
        },
        
          {
            "number": 582,
            "text": "According to the text, how do dolphins learn complex sequences like those seen in aquarium shows?",
            "options": {
              "a": "They learn the entire sequence in one smooth motion through intense training.",
              "b": "They are genetically predisposed to perform such aquabatics.",
              "c": "Elements of their behaviour are shaped over time through successive approximations.",
              "d": "They learn by observing older, trained dolphins performing the sequence."
            },
            "answer": "c"
          },
          {
            "number": 583,
            "text": "What criticism did Skinner have regarding the trial-by-trial experiments of Pavlov and Thorndike?",
            "options": {
              "a": "They focused too much on punishment rather than reinforcement.",
              "b": "They were too complex for animals to understand.",
              "c": "They were rather artificial and didn't reflect how behaviour naturally occurs.",
              "d": "They failed to account for cognitive processes in learning."
            },
            "answer": "c"
          },
          {
            "number": 584,
            "text": "What is the definition of shaping provided in the text?",
            "options": {
              "a": "Learning that results from observing the actions of others.",
              "b": "A type of learning where behaviour is controlled by consequences.",
              "c": "Learning that results from the reinforcement of successive steps to a final desired behaviour.",
              "d": "The process of learning through classical conditioning."
            },
            "answer": "c"
          },
          {
            "number": 585,
            "text": "How do the outcomes of one set of behaviours influence the next set in the process of shaping?",
            "options": {
              "a": "They inhibit the next set of behaviours.",
              "b": "They shape the next set of behaviours.",
              "c": "They have no influence on subsequent behaviours.",
              "d": "They trigger a punishment response."
            },
            "answer": "b"
          },
          {
            "number": 586,
            "text": "What example is given for how parents use shaping to teach children complex skills?",
            "options": {
              "a": "Teaching language by correcting grammar.",
              "b": "Teaching math by solving problems together.",
              "c": "Teaching reading by sounding out letters.",
              "d": "Teaching riding a bike by reinforcing successive necessary behaviours."
            },
            "answer": "d"
          },
          {
            "number": 587,
            "text": "In what year did Skinner realize the potential power of shaping while working on a wartime project?",
            "options": { "a": "1938", "b": "1943", "c": "1958", "d": "1948" },
            "answer": "b"
          },
          {
            "number": 588,
            "text": "What specific behaviour did Skinner and his colleagues try to teach pigeons in the flour mill lab?",
            "options": {
              "a": "To press a lever for food.",
              "b": "To peck a specific key.",
              "c": "To 'bowl' by swiping at a ball.",
              "d": "To navigate a complex maze."
            },
            "answer": "c"
          },
          {
            "number": 589,
            "text": "What was the initial step Skinner took that successfully started the shaping process for the pigeon bowling task?",
            "options": {
              "a": "Reinforcing only perfect swipes.",
              "b": "Reinforcing looking at the ball.",
              "c": "Punishing incorrect movements.",
              "d": "Showing the pigeon how to swipe."
            },
            "answer": "b"
          },
          {
            "number": 590,
            "text": "Why is it difficult to get a rat in a Skinner box to press the bar without shaping?",
            "options": {
              "a": "Rats are naturally afraid of levers.",
              "b": "Bar pressing is not high in a rat's natural hierarchy of responses.",
              "c": "Rats cannot see the bar clearly in the box.",
              "d": "The food reward is not motivating enough."
            },
            "answer": "b"
          },
          {
            "number": 591,
            "text": "Which of the following is the first step described in shaping a rat to press a bar?",
            "options": {
              "a": "Reinforcing touching the bar.",
              "b": "Reinforcing taking a step towards the bar.",
              "c": "Reinforcing turning in the direction of the bar.",
              "d": "Reinforcing standing near the bar."
            },
            "answer": "c"
          },
          {
            "number": 592,
            "text": "What term is used to describe each behaviour that gets incrementally closer to the overall desired behaviour during shaping?",
            "options": {
              "a": "Conditioned response",
              "b": "Operant behaviour",
              "c": "Successive approximation",
              "d": "Reinforced action"
            },
            "answer": "c"
          },
          {
            "number": 593,
            "text": "In the example of B.F. Skinner shaping the dog Agnes, what was Agnes being reinforced for?",
            "options": {
              "a": "Sitting quietly on the floor.",
              "b": "Barking at the correct time.",
              "c": "Touching successively higher lines on the wall.",
              "d": "Fetching a specific object."
            },
            "answer": "c"
          },
          {
            "number": 594,
            "text": "According to the text, what is one of the keys to establishing reliable operant behaviours?",
            "options": {
              "a": "The intensity of the stimulus.",
              "b": "The correlation between response and reinforcement.",
              "c": "The complexity of the desired behaviour.",
              "d": "The species of the organism."
            },
            "answer": "b"
          },
          {
            "number": 595,
            "text": "How does the correlation between response and reinforcement differ between continuous and intermittent reinforcement?",
            "options": {
              "a": "It is stronger in intermittent reinforcement.",
              "b": "It is perfect (one-to-one) in continuous reinforcement and weaker in intermittent.",
              "c": "It is absent in continuous reinforcement but present in intermittent.",
              "d": "It is equally strong in both types."
            },
            "answer": "b"
          },
          {
            "number": 596,
            "text": "What important principle from the Methods in Psychology chapter is relevant to understanding superstitious behaviour?",
            "options": {
              "a": "Operational definitions are crucial for measurement.",
              "b": "Random assignment is necessary for causal claims.",
              "c": "Correlation does not imply causation.",
              "d": "Ethical considerations must guide research."
            },
            "answer": "c"
          },
          {
            "number": 597,
            "text": "In Skinner's (1948) experiment illustrating superstitious behaviour, how often was food delivered to the pigeons?",
            "options": {
              "a": "Every time they pecked a key.",
              "b": "Randomly.",
              "c": "Every 15 seconds.",
              "d": "Only when they performed a specific action."
            },
            "answer": "c"
          },
          {
            "number": 598,
            "text": "What kinds of behaviours did Skinner observe in the pigeons in his superstitious behaviour experiment?",
            "options": {
              "a": "Only bar pressing.",
              "b": "Aggressive behaviours towards each other.",
              "c": "Sleeping most of the time.",
              "d": "Odd, idiosyncratic behaviours like pecking corners or turning circles."
            },
            "answer": "d"
          },
          {
            "number": 599,
            "text": "How did Skinner explain the occurrence of 'superstitious' behaviours in his pigeons?",
            "options": {
              "a": "The pigeons were intentionally trying to make food appear.",
              "b": "The behaviours were genetically programmed responses to confinement.",
              "c": "The pigeons were repeating behaviours that had been accidentally reinforced.",
              "d": "The behaviours were a sign of neurological distress."
            },
            "answer": "c"
          },
          {
            "number": 600,
            "text": "What example of human superstition is mentioned in relation to accidental correlation?",
            "options": {
              "a": "Avoiding black cats.",
              "b": "Knocking on wood.",
              "c": "Baseball players not showering after playing well.",
              "d": "Believing in lucky numbers."
            },
            "answer": "c"
          },
          {
            "number": 601,
            "text": "Which researchers questioned Skinner's characterization of pigeon behaviours as superstitious?",
            "options": {
              "a": "Pavlov and Thorndike",
              "b": "Watson and Rayner",
              "c": "Staddon & Simmelhag",
              "d": "Olds and Milner"
            },
            "answer": "c"
          },
          {
            "number": 602,
            "text": "Subsequent studies on humans found that superstitious behaviour can be produced by reinforcing adults or children using schedules where reinforcement is:",
            "options": {
              "a": "delivered very frequently.",
              "b": "contingent on complex responses.",
              "c": "not contingent on their responses.",
              "d": "delayed significantly after the response."
            },
            "answer": "c"
          },
          {
            "number": 603,
            "text": "Like Watson before him, Skinner was satisfied to observe behaviour without looking for deeper explanations involving:",
            "options": {
              "a": "evolutionary influences.",
              "b": "genetic predispositions.",
              "c": "mental processes.",
              "d": "social learning."
            },
            "answer": "c"
          },
          {
            "number": 604,
            "text": "According to the behaviorist view described, why does an organism behave in a certain way?",
            "options": {
              "a": "Because it wants or wishes to.",
              "b": "In response to stimuli in the environment.",
              "c": "Due to unconscious desires.",
              "d": "Based on logical reasoning."
            },
            "answer": "b"
          },
          {
            "number": 605,
            "text": "What three elements are examined to expand the view of operant conditioning beyond Skinner's initial framework?",
            "options": {
              "a": "Stimulus, response, and reinforcement",
              "b": "Classical, operant, and observational",
              "c": "Cognitive, neural, and evolutionary",
              "d": "Perception, memory, and attention"
            },
            "answer": "c"
          },
          {
            "number": 606,
            "text": "Who was one of the first researchers to question Skinner's strictly behaviourist interpretation and advocate a cognitive approach to operant learning?",
            "options": {
              "a": "Ivan Pavlov",
              "b": "John B. Watson",
              "c": "Edward Chace Tolman",
              "d": "Albert Bandura"
            },
            "answer": "c"
          },
          {
            "number": 607,
            "text": "What did Tolman propose that an animal established through conditioning experience?",
            "options": {
              "a": "A simple stimulus-response connection.",
              "b": "A means-ends relationship.",
              "c": "A fixed action pattern.",
              "d": "A conditioned emotional response."
            },
            "answer": "b"
          },
          {
            "number": 608,
            "text": "Tolman's means-ends relationship concept suggests that conditioning produces knowledge or a belief that:",
            "options": {
              "a": "a specific stimulus automatically triggers a response.",
              "b": "all stimuli are equally learnable.",
              "c": "a specific reward will appear if a specific response is made in a situation.",
              "d": "learning can only occur with immediate reinforcement."
            },
            "answer": "c"
          },
          {
            "number": 609,
            "text": "How is Tolman's theory similar to the Rescorla-Wagner model of classical conditioning?",
            "options": {
              "a": "Both emphasize the role of punishment.",
              "b": "Both focus exclusively on observable behaviour.",
              "c": "Both suggest stimuli establish internal cognitive states (expectations) that produce behaviour.",
              "d": "Both deny the importance of reinforcement."
            },
            "answer": "c"
          },
          {
            "number": 610,
            "text": "Cognitive theories of learning, like Tolman's, focus less on the stimulus-response (S-R) connection and more on:",
            "options": {
              "a": "the physiological changes during learning.",
              "b": "what happens in the organism's mind.",
              "c": "the schedule of reinforcement.",
              "d": "the evolutionary history of the organism."
            },
            "answer": "b"
          },
          {
            "number": 611,
            "text": "What two phenomena did Tolman study that strongly suggest simple S-R interpretations are inadequate?",
            "options": {
              "a": "Shaping and chaining",
              "b": "Classical and operant conditioning",
              "c": "Latent learning and cognitive maps",
              "d": "Habituation and sensitization"
            },
            "answer": "c"
          },
          {
            "number": 612,
            "text": "What is latent learning?",
            "options": {
              "a": "Learning that occurs rapidly after a single trial.",
              "b": "Learning that is immediately demonstrated in behaviour.",
              "c": "Learning that occurs through observation.",
              "d": "Learning that is not manifested as a behavioural change until sometime in the future."
            },
            "answer": "d"
          },
          {
            "number": 613,
            "text": "Tolman & Honzik's (1930a) latent learning experiment challenged the behaviourist position by showing that learning occurred:",
            "options": {
              "a": "only with continuous reinforcement.",
              "b": "faster with punishment than reinforcement.",
              "c": "without any obvious reinforcement.",
              "d": "only in highly intelligent animals."
            },
            "answer": "c"
          },
          {
            "number": 614,
            "text": "In Tolman's maze experiment (Figure 7.10), which group of rats showed a dramatic improvement in performance after day 10?",
            "options": {
              "a": "The control group (never reinforced).",
              "b": "The regularly reinforced group.",
              "c": "The group reinforced only for the first 10 days.",
              "d": "The group treated like the control group for 10 days, then reinforced."
            },
            "answer": "d"
          },
          {
            "number": 615,
            "text": "What did the results of the latent learning experiment suggest the third group of rats had learned during the first 10 days?",
            "options": {
              "a": "Nothing significant about the maze.",
              "b": "Only how to avoid wrong turns.",
              "c": "A lot about the maze and the goal box location, despite no reinforcement.",
              "d": "To fear the maze environment."
            },
            "answer": "c"
          },
          {
            "number": 616,
            "text": "What is a cognitive map, according to Tolman?",
            "options": {
              "a": "A sequence of stimulus-response associations.",
              "b": "A physical map provided by the experimenter.",
              "c": "A mental representation of the physical features of the environment.",
              "d": "A diagram of neural pathways involved in learning."
            },
            "answer": "c"
          },
          {
            "number": 617,
            "text": "In Tolman's experiment testing cognitive maps (Figure 7.11), rats were initially trained in a maze (a). What change was made in the test phase (b)?",
            "options": {
              "a": "The maze was mirrored left-to-right.",
              "b": "The start and goal boxes were switched.",
              "c": "The original path was blocked, and alternative paths were available.",
              "d": "The lighting conditions were changed."
            },
            "answer": "c"
          },
          {
            "number": 618,
            "text": "When faced with the blocked path in Figure 7.11b, what did Tolman's rats typically do?",
            "options": {
              "a": "Gave up and didn't explore.",
              "b": "Showed stimulus generalization and chose the path closest to the original.",
              "c": "Chose the path that led most directly towards the goal box's original location.",
              "d": "Randomly chose one of the new paths."
            },
            "answer": "c"
          },
          {
            "number": 619,
            "text": "What do latent learning and cognitive maps together suggest about operant conditioning?",
            "options": {
              "a": "It only involves responding to stimuli.",
              "b": "It is identical to classical conditioning.",
              "c": "It involves cognitive components, even in rats.",
              "d": "It is primarily driven by punishment."
            },
            "answer": "c"
          },
          {
            "number": 620,
            "text": "The discovery of what phenomenon provided the first hint about specific brain structures involved in reinforcement?",
            "options": {
              "a": "Long-term potentiation",
              "b": "Neurotransmitters",
              "c": "Pleasure centres",
              "d": "Split-brain effects"
            },
            "answer": "c"
          },
          {
            "number": 621,
            "text": "Which researchers discovered pleasure centres by allowing rats to control electrical stimulation of their own brains?",
            "options": {
              "a": "Tolman and Honzik",
              "b": "Skinner and Watson",
              "c": "Olds and Milner",
              "d": "Rescorla and Wagner"
            },
            "answer": "c"
          },
          {
            "number": 622,
            "text": "What behaviour did rats exhibit when stimulating these 'pleasure centres'?",
            "options": {
              "a": "They avoided pressing the bar.",
              "b": "They pressed the bar occasionally.",
              "c": "They pressed the bar repeatedly, ignoring basic needs like food and water.",
              "d": "They showed signs of distress and fear."
            },
            "answer": "c"
          },
          {
            "number": 623,
            "text": "Neurons in which pathway are identified as most susceptible to stimulation that produces pleasure?",
            "options": {
              "a": "The corticospinal tract",
              "b": "The spinothalamic tract",
              "c": "The medial forebrain bundle",
              "d": "The visual pathway"
            },
            "answer": "c"
          },
          {
            "number": 624,
            "text": "The medial forebrain bundle runs from the midbrain through the hypothalamus into which structure?",
            "options": {
              "a": "Amygdala",
              "b": "Hippocampus",
              "c": "Cerebellum",
              "d": "Nucleus accumbens"
            },
            "answer": "d"
          },
          {
            "number": 625,
            "text": "What type of neurotransmitter do neurons along the pleasure pathway, especially in the nucleus accumbens, primarily secrete?",
            "options": { "a": "Serotonin", "b": "Acetylcholine", "c": "GABA", "d": "Dopamine" },
            "answer": "d"
          },
          {
            "number": 626,
            "text": "Higher levels of dopamine in the brain are usually associated with:",
            "options": {
              "a": "Negative emotions and anxiety.",
              "b": "Sleep and relaxation.",
              "c": "Positive emotions.",
              "d": "Pain perception."
            },
            "answer": "c"
          },
          {
            "number": 627,
            "text": "What are the competing hypotheses mentioned regarding the precise role of dopamine in reward?",
            "options": {
              "a": "Dopamine controls motor movement vs. sensory perception.",
              "b": "Dopamine is linked to expectation/wanting/craving vs. the reward/liking itself.",
              "c": "Dopamine causes pleasure vs. reduces pain.",
              "d": "Dopamine regulates short-term vs. long-term memory."
            },
            "answer": "b"
          },
          {
            "number": 628,
            "text": "What happens when drugs that block the action of dopamine are administered to rats self-stimulating pleasure centres?",
            "options": {
              "a": "They stimulate even more intensely.",
              "b": "There is no change in behaviour.",
              "c": "They cease stimulating the pleasure centres.",
              "d": "They show withdrawal symptoms."
            },
            "answer": "c"
          },
          {
            "number": 629,
            "text": "Drugs like cocaine, amphetamine, and opiates have reinforcing effects partly because they:",
            "options": {
              "a": "block dopamine pathways.",
              "b": "activate dopamine pathways and centres.",
              "c": "increase serotonin levels.",
              "d": "decrease GABA activity."
            },
            "answer": "b"
          },
          {
            "number": 630,
            "text": "fMRI studies show increased activity in the nucleus accumbens in response to:",
            "options": {
              "a": "Threatening stimuli.",
              "b": "Painful procedures.",
              "c": "Pictures of attractive women (in heterosexual men) and anticipated money.",
              "d": "Complex mathematical problems."
            },
            "answer": "c"
          },
          {
            "number": 631,
            "text": "Under what condition does dopamine secretion increase in the nucleus accumbens when rats receive primary reinforcers (like food) or engage in sexual activity?",
            "options": {
              "a": "Only when they are satiated or not aroused.",
              "b": "Regardless of their motivational state.",
              "c": "Only when they are hungry, thirsty, or sexually aroused.",
              "d": "Only during sleep."
            },
            "answer": "c"
          },
          {
            "number": 632,
            "text": "The text suggests that the biological structures underlying rewards likely evolved to ensure species engaged in activities related to:",
            "options": {
              "a": "Complex problem solving.",
              "b": "Artistic expression.",
              "c": "Survival and reproduction.",
              "d": "Social dominance."
            },
            "answer": "c"
          },
          {
            "number": 633,
            "text": "In the 'trust' game study by Delgado et al. (2005), participants could keep $1 or transfer it to a partner who would receive $3. What could the partner then do?",
            "options": {
              "a": "Keep the $3 or return $1 to the participant.",
              "b": "Keep the $3 or share half ($1.50) with the participant.",
              "c": "Only keep the $3.",
              "d": "Only share half ($1.50) with the participant."
            },
            "answer": "b"
          },
          {
            "number": 634,
            "text": "How did participants typically learn who was trustworthy in the trust game?",
            "options": {
              "a": "They were told explicitly by the experimenter.",
              "b": "Based on the partner's appearance.",
              "c": "Through trial-and-error learning based on sharing behaviour.",
              "d": "By guessing randomly."
            },
            "answer": "c"
          },
          {
            "number": 635,
            "text": "In the Delgado et al. study, how did providing descriptions of partners (trustworthy, neutral, suspect) affect participants' behaviour, even when all partners shared equally?",
            "options": {
              "a": "It had no effect; behaviour was based only on trial-and-error.",
              "b": "Participants transferred less money to the trustworthy partner.",
              "c": "Participants transferred more money to the trustworthy partner, ignoring trial-by-trial feedback.",
              "d": "Participants transferred equal amounts to all partners."
            },
            "answer": "c"
          },
          {
            "number": 636,
            "text": "Brain signals distinguishing positive and negative feedback were only evident when participants played with which type of partner in the Delgado et al. study?",
            "options": {
              "a": "Trustworthy partner",
              "b": "Suspect partner",
              "c": "Neutral partner",
              "d": "All partners equally"
            },
            "answer": "c"
          },
          {
            "number": 637,
            "text": "The case of Bernard Madoff is used to illustrate how powerful cognitions (like trust) might cause people to:",
            "options": {
              "a": "invest more wisely.",
              "b": "miss danger signals and fail to learn from feedback.",
              "c": "become overly suspicious.",
              "d": "verify information more carefully."
            },
            "answer": "b"
          },
          {
            "number": 638,
            "text": "What 'curious observation' in early T maze studies contradicted standard operant conditioning principles?",
            "options": {
              "a": "Rats learned the maze faster when hungry.",
              "b": "If a rat found food in one arm, it often ran down the other arm on the next trial.",
              "c": "Rats preferred turning left over turning right.",
              "d": "Reinforcement had no effect on maze learning."
            },
            "answer": "b"
          },
          {
            "number": 639,
            "text": "From an evolutionary perspective, why might a rat choose the opposite arm of a T maze on the next trial after finding food?",
            "options": {
              "a": "It forgot where the food was.",
              "b": "It's a random behaviour pattern.",
              "c": "It's consistent with a foraging strategy to search new locations for food.",
              "d": "It's trying to confuse the experimenter."
            },
            "answer": "c"
          },
          {
            "number": 640,
            "text": "What kind of spatial abilities do foraging animals like rats possess?",
            "options": {
              "a": "Poor spatial memory.",
              "b": "Ability to only remember the last place food was found.",
              "c": "Well-developed spatial representations for efficient searching.",
              "d": "Reliance solely on scent trails."
            },
            "answer": "c"
          },
          {
            "number": 641,
            "text": "In the complex multiarm maze (Figure 7.14), how do rats typically search for food?",
            "options": {
              "a": "Randomly entering arms.",
              "b": "Repeatedly visiting the same few arms.",
              "c": "Systematically going from arm to arm, rarely returning to previously visited ones.",
              "d": "Following a fixed sequence regardless of food location."
            },
            "answer": "c"
          },
          {
            "number": 642,
            "text": "Who were Keller and Marian Breland in relation to B.F. Skinner?",
            "options": {
              "a": "His mentors",
              "b": "His colleagues",
              "c": "His former students",
              "d": "His critics from classical conditioning"
            },
            "answer": "c"
          },
          {
            "number": 643,
            "text": "What problem did the Brelands encounter when trying to train pigs to drop coins in a box?",
            "options": {
              "a": "The pigs couldn't physically pick up the coins.",
              "b": "The pigs persisted in rooting with the coins.",
              "c": "The pigs were afraid of the box.",
              "d": "The pigs quickly lost interest."
            },
            "answer": "b"
          },
          {
            "number": 644,
            "text": "What did raccoons do instead of dropping coins in the box when trained by the Brelands?",
            "options": {
              "a": "They ate the coins.",
              "b": "They hid the coins.",
              "c": "They threw the coins out of the box.",
              "d": "They rubbed the coins between their paws."
            },
            "answer": "d"
          },
          {
            "number": 645,
            "text": "How did the Brelands explain the 'misbehaviour' of the pigs and raccoons?",
            "options": {
              "a": "The animals were not intelligent enough.",
              "b": "The reinforcement schedule was wrong.",
              "c": "The animals began to treat the coins like food, engaging in biologically predisposed behaviours.",
              "d": "The training environment was too stressful."
            },
            "answer": "c"
          },
          {
            "number": 646,
            "text": "The Brelands' work suggests that all species are biologically predisposed to learn some things more readily than others, consistent with their:",
            "options": {
              "a": "individual intelligence.",
              "b": "social ranking.",
              "c": "evolutionary history.",
              "d": "current motivational state."
            },
            "answer": "c"
          },
          {
            "number": 647,
            "text": "Why might evolved adaptive behaviours lead an organism 'astray'?",
            "options": {
              "a": "Evolution always produces perfect adaptations.",
              "b": "If environmental circumstances change from those in which the behaviour evolved.",
              "c": "Learning overrides all evolved behaviours.",
              "d": "Organisms intentionally misuse their adaptations."
            },
            "answer": "b"
          },
          {
            "number": 648,
            "text": "What is reward prediction error?",
            "options": {
              "a": "The error made when predicting the timing of a reward.",
              "b": "The difference between the actual reward received and the predicted/expected reward.",
              "c": "The tendency to overestimate the value of a reward.",
              "d": "An error in the brain's reward pathway."
            },
            "answer": "b"
          },
          {
            "number": 649,
            "text": "A positive prediction error occurs when the outcome is _______, leading the animal to _______ the behaviour.",
            "options": {
              "a": "worse-than-expected; repeat",
              "b": "better-than-expected; be less likely to repeat",
              "c": "worse-than-expected; be less likely to repeat",
              "d": "better-than-expected; learn to repeat"
            },
            "answer": "d"
          },
          {
            "number": 650,
            "text": "A negative prediction error occurs when the outcome is _______, leading the animal to _______ the behaviour.",
            "options": {
              "a": "worse-than-expected; repeat",
              "b": "better-than-expected; be less likely to repeat",
              "c": "worse-than-expected; be less likely to repeat",
              "d": "better-than-expected; learn to repeat"
            },
            "answer": "c"
          },
          {
            "number": 651,
            "text": "Wolfram Schultz's studies on monkeys found that dopamine neuron activity increased when monkeys received _______ rewards.",
            "options": { "a": "expected", "b": "delayed", "c": "unexpected", "d": "small" },
            "answer": "c"
          },
          {
            "number": 652,
            "text": "Schultz found dopamine neuron activity decreased when monkeys:",
            "options": {
              "a": "received unexpected rewards.",
              "b": "received expected rewards.",
              "c": "did not receive expected rewards.",
              "d": "were performing the task correctly."
            },
            "answer": "c"
          },
          {
            "number": 653,
            "text": "These findings suggest dopamine neurons play a key role in generating:",
            "options": {
              "a": "the motor response.",
              "b": "the expectation of reward.",
              "c": "the reward prediction error signal.",
              "d": "the memory of the reward."
            },
            "answer": "c"
          },
          {
            "number": 654,
            "text": "Parkinson's disease involves the loss of neurons that produce which neurotransmitter?",
            "options": { "a": "Serotonin", "b": "Acetylcholine", "c": "Dopamine", "d": "GABA" },
            "answer": "c"
          },
          {
            "number": 655,
            "text": "How does the drug L-dopa help treat Parkinson's disease?",
            "options": {
              "a": "It blocks dopamine receptors.",
              "b": "It increases serotonin production.",
              "c": "It spurs surviving neurons to produce more dopamine.",
              "d": "It prevents dopamine breakdown."
            },
            "answer": "c"
          },
          {
            "number": 656,
            "text": "Research suggests that in individuals with Parkinson's performing reward-related tasks, the reward prediction error signal is:",
            "options": { "a": "enhanced", "b": "unchanged", "c": "disrupted", "d": "irrelevant" },
            "answer": "c"
          },
          {
            "number": 657,
            "text": "What problems are sometimes associated with Parkinson's drugs that stimulate dopamine receptors?",
            "options": {
              "a": "Increased anxiety and depression.",
              "b": "Memory loss.",
              "c": "Compulsive gambling, shopping, and impulsive behaviours.",
              "d": "Excessive sleepiness."
            },
            "answer": "c"
          },
          {
            "number": 658,
            "text": "In the study by Rigoli and colleagues (2016), what effect did administering L-dopa have on healthy adults performing a gambling task?",
            "options": {
              "a": "It decreased their propensity to gamble.",
              "b": "It had no effect on their gambling behaviour.",
              "c": "It increased their propensity to gamble.",
              "d": "It made them choose the guaranteed reward more often."
            },
            "answer": "c"
          },
          {
            "number": 659,
            "text": "What is observational learning?",
            "options": {
              "a": "Learning through trial and error.",
              "b": "Learning by watching the actions of others.",
              "c": "Learning via reinforcement and punishment.",
              "d": "Implicit learning without awareness."
            },
            "answer": "b"
          },
          {
            "number": 660,
            "text": "In the example of Rodney and Margie, how did Margie learn to keep away from the stove?",
            "options": {
              "a": "She was punished for touching it.",
              "b": "She was reinforced for staying away.",
              "c": "She touched it and got burned like Rodney.",
              "d": "She learned by watching Rodney get burned."
            },
            "answer": "d"
          },
          {
            "number": 661,
            "text": "According to Bandura (1965), how are appropriate social behaviours primarily passed on in societies?",
            "options": {
              "a": "Through genetic inheritance.",
              "b": "Through explicit instruction manuals.",
              "c": "Largely through observation.",
              "d": "Through trial-and-error learning."
            },
            "answer": "c"
          },
          {
            "number": 662,
            "text": "What common examples of observational learning are mentioned in the text?",
            "options": {
              "a": "Learning to walk and talk.",
              "b": "Learning historical facts and dates.",
              "c": "Using chopsticks, operating a remote control, performing surgery.",
              "d": "Developing phobias and anxieties."
            },
            "answer": "c"
          },
          {
            "number": 663,
            "text": "Who investigated the parameters of observational learning in a famous series of studies involving a Bobo doll?",
            "options": {
              "a": "B. F. Skinner",
              "b": "Edward Tolman",
              "c": "Ivan Pavlov",
              "d": "Albert Bandura"
            },
            "answer": "d"
          },
          {
            "number": 664,
            "text": "In Bandura's Bobo doll experiment, what did the adult model do?",
            "options": {
              "a": "Played gently with the Bobo doll.",
              "b": "Ignored the Bobo doll.",
              "c": "Acted aggressively towards the Bobo doll.",
              "d": "Assembled the Bobo doll."
            },
            "answer": "c"
          },
          {
            "number": 665,
            "text": "Compared to children who didn't observe the aggressive model, how did children who observed the model behave towards the Bobo doll?",
            "options": {
              "a": "They were less likely to interact with it.",
              "b": "They interacted with it in the same way.",
              "c": "They were more than twice as likely to interact aggressively.",
              "d": "They tried to protect the doll from harm."
            },
            "answer": "c"
          },
          {
            "number": 666,
            "text": "How did the consequences observed by the children (model being punished vs. rewarded) affect their subsequent aggression?",
            "options": {
              "a": "It had no effect on their aggression.",
              "b": "Observing punishment increased aggression, reward decreased it.",
              "c": "Observing punishment decreased aggression, reward increased it.",
              "d": "Both punishment and reward decreased aggression."
            },
            "answer": "c"
          },
          {
            "number": 667,
            "text": "Research linking media violence exposure to aggression suggests that _______ is one of the responsible mechanisms.",
            "options": {
              "a": "classical conditioning",
              "b": "operant conditioning",
              "c": "observational learning",
              "d": "latent learning"
            },
            "answer": "c"
          },
          {
            "number": 668,
            "text": "What is a diffusion chain in the context of observational learning?",
            "options": {
              "a": "A series of reinforcements leading to a behaviour.",
              "b": "The gradual weakening of a learned response.",
              "c": "A process where individuals learn by observing, then become models for others.",
              "d": "The spread of information through explicit teaching."
            },
            "answer": "c"
          },
          {
            "number": 669,
            "text": "Experiments showed that novel tool use could be spread through diffusion chains involving how many children?",
            "options": {
              "a": "Only 2-3 children",
              "b": "Up to 5 children",
              "c": "Across 10 and even 20 children",
              "d": "Diffusion chains were not effective for tool use"
            },
            "answer": "c"
          },
          {
            "number": 670,
            "text": "Studies of athletes indicate that they rely _______ on observational learning to improve critical skills.",
            "options": { "a": "rarely", "b": "occasionally", "c": "heavily", "d": "only initially" },
            "answer": "c"
          },
          {
            "number": 671,
            "text": "Can observing someone perform a motor task lead to learning in the observer, even without practice?",
            "options": {
              "a": "No, physical practice is always required.",
              "b": "Yes, observation can produce robust learning, sometimes as much as practice.",
              "c": "Yes, but only for very simple tasks.",
              "d": "No, observation only helps with understanding, not performance."
            },
            "answer": "b"
          },
          {
            "number": 672,
            "text": "Observational learning is suggested to be especially effective when observing:",
            "options": {
              "a": "only experts.",
              "b": "only novices.",
              "c": "both experts and novices.",
              "d": "someone of the same age."
            },
            "answer": "c"
          },
          {
            "number": 673,
            "text": "How does interrupting performance affect observational learning compared to physical motor learning?",
            "options": {
              "a": "It impairs both equally.",
              "b": "It impairs physical learning but has no impact on observational learning.",
              "c": "It impairs observational learning but has no impact on physical learning.",
              "d": "It enhances both types of learning."
            },
            "answer": "b"
          },
          {
            "number": 674,
            "text": "In the study with rhesus monkeys, how did lab-raised monkeys develop a fear of snakes?",
            "options": {
              "a": "Through classical conditioning (pairing snake with shock).",
              "b": "They were born with an innate fear.",
              "c": "By observing the fear reactions of other monkeys.",
              "d": "They never developed a fear of snakes."
            },
            "answer": "c"
          },
          {
            "number": 675,
            "text": "The fact that lab-raised monkeys could serve as models for fear learning in other monkeys resembles what phenomenon seen in children?",
            "options": {
              "a": "Shaping",
              "b": "Latent learning",
              "c": "Diffusion chains",
              "d": "Instinctive drift"
            },
            "answer": "c"
          },
          {
            "number": 676,
            "text": "The findings on monkeys learning snake fear support the idea of evolved biological _______ for specific behaviours/fears.",
            "options": {
              "a": "flexibility",
              "b": "predispositions",
              "c": "irrelevance",
              "d": "complexity"
            },
            "answer": "b"
          },
          {
            "number": 677,
            "text": "In the study by Nagell et al. (1993) on chimpanzee tool use, what did chimpanzees primarily learn from observing the experimenter use a rake?",
            "options": {
              "a": "The specific, efficient way to use the rake ('teeth up').",
              "b": "That the rake could be used to obtain food.",
              "c": "To avoid using the rake.",
              "d": "How to build their own rake."
            },
            "answer": "b"
          },
          {
            "number": 678,
            "text": "How did 2-year-old children differ from chimpanzees in the rake experiment?",
            "options": {
              "a": "Children failed to learn anything from observation.",
              "b": "Children learned only that the rake could obtain food.",
              "c": "Children learned the specific way the experimenter used the rake.",
              "d": "Children used the rake less efficiently than chimpanzees."
            },
            "answer": "c"
          },
          {
            "number": 679,
            "text": "What is the enculturation hypothesis proposed by Tomasello and colleagues?",
            "options": {
              "a": "Animals cannot learn through observation.",
              "b": "Being raised in a human culture enhances chimpanzees' cognitive abilities, like understanding intentions.",
              "c": "Observational learning is solely determined by genetics.",
              "d": "All primates share the same capacity for observational learning."
            },
            "answer": "b"
          },
          {
            "number": 680,
            "text": "In the study with capuchin monkeys using a screwdriver (Fredman & Whiten, 2008), which group was more likely to imitate the exact action observed (poking vs. prying)?",
            "options": {
              "a": "The control group (no observation).",
              "b": "The mother-reared monkeys.",
              "c": "The human-reared monkeys.",
              "d": "Both mother-reared and human-reared imitated equally."
            },
            "answer": "c"
          },
          {
            "number": 681,
            "text": "What type of neural cells fire both when an animal performs an action and when it observes someone else perform the same task?",
            "options": {
              "a": "Glial cells",
              "b": "Sensory neurons",
              "c": "Motor neurons",
              "d": "Mirror neurons"
            },
            "answer": "d"
          },
          {
            "number": 682,
            "text": "Mirror neurons are thought to be located in which lobes of the brain?",
            "options": {
              "a": "Occipital and temporal lobes",
              "b": "Temporal and parietal lobes",
              "c": "Frontal and parietal lobes",
              "d": "Occipital and frontal lobes"
            },
            "answer": "c"
          },
          {
            "number": 683,
            "text": "Observing humans grasp food caused mirror neurons to fire in monkeys. This suggests mirror neurons might respond to actions performed by:",
            "options": {
              "a": "only members of the same species.",
              "b": "only primates.",
              "c": "members of other species as well.",
              "d": "only inanimate objects."
            },
            "answer": "c"
          },
          {
            "number": 684,
            "text": "What potential roles are suggested for mirror neurons?",
            "options": {
              "a": "Regulating sleep cycles.",
              "b": "Processing basic sensory information.",
              "c": "Imitation of behaviour and prediction of future behaviour.",
              "d": "Controlling involuntary reflexes."
            },
            "answer": "c"
          },
          {
            "number": 685,
            "text": "fMRI studies of observational learning in humans show that watching someone else perform a task engages _______ brain regions as actually performing the task.",
            "options": {
              "a": "completely different",
              "b": "some of the same",
              "c": "more primitive",
              "d": "fewer"
            },
            "answer": "b"
          },
          {
            "number": 686,
            "text": "In the fMRI study on learning dance sequences (Cross et al., 2009), viewing previously watched sequences compared to untrained sequences recruited brain networks including:",
            "options": {
              "a": "only visual cortex.",
              "b": "only motor cortex.",
              "c": "regions considered part of the mirror neuron system.",
              "d": "the amygdala and hippocampus exclusively."
            },
            "answer": "c"
          },
          {
            "number": 687,
            "text": "The dance study (Cross et al., 2009) found that performance was best on sequences that were:",
            "options": {
              "a": "untrained.",
              "b": "previously watched.",
              "c": "previously danced.",
              "d": "both watched and danced equally."
            },
            "answer": "c"
          },
          {
            "number": 688,
            "text": "Observational learning of complex reaching movements relies on which brain region, as shown by TMS studies?",
            "options": {
              "a": "Visual cortex",
              "b": "Motor cortex",
              "c": "Prefrontal cortex",
              "d": "Cerebellum"
            },
            "answer": "b"
          },
          {
            "number": 689,
            "text": "Applying TMS to the motor cortex _______ the amount of observational learning for motor skills.",
            "options": {
              "a": "greatly reduced",
              "b": "slightly increased",
              "c": "had no effect on",
              "d": "doubled"
            },
            "answer": "a"
          },
          {
            "number": 690,
            "text": "Observational learning is mentioned as one mechanism perpetuating _______ in First Nations and other equity-deserving groups in Canada.",
            "options": {
              "a": "cultural traditions",
              "b": "language acquisition",
              "c": "intergenerational trauma",
              "d": "economic prosperity"
            },
            "answer": "c"
          },
          {
            "number": 691,
            "text": "What is implicit learning?",
            "options": {
              "a": "Learning that requires conscious effort and attention.",
              "b": "Learning through direct instruction.",
              "c": "Learning that takes place largely independent of awareness.",
              "d": "Learning that results from reinforcement."
            },
            "answer": "c"
          },
          {
            "number": 692,
            "text": "Which very simple kind of implicit learning involves a reduced response to repeated exposure to a stimulus?",
            "options": {
              "a": "Sensitization",
              "b": "Shaping",
              "c": "Habituation",
              "d": "Observational learning"
            },
            "answer": "c"
          },
          {
            "number": 693,
            "text": "How does the text contrast the process of learning to drive initially versus later on?",
            "options": {
              "a": "It starts implicit and becomes explicit.",
              "b": "It starts explicit and becomes more implicit/automatic over time.",
              "c": "It remains entirely explicit.",
              "d": "It remains entirely implicit."
            },
            "answer": "b"
          },
          {
            "number": 694,
            "text": "How do implicit/explicit learning typically differ from implicit/explicit memory?",
            "options": {
              "a": "There is no difference.",
              "b": "Learning refers to retrieval, memory refers to acquisition.",
              "c": "Memory usually refers to single past events, while learning refers to gradually acquiring skills/knowledge.",
              "d": "Learning is conscious, memory is unconscious."
            },
            "answer": "c"
          },
          {
            "number": 695,
            "text": "What are children implicitly learning when they learn how to behave in a civilized way, according to the text?",
            "options": {
              "a": "Specific historical facts.",
              "b": "Explicit rules of grammar.",
              "c": "Patterns of linguistic, social, and emotional behaviour.",
              "d": "Mathematical formulas."
            },
            "answer": "c"
          },
          {
            "number": 696,
            "text": "What is an artificial grammar, as used in studies of implicit learning?",
            "options": {
              "a": "A simplified version of English grammar.",
              "b": "A set of explicit rules taught to participants.",
              "c": "A complex set of rules used to form letter strings, usually unknown to participants.",
              "d": "A computer program that generates sentences."
            },
            "answer": "c"
          },
          {
            "number": 697,
            "text": "In artificial grammar tasks, participants typically develop a(n) _______ sense of the 'correctness' of letter strings.",
            "options": {
              "a": "explicit and detailed",
              "b": "vague and intuitive",
              "c": "completely inaccurate",
              "d": "verbally articulated"
            },
            "answer": "b"
          },
          {
            "number": 698,
            "text": "How well do people typically perform on artificial grammar classification tasks, and can they usually state the rules?",
            "options": {
              "a": "Poorly; they cannot state the rules.",
              "b": "Perfectly; they can state all the rules.",
              "c": "Reasonably well (60-70% correct); they are unable to state the rules explicitly.",
              "d": "Reasonably well (60-70% correct); they can easily state the rules."
            },
            "answer": "c"
          },
          {
            "number": 699,
            "text": "What happens in a serial reaction time task used to study implicit learning?",
            "options": {
              "a": "Participants memorize lists of words.",
              "b": "Participants press buttons corresponding to lights that follow a hidden pattern.",
              "c": "Participants classify images based on hidden rules.",
              "d": "Participants solve complex mathematical problems."
            },
            "answer": "b"
          },
          {
            "number": 700,
            "text": "What indicates that participants have learned the pattern in a serial reaction time task?",
            "options": {
              "a": "They can verbally describe the pattern.",
              "b": "They make more errors over time.",
              "c": "They get faster with practice as they anticipate the sequence.",
              "d": "Their reaction time remains constant."
            },
            "answer": "c"
          },
          {
            "number": 701,
            "text": "How do individual differences in implicit learning tasks compare to those in explicit tasks?",
            "options": {
              "a": "Implicit tasks show larger individual differences.",
              "b": "Explicit tasks show relatively little difference.",
              "c": "Implicit tasks show relatively little individual difference.",
              "d": "Both show similar levels of individual difference."
            },
            "answer": "c"
          },
          {
            "number": 702,
            "text": "What is the relationship between implicit learning ability and IQ?",
            "options": {
              "a": "Implicit learning is strongly correlated with IQ.",
              "b": "Implicit learning seems to be unrelated to IQ.",
              "c": "Only low IQ individuals show implicit learning.",
              "d": "Only high IQ individuals show implicit learning."
            },
            "answer": "b"
          },
          {
            "number": 703,
            "text": "How does implicit learning ability generally change across the life span compared to explicit learning?",
            "options": {
              "a": "Implicit learning declines more rapidly with age.",
              "b": "Explicit learning remains stable while implicit declines.",
              "c": "Implicit learning changes little/is less affected by aging.",
              "d": "Both decline at the same rate."
            },
            "answer": "c"
          },
          {
            "number": 704,
            "text": "The study by Saffran et al. (1996) showed that 8-month-old infants could implicitly learn:",
            "options": {
              "a": "complex mathematical rules.",
              "b": "the rules of chess.",
              "c": "rule-governed auditory patterns in streams of speech.",
              "d": "how to read simple words."
            },
            "answer": "c"
          },
          {
            "number": 705,
            "text": "How resistant is implicit learning to disorders like psychosis or amnesia that affect explicit learning?",
            "options": {
              "a": "It is more severely affected.",
              "b": "It is equally affected.",
              "c": "It is remarkably resistant.",
              "d": "It depends on the specific disorder."
            },
            "answer": "c"
          },
          {
            "number": 706,
            "text": "Profoundly amnesic patients show normal implicit learning of artificial grammar despite having no _______ of the learning phase.",
            "options": {
              "a": "motor memory",
              "b": "emotional response",
              "c": "explicit memory",
              "d": "perceptual ability"
            },
            "answer": "c"
          },
          {
            "number": 707,
            "text": "Children with dyslexia often exhibit deficits in implicit learning of:",
            "options": {
              "a": "emotional expressions.",
              "b": "social rules.",
              "c": "artificial grammars and motor/spatial sequences.",
              "d": "musical patterns."
            },
            "answer": "c"
          },
          {
            "number": 708,
            "text": "The intact implicit learning in amnesic individuals suggests that the brain structures underlying implicit learning are _______ those underlying explicit learning (like the hippocampus).",
            "options": {
              "a": "identical to",
              "b": "dependent on",
              "c": "distinct from",
              "d": "less developed than"
            },
            "answer": "c"
          },
          {
            "number": 709,
            "text": "In the dot pattern study (Reber et al., 2003), participants given explicit instructions showed increased brain activity in areas associated with:",
            "options": {
              "a": "visual processing only.",
              "b": "motor control.",
              "c": "explicit memories (prefrontal cortex, hippocampus, etc.).",
              "d": "auditory processing."
            },
            "answer": "c"
          },
          {
            "number": 710,
            "text": "Participants given implicit instructions in the dot pattern study showed decreased brain activation primarily in which region?",
            "options": {
              "a": "Prefrontal cortex",
              "b": "Hippocampus",
              "c": "Motor cortex",
              "d": "Occipital region (visual processing)"
            },
            "answer": "d"
          },
          {
            "number": 711,
            "text": "fMRI studies suggest which brain area, involved in language production, is active during artificial grammar learning?",
            "options": {
              "a": "Wernicke's area",
              "b": "Broca's area",
              "c": "Angular gyrus",
              "d": "Primary auditory cortex"
            },
            "answer": "b"
          },
          {
            "number": 712,
            "text": "Which brain area appears critical for sequence learning on the serial reaction time task?",
            "options": {
              "a": "Hippocampus",
              "b": "Amygdala",
              "c": "Motor cortex",
              "d": "Occipital lobe"
            },
            "answer": "c"
          },
          {
            "number": 713,
            "text": "How do Westerners and Easterners tend to differ in perceptual processing, according to Nisbett & Miyamoto (2005)?",
            "options": {
              "a": "Westerners are holistic, Easterners are analytic.",
              "b": "Westerners focus on color, Easterners focus on shape.",
              "c": "Westerners are analytic (object-focused), Easterners are holistic (context-focused).",
              "d": "There are no significant differences."
            },
            "answer": "c"
          },
          {
            "number": 714,
            "text": "Analytic processing is related to _______ processing, while holistic processing is related to _______ processing.",
            "options": {
              "a": "global; local",
              "b": "local; global",
              "c": "fast; slow",
              "d": "implicit; explicit"
            },
            "answer": "b"
          },
          {
            "number": 715,
            "text": "In studies using GLOCAL strings (Kiyokawa et al., 2012; Fu et al., 2013), Japanese and Chinese participants showed greater implicit learning of grammatical rules applying to the _______ level compared to British participants.",
            "options": {
              "a": "local",
              "b": "global",
              "c": "semantic",
              "d": "phonetic"
            },
            "answer": "b"
          },
          {
            "number": 716,
            "text": "Studies on auditory implicit learning with Chinese tones and syllables found that Chinese participants had an advantage over Westerners in acquiring knowledge of the _______ patterns.",
            "options": {
              "a": "local",
              "b": "random",
              "c": "explicit",
              "d": "global"
            },
            "answer": "d"
          },
          {
            "number": 717,
            "text": "What conclusion do studies on GLOCAL strings and auditory patterns support regarding implicit learning?",
            "options": {
              "a": "Implicit learning is identical across all cultures.",
              "b": "Implicit learning is influenced by cultural differences in processing styles.",
              "c": "Implicit learning does not occur in Eastern cultures.",
              "d": "Implicit learning is only relevant for visual information."
            },
            "answer": "b"
          },
          {
            "number": 718,
            "text": "Which popular study techniques received a 'low utility' assessment in the analysis by Dunlosky et al. (2013)?",
            "options": {
              "a": "Practice testing and distributed practice.",
              "b": "Interleaved practice and elaborative interrogation.",
              "c": "Highlighting, rereading, summarizing, and visual imagery mnemonics.",
              "d": "All techniques were rated as moderately effective."
            },
            "answer": "c"
          },
          {
            "number": 719,
            "text": "Which two study techniques were identified as having 'high effectiveness'?",
            "options": {
              "a": "Highlighting and rereading",
              "b": "Practice testing and distributed practice",
              "c": "Summarizing and keyword mnemonics",
              "d": "Interleaved practice and elaborative interrogation"
            },
            "answer": "b"
          },
          {
            "number": 720,
            "text": "What is 'cramming' also known as in learning research?",
            "options": {
              "a": "Distributed practice",
              "b": "Massed practice",
              "c": "Interleaved practice",
              "d": "Practice testing"
            },
            "answer": "b"
          },
          {
            "number": 721,
            "text": "What is distributed practice?",
            "options": {
              "a": "Studying intensely just before an exam.",
              "b": "Mixing different subjects within one study session.",
              "c": "Spreading out study activities over time.",
              "d": "Testing yourself on the material."
            },
            "answer": "c"
          },
          {
            "number": 722,
            "text": "Who first reported the benefits of distributed practice in studies on nonsense syllables?",
            "options": { "a": "Skinner", "b": "Pavlov", "c": "Ebbinghaus", "d": "Tolman" },
            "answer": "c"
          },
          {
            "number": 723,
            "text": "According to a large review (Cepeda et al., 2006), participants retained about what percentage of information after distributed practice compared to massed practice?",
            "options": {
              "a": "37% after distributed, 47% after massed",
              "b": "47% after distributed, 37% after massed",
              "c": "50% after distributed, 50% after massed",
              "d": "60% after distributed, 40% after massed"
            },
            "answer": "b"
          },
          {
            "number": 724,
            "text": "What concept suggests that more difficult retrievals during distributed practice benefit subsequent learning?",
            "options": {
              "a": "Cognitive load",
              "b": "Perceptual fluency",
              "c": "Desirable difficulties",
              "d": "Encoding specificity"
            },
            "answer": "c"
          },
          {
            "number": 725,
            "text": "What is interleaved practice?",
            "options": {
              "a": "Studying one topic thoroughly before moving to the next.",
              "b": "A practice schedule that mixes different kinds of problems or materials.",
              "c": "Testing oneself repeatedly on the same material.",
              "d": "Studying for very short periods multiple times a day."
            },
            "answer": "b"
          },
          {
            "number": 726,
            "text": "Interleaved practice may be particularly effective for learning subjects like:",
            "options": { "a": "History", "b": "Literature", "c": "Foreign languages", "d": "Mathematics" },
            "answer": "d"
          },
          {
            "number": 727,
            "text": "Why might interleaved practice be more effective than blocked practice for math problems?",
            "options": {
              "a": "It is less confusing for students.",
              "b": "It requires students to choose the correct strategy for each problem.",
              "c": "It allows for more repetition of the same strategy.",
              "d": "It focuses only on easy problems."
            },
            "answer": "b"
          },
          {
            "number": 728,
            "text": "Practice testing is effective partly because actively _______ an item from memory improves subsequent retention.",
            "options": { "a": "encoding", "b": "retrieving", "c": "forgetting", "d": "summarizing" },
            "answer": "b"
          },
          {
            "number": 729,
            "text": "What study strategy do students typically prefer over practice testing, according to Karpicke (2012)?",
            "options": {
              "a": "Summarizing",
              "b": "Highlighting",
              "c": "Rereading",
              "d": "Using mnemonics"
            },
            "answer": "c"
          },
          {
            "number": 730,
            "text": "When are the benefits of testing generally greatest?",
            "options": {
              "a": "When the test is easy.",
              "b": "When the test requires recognition only.",
              "c": "When the test is difficult and requires considerable retrieval effort.",
              "d": "When the test covers very familiar material."
            },
            "answer": "c"
          },
          {
            "number": 731,
            "text": "Beyond improving verbatim learning, testing can also enhance the _______ of learning from one situation to another.",
            "options": { "a": "speed", "b": "transfer", "c": "forgetting", "d": "cost" },
            "answer": "b"
          },
          {
            "number": 732,
            "text": "A large meta-analysis by Yang et al. (2021) confirmed that practice testing boosts learning and comprehension across:",
            "options": {
              "a": "only science subjects.",
              "b": "only humanities subjects.",
              "c": "a wide range of academic subjects, test formats, and educational levels.",
              "d": "only university students."
            },
            "answer": "c"
          },
          {
            "number": 733,
            "text": "What additional benefit of testing during lectures was highlighted by Szpunar et al. (2013)?",
            "options": {
              "a": "It makes the lecture shorter.",
              "b": "It increases student anxiety.",
              "c": "It reduces mind wandering and improves attention.",
              "d": "It eliminates the need for note-taking."
            },
            "answer": "c"
          },
          {
            "number": 734,
            "text": "Compared to non-tested groups, students in the tested group during the lecture study (Szpunar et al., 2013) showed:",
            "options": {
              "a": "More mind wandering and less note-taking.",
              "b": "Less mind wandering, more note-taking, and better final test performance.",
              "c": "Similar mind wandering but better final test performance.",
              "d": "More anxiety about the final test."
            },
            "answer": "b"
          },
          {
            "number": 735,
            "text": "When participants in the tested group did mind wander, what did they tend to think about?",
            "options": {
              "a": "Topics completely unrelated to the lecture.",
              "b": "Their personal plans.",
              "c": "Other parts of the lecture.",
              "d": "The difficulty of the test."
            },
            "answer": "c"
          },
          {
            "number": 736,
            "text": "What are judgements of learning (JOLs)?",
            "options": {
              "a": "Objective measures of how much has been learned.",
              "b": "Grades assigned by an instructor.",
              "c": "Subjective assessments of how well material has been learned.",
              "d": "Predictions about future test performance."
            },
            "answer": "c"
          },
          {
            "number": 737,
            "text": "How do JOLs influence study behaviour?",
            "options": {
              "a": "They have no influence.",
              "b": "People typically study more the items they judge they have learned well.",
              "c": "People typically devote more study time to items they judge they have not learned well.",
              "d": "JOLs only influence test-taking strategies."
            },
            "answer": "c"
          },
          {
            "number": 738,
            "text": "Why can the feeling of familiarity after rereading be misleading when making JOLs?",
            "options": {
              "a": "Familiarity always indicates deep learning.",
              "b": "It may result from low-level perceptual priming, not deep understanding.",
              "c": "Rereading always leads to accurate JOLs.",
              "d": "Familiarity makes the material harder to remember later."
            },
            "answer": "b"
          },
          {
            "number": 739,
            "text": "Students are sometimes _______ in judging how well they have learned definitions, leading them to fail to study effectively.",
            "options": {
              "a": "underconfident",
              "b": "overconfident",
              "c": "perfectly accurate",
              "d": "uninterested"
            },
            "answer": "b"
          },
          {
            "number": 740,
            "text": "What study technique can help reduce overconfidence stemming from inaccurate JOLs?",
            "options": {
              "a": "Rereading",
              "b": "Highlighting",
              "c": "Summarizing",
              "d": "Practice testing"
            },
            "answer": "d"
          },
          {
            "number": 741,
            "text": "According to Bjork et al. (2013), becoming an effective learner requires understanding key features of learning, effective techniques, monitoring/control, and:",
            "options": {
              "a": "the history of psychology.",
              "b": "advanced statistics.",
              "c": "biases that undermine judgements of learning.",
              "d": "the instructor's teaching style."
            },
            "answer": "c"
          },
          {
            "number": 742,
            "text": "What is learning loss, as discussed in the 'Other Voices' section?",
            "options": {
              "a": "Forgetting information immediately after learning it.",
              "b": "The inability to learn new information.",
              "c": "The decay in knowledge and skills when students are not in school.",
              "d": "The cost associated with educational materials."
            },
            "answer": "c"
          },
          {
            "number": 743,
            "text": "Before the COVID-19 pandemic, learning loss was chiefly associated with:",
            "options": {
              "a": "switching schools.",
              "b": "illness-related absences.",
              "c": "the long summer break.",
              "d": "poor teaching quality."
            },
            "answer": "c"
          },
          {
            "number": 744,
            "text": "The pandemic has disproportionately worsened educational disparities for which student groups?",
            "options": {
              "a": "Gifted and talented students.",
              "b": "Students in private schools.",
              "c": "Racialized, Indigenous, low-income students, and students with disabilities.",
              "d": "Students in urban areas."
            },
            "answer": "c"
          },
          {
            "number": 745,
            "text": "What educational intervention is highlighted as particularly effective in closing learning gaps widened by the pandemic?",
            "options": {
              "a": "Longer school days",
              "b": "More standardized testing",
              "c": "Tutoring",
              "d": "Increased homework"
            },
            "answer": "c"
          },
          {
            "number": 746,
            "text": "Tutoring using which group was found to have positive results at a lower cost than teacher-led tutoring?",
            "options": {
              "a": "University professors",
              "b": "Parent volunteers",
              "c": "Paraprofessionals (trained assistants, youth-service members)",
              "d": "Older student peers"
            },
            "answer": "c"
          },
          {
            "number": 747,
            "text": "How does the frequency of tutoring affect its impact?",
            "options": {
              "a": "Frequency has no impact.",
              "b": "Less frequent tutoring (once a week) is most effective.",
              "c": "More frequent tutoring (3+ times/week) has almost twice the effect.",
              "d": "Daily tutoring is overwhelming and ineffective."
            },
            "answer": "c"
          },
          {
            "number": 748,
            "text": "What is suggested as a key component of an ambitious educational recovery strategy for Canada?",
            "options": {
              "a": "Focusing solely on high-achieving students.",
              "b": "Implementing evidence-based tutoring models.",
              "c": "Reducing funding for public education.",
              "d": "Eliminating standardized tests."
            },
            "answer": "b"
          },
          {
            "number": 749,
            "text": "The 'Other Voices' authors recommend incorporating which learning techniques into tutoring interventions?",
            "options": {
              "a": "Highlighting and rereading",
              "b": "Summarizing and mnemonics",
              "c": "Distributed practice, interleaved practice, and practice testing",
              "d": "Massed practice and cramming"
            },
            "answer": "c"
          },
          {
            "number": 750,
            "text": "Skinner used the term 'successive approximations' to refer to:",
            "options": {
              "a": "The gradual fading of a conditioned response.",
              "b": "Behaviours that get incrementally closer to the desired outcome.",
              "c": "Errors made during trial-and-error learning.",
              "d": "The cognitive maps formed during learning."
            },
            "answer": "b"
          },
          {
            "number": 751,
            "text": "Superstitious behaviour, according to Skinner, arises from:",
            "options": {
              "a": "Observational learning of rituals.",
              "b": "Accidental reinforcement of random behaviours.",
              "c": "Classical conditioning of fear responses.",
              "d": "Cognitive biases in decision-making."
            },
            "answer": "b"
          },
          {
            "number": 752,
            "text": "Tolman's concept of a 'means-ends relationship' emphasizes the _______ aspect of learning.",
            "options": {
              "a": "behavioral",
              "b": "cognitive",
              "c": "physiological",
              "d": "evolutionary"
            },
            "answer": "b"
          },
          {
            "number": 753,
            "text": "The rats in Tolman's latent learning experiment demonstrated that learning could occur without immediate:",
            "options": {
              "a": "punishment.",
              "b": "observation.",
              "c": "reinforcement.",
              "d": "cognitive awareness."
            },
            "answer": "c"
          },
          {
            "number": 754,
            "text": "The brain's 'pleasure centres,' heavily involving dopamine, are part of the _______ elements of operant conditioning.",
            "options": {
              "a": "cognitive",
              "b": "evolutionary",
              "c": "behavioral",
              "d": "neural"
            },
            "answer": "d"
          },
          {
            "number": 755,
            "text": "The study involving trustworthy, neutral, and suspect partners in a trust game highlighted the power of _______ effects in operant learning.",
            "options": {
              "a": "cognitive",
              "b": "neural",
              "c": "evolutionary",
              "d": "behavioral"
            },
            "answer": "a"
          },
          {
            "number": 756,
            "text": "The tendency of rats to explore the alternate arm of a T-maze after finding food is explained by the _______ elements of operant conditioning.",
            "options": {
              "a": "cognitive",
              "b": "neural",
              "c": "evolutionary",
              "d": "observational"
            },
            "answer": "c"
          },
          {
            "number": 757,
            "text": "The 'misbehavior' of pigs rooting coins, described by the Brelands, is an example of:",
            "options": {
              "a": "shaping.",
              "b": "latent learning.",
              "c": "instinctive drift.",
              "d": "superstitious behaviour."
            },
            "answer": "c"
          },
          {
            "number": 758,
            "text": "Reward prediction error is closely linked to the neurotransmitter:",
            "options": {
              "a": "serotonin.",
              "b": "acetylcholine.",
              "c": "GABA.",
              "d": "dopamine."
            },
            "answer": "d"
          },
          {
            "number": 759,
            "text": "Learning by watching others, as studied by Bandura, is known as:",
            "options": {
              "a": "operant conditioning.",
              "b": "classical conditioning.",
              "c": "observational learning.",
              "d": "implicit learning."
            },
            "answer": "c"
          },
          {
            "number": 760,
            "text": "The finding that human-reared capuchins imitated specific tool actions more faithfully than mother-reared ones supports the:",
            "options": {
              "a": "instinctive drift hypothesis.",
              "b": "enculturation hypothesis.",
              "c": "cognitive map theory.",
              "d": "reward prediction error model."
            },
            "answer": "b"
          },
          {
            "number": 761,
            "text": "Mirror neurons are considered part of the _______ basis of observational learning.",
            "options": {
              "a": "cognitive",
              "b": "evolutionary",
              "c": "neural",
              "d": "behavioral"
            },
            "answer": "c"
          },
          {
            "number": 762,
            "text": "Learning without awareness, such as acquiring artificial grammar rules, is termed:",
            "options": {
              "a": "explicit learning.",
              "b": "observational learning.",
              "c": "implicit learning.",
              "d": "latent learning."
            },
            "answer": "c"
          },
          {
            "number": 763,
            "text": "Implicit learning is generally _______ affected by factors like aging and amnesia compared to explicit learning.",
            "options": {
              "a": "more",
              "b": "equally",
              "c": "less",
              "d": "unpredictably"
            },
            "answer": "c"
          },
          {
            "number": 764,
            "text": "The finding that Japanese participants show greater implicit learning of global patterns than British participants points to _______ influences on implicit learning.",
            "options": {
              "a": "genetic",
              "b": "neural",
              "c": "developmental",
              "d": "cultural"
            },
            "answer": "d"
          },
          {
            "number": 765,
            "text": "Spreading study sessions out over time is known as:",
            "options": {
              "a": "massed practice.",
              "b": "interleaved practice.",
              "c": "distributed practice.",
              "d": "practice testing."
            },
            "answer": "c"
          },
          {
            "number": 766,
            "text": "Actively retrieving information from memory as a study technique is called:",
            "options": {
              "a": "rereading.",
              "b": "summarizing.",
              "c": "practice testing.",
              "d": "highlighting."
            },
            "answer": "c"
          },
          {
            "number": 767,
            "text": "A student's subjective assessment of how well they have learned something is their:",
            "options": {
              "a": "test score.",
              "b": "judgement of learning (JOL).",
              "c": "cognitive map.",
              "d": "reward prediction error."
            },
            "answer": "b"
          }
        
        
      
      
      
    ];    
