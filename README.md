### RTLEARNER

##abstract
Developed during an independent study with Professor Johanna Devaney in the Sonic Arts MFA at Brooklyn College, RTLEARNER (or Real-Time Learner) is a set of example applications for fast dataset creation, and real-time communication between MaxMSP and the Python machine learning library Sci-Kit Learn. MaxMSP has long been the programming environment of choice for new music practitioners, containing within it a broad set of composable audio processing units, ranging from general ones to more rarified synthesis techniques. Sci-Kit Learn has emerged as the goto framework for machine learning tasks, and provides with it a number of popular ml algorithms for classification and prediction in a highly approachable yet optimized format.

RTLEARNER implements a bi-directional OSC client/server architecture to act as a go-between for MaxMSP and the Python environment, offering one method of exploiting the particular processing advantages of each environment. Python, at the present moment, is not well suited for musical, real-time digital signal processing, but provides a wide array of tools in the domain of perceptual data analysis. MaxMSP, in this paradigm, handles audio input and output buffers, the feature extraction for dataset creation, and passes with low latency, feature sets to the machine learning model hosted by the Python environment. The Sci-Kit Learn library then handles predictions on these feature sets which are then sent to and processed further by MaxMSP to affect parameter changes in the musical domain.

The primary contributions this system makes to the ml for audio community is its implementation of

Though it is intended to be used for audio classification processes, components of the patch could very well be altered to classify other data native to Max, such as visual or gestural information.

##other tools
Machine Learning tools within Max such as FluCoMa, Magenta Studio, and ml.star offer classification, prediction, and even generation processes all within a singular software environment. The trade off for this this elegance is less composability in the underlying model parameters which in some cases. 
##use cases

##dependencies

##premise

##instructions
To
-training

-testing
