---
mathjax: true
title: Introduction to Loss Functions
categories: NeuralNets
featured-img: loss_functions
---



We all have some objective in our lives and we are consistently working hard to achieve our objective. During that course, we take many decisions, the result of which determines how much we have achieved our objective.

Take this analogy, Suppose your objective is to become a good machine learning expert, In order to achieve this you are constantly looking for ML stuff and learning them. At the end in order to test yourself, you take some online test or Quiz. The score of such test tells you how much have you achieved your objective. If you score high, you have become a good ML expert, if you score low, you may need to prepare again. This score that determines how much you have achieved your objective is called a **Cost Function**.



## Loss Function

To make our neural network to achieve its objectives, we use a function called **Loss Function**. It takes usually takes two arguments, the output by the neural network and the correct output that was expected. It then outputs a scalar (usually) whose value is high if the output is not close to expected and low otherwise.

The value of Loss function determines how good is our neural network. And the Optimization/training involves reducing the value Loss function.



### Classes of Loss Functions

Depending upon the type of problem that we are optimizing our neural network for, we can have two broad classes of loss functions :

- Regression Loss Functions
- Classification Loss Functions



**Regression Loss Functions** are used when we are solving a regression problem, where the output of our model is a real number or something that varies continuously. For Example, if you are making a neural network for predicting the prices of houses, given their characteristics. Here the prediction (price) is a continuous quantity. 

**Classification Loss Functions** are used when we are trying to predict the output from the set of finite categorical values i.e Given large data set of images of handwritten digits, categorizing them into one of 0–9 digits.



### Types of Regression Losses 



> > $y_i$ will be a vector of expected/correct output



> > $h_i$ will be a vector of predictions produced by the neural network. Recall that this is the value of the output layer of the network.



> > $n$ is the dimension of the vector. i.e Number of elements in the vector



- **Mean Squared Error** (MSE) or Quadratic Loss or L2 Loss

- **Mean Absolute Error** (MAE) or Linear Loss or L1 Loss

- **Mean Bias Error** (MBE)

  

**Mean Square Error** 


$$
Mean Square Error = \frac{\sum_{i=1}^n(y_i - h_i)^2}{n}
$$


It is most commonly used Regression Error. It is measured as the average of the squared difference between predictions and actual observations. 

```python
import numpy as np

def mean_squared_error(y, h):
    """
    y is the correct output
    h is the prediction of the neural network
    """
    return np.mean(np.square(y - h))
```



**Mean Absolute Error**


$$
Mean Absolute Error = \frac{\sum_{i=1}^n|y_i - h_i |}{n}
$$


It is measured as the average of the sum of absolute differences between predictions and actual observations.

```python
import numpy as np

def mean_absolute_error(y, h):
    """
    y is correct output
    h is prediction by the network
    """
    return np.mean(np.absolute(y - h))
```



**Mean Bias Error**


$$
Mean Bias Error = \frac{\sum_{i=1}^n(y_i - h_i )}{n}
$$


It is much less commonly used loss function. This is the same as MSE with the only difference that we don’t take absolute values. Clearly, there’s a need for caution as positive and negative errors could cancel each other out. Although less accurate in practice, it could determine if the model has a positive bias or negative bias.



```python
import numpy as np

def mean_bias_error(y, h):
    """
    y is correct output
    h is prediction by the network
    returns a positive values if positively biases otherwise negative
    """
    return np.mean(y-h)
```



### Classification Loss

Although there are many classification losses, We will discuss only one major loss that is used almost everywhere these days called **Cross Entropy Loss**


$$
CrossEntropyLoss_i = -{[y_ilog(h_i) + (1-y_i)log(1-h_i)]}
$$


Here $y_i$ is $i^{th}$ value of expected output and $h_i$ is $i^{th}$ value of the produced vector. In this $n$ is the number of total classification classes.

This one is a bit difficult to understand so I will explain it in detail.

Suppose you are making a network for classifying an image as *female* or *male* for a given face. Where the *female* is represented by the vector $$[1,0]$$ and *male* with $$[0,1]$$, this is a traditional binary classification problem. If our network is performing poorly is will produce some garbage 2-D vector say $$[0.4, 0.6]$$ for let's say a *female* picture. You can compute the cross-entropy it will come out to be $$0.3979$$ You can cross check if output were to be  $$[0.9,0.1]$$ the loss had been lesser ($$0.045$$ to be precise)

```python
import numpy as np

def cross_entropy_loss(y, h):
    """
    y is correct output
    h is prediction by the network
    """
    return np.mean(-(y * np.log(h) + (1-y) * np.log(1-h)))
```



## Cost Function

You must be wondering what we started this blog with, Cost Functions but discussed a lot about Loss Functions! If you are familiar with my previous post I discussed that we train the network on mini-batch of inputs (many training examples fed at once to the network).

And from above we came to know that Loss is generated for each prediction. So, the value of losses generated is also more than one. Cost Functions are aggregate of Loss Functions. When we have multiple values of the loss, we take their mean and get a single number that is called **Cost** which determines how our network performed on a mini-batch. It is this Cost which we want to minimize, doing so we minimize the loss because it is nothing but aggregated loss.

Mathematically, 


$$
CostFunction = \frac{\sum_{i=0}^mLoss(y_{mi}, h_{mi})}{m}
$$


Here $Loss$ is any Loss Function discussed above and $m$ size of the mini batch. If you don't have any idea about mini-batches, read my previous post.



Some other day, We will discuss **Backpropagation** and **Gradient Descent** where we will talk about how do we exactly decrease this *Cost* during training.

Happy Learning