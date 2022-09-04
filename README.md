
<p align="center">
  <img src="https://github.com/tmartinez88/RTLEARNER/blob/main/assets/RTLEARNER_PIC.png?raw=true" width="300" title="RTLEARNER APP">
</p>

## Abstract
RTLEARNER (or Real-Time Learner) is a set of example applications for fast dataset creation and real-time classification tasks in MaxMSP and the Python machine learning library Sci-Kit Learn. These two environments were chosen because of their wide adoption by artists and their unique strengths in the domains of real-time signal processing and statistical analysis respectively. MaxMSP has long been the programming environment of choice for computer music practitioners, containing within it a wide variety of real-time composable audio processing units. Alternatively, Sci-Kit Learn has emerged as the goto framework for machine learning tasks, and provides with it a number of popular ML (machine learning) algorithms for classification in a highly approachable yet optimized and configurable format.

RTLEARNER implements a bi-directional UDP client/server architecture to act as a go-between for the MaxMSP and Python environment. MaxMSP handles audio input and output streams, feature extraction, dataset creation, and passes feature sets to machine learning models hosted by the Python environment. The Sci-Kit Learn library  makes predictions on feature sets in real-time and sends them back to MaxMSP for musical adaptation. The max and python files do their best to provide commonly used programming patterns and tools for legibility and adaptability.

### Other tools
Machine Learning tools such as [FluCoMa](https://www.flucoma.org/), [CataRT](https://ismm.ircam.fr/catart/#:~:text=The%20concatenative%20real%2Dtime%20sound,position%20in%20the%20descriptor%20space.), [Magenta Studio](https://magenta.tensorflow.org/studio/Magenta), and [ml.*](http://ben.musicsmiths.us/ml.phtml) offer classification, prediction, and even generation processes in Max, all within a singular software environment. The trade off for this elegance is less composability in the underlying model parameters and less exposure to the lingua franca of machine learning, Python. For most, the aforementioned tools are extremely powerful systems for classification and regression techniques, for the more curious programmer, RTLEARNER provides systems for going deeper into the black box.

## Video Demonstration
[![Video Demo](https://github.com/tmartinez88/RTLEARNER/blob/main/assets/youtubeScreeny.png?raw=true)](https://www.youtube.com/watch?v=e7F6OkrapIU&t=5s)

## Installation
### Dependencies
1. Both Windows and Mac are supported.
2. Python 3.9 is recommended. This was tested using a virtual environment using anaconda.
3. Python dependencies can be downloaded using the Python environment's library manager or using the following terminal commands.

      `pip install sklearn, numpy, pandas, python-osc`

3. Install [MaxMSP](https://cycling74.com/downloads).
4. The RTLEARNER max patch uses a number of FluCoMa Max objects for feature extraction. The FluCoMa objects can be downloaded [here](https://www.flucoma.org/download/), and will soon be available in the Max package manager. These objects may be swapped out for other analysis objects such as CNMAT's Zsa Descriptors which can be found in the Max package manager (though the patches included here do not depend on them).

## Thanks and Inspiration
RTLEARNER was initially developed during an independent study with Professor Johanna Devaney in the Sonic Arts MFA at Brooklyn College.

Gradient visualization liberated and altered with love from MADBUTTER/Emmanuel Jourdan [found here](https://cycling74.com/forums/mgraphics-gradients-more-color-stops).

Some of RTLEARNER's design patterns were inspired by the FluCoMa project. A huge thanks goes out to Pierre Tremblay and Ted Moore for their spring 2022 workshop.
