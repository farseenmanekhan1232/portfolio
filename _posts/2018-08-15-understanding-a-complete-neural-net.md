---
mathjax: true
title: Understanding a Complete Neural Network
categories: NeuralNets
featured-img: CompleteNet
---

Today, I will explain the complete Neural Network and the intuition about how a neural network learns from data.

By the end of this post, you will have the in-depth understanding of forward propagation in a feed-forward neural network. I will focus on the math part as well and we will be using [numpy](https://pypi.org/project/numpy/) for numerical calculations in python. By the end, you will be able to implement the complete neural network with forward propagation.

This post assumes that you have basic understanding of activation functions and are familiar with terms like weights and biases. If all these seem alien to you read [this](https://coder3101.github.io/understanding-ff-nn/) and come back here again.

## A Neural Network 

<p align="center"><img src="https://github.com/coder3101/coder3101.github.com/raw/master/in-post_imgs/understanding-a-complete-neural-net/full-complete-net.jpg" width="70%" />

</p>



As you are already familiar with what a single neuron computes from my previous post. When we arrange many such neurons such that each neuron gets same input values but have different weights they form a **Layer** (In above picture, Vertical Stack of Neurons is a Layer).

All the layers apart from input and output layers are called **Hidden Layers**.

The layer that gets value from us is the **Input Layer**.

The layer of Neurons that hold the output values by the network is the **Output Layer**. It can have any number of Neurons. In the picture above there is only one neuron in the output layer.

### Some Properties of Layers

- Activation Function used for all the neurons in a layer must be the same. In a layer, you should not apply relu to some neurons and some other activation function to other neurons. However, You can apply different activations in different layers.
- The number of layers is directly proportional to the learning capacity of the network
- You have the freedom to choose the number of hidden layers and the number of neurons in each hidden layer (These things that are in your hand to change are sometimes called Hyper-parameters). But the Input Layer and Output Layer will be according to your Data.
- No two neurons in the same layer are connected with others. Rather Every Neuron in a Layer is connected with all the other neurons from the Previous Layer. This forms a dense connection of Weights. Hence such layers are also sometimes referred by name "Dense" in some programming frameworks.



## Neural Network as Universal Function Approximator

If you hold a mathematical background you might be familiar with this :

<p align="center">



$$\huge{y = f(x_1,x_2,x_3)} $$

</p>

The Neural Network shown in the above picture is exactly this function $f$ . Our Neural Network takes three Input values through Input Layer and Produces a Single output $y$ .

But How do we define that $f$ ?

Remember the Complete Neural Network is just a collection of many neurons. So the output of the complete neural network depends on the output of each neuron.

Also a Neuron's output depends on 3 things (Weights, bias and Input). We cannot change the Input that is fixed. The only way to change the output is to change the weights and biases of an individual neuron. Great, but how do we choose values of Weights and biases that give the expected results. Here comes the training part, We use an algorithm called Gradient Descent that fine-tunes the values of all weights and biases of the all the neurons. So, We Initially set some random values to weights and biases and let the training fine tune it for us. We will talk more about Back Propagation and Gradient Descent in some other Post.

So choosing all the possible values of all the weights and biases will give us all possible definition of f. This way our Neural network can approximate all most all f, and thus it is called *Universal Function Approximator*

*Please Note: I do not mean the above Neural Network in the Picture can approximate all the functions. It will fail to approximate complex functions so to overcome this we build more sophisticated networks with Hundred of Layers and many neurons and with regularization*.



## Building a Neural Network : Math

In the previous post, I told you how `weights` and `inputs` are multiplied, added with `bias` and activated with non-linearity like `relu`

I also showed you how we can do all those operations using Matrices and Vectors.

Consider this Simple Neural Network.

<p align="center">

<img src="https://github.com/coder3101/coder3101.github.com/raw/master/in-post_imgs/understanding-a-complete-neural-net/sample-net.jpg" width="40%" height="70%"/>

</p>

It has five input values. Let's say $x_1, x_2, x_3, x_4, x_5$ . We can represent those *5* values as a vector in 5-D space. So Let's call our Input as Single vector $X$ as :

<p align="center">

$X = \begin {bmatrix}x_1 & x_2 & x_3 & x_4 & x_5\end{bmatrix}_{1 \times 5}$ 

</p>

In the above picture, you can see that We have $5 \times 3 = 15$ weights between Input Layer and Hidden Layer. *The number of weights between two layers is the product of the number of neurons in those two layers*. 

We can represent those Weights in the matrix of $5 \times 3$ dimensions. We call this Matrix $W_1$. Subscript 1 means First Weight Matrix.



<p align="center">

$W_1 = \begin{bmatrix}w_1 & w_6 & w_{11} \\\ w_2 & w_7 & w_{12} \\\ w_3 & w_8 & w_{13} \\\ w_4 & w_9 & w_{14}\\\ w_5 & w_{10} & w_{15} \end{bmatrix}_{5 \times 3}$

</p>

 Okay All done.

There is one more thing called bias. We know each Neuron in the Hidden Layer will have one bias term. Since there are three neurons we will have 3 bias values. Again We can pack them into a vector name $B_1$ as :

<p align="center">

$B_1 = \begin{bmatrix}b_1 & b_2 & b_3\end{bmatrix}_{1\times3}$

</p>

All done we have packed all the things in Vectors and Matrices. Now, ***Let's multiply (dot product), add and activate***.

<p align="center">

$Z_1 = X . W_1 + B_1$ 

</p>

From Simple Linear Algebra $Z_1$ will be a Matrix of $1 \times 3$ dimensions

So Let $Z_1$ be a vector like, 

<p align="center">

$Z_1 = \begin{bmatrix}z_1 & z_2 & z_3 \end{bmatrix}_{1\times3}$

</p>

If you expand $z_1$ . You will find it to be quivalent to something like

<p align="center">

$z_1 = (w_1 * x_1 + w_2 * x_2 +  .... +  w_5 * x_5)  + b_1$

</p> 

We now need to Apply $Relu$ activation to $Z_1$ as 

<p align="center">

$A_1 = Relu(Z_1)$

</p>

In the end We have, 

<p align="center">

$A_1 = \begin{bmatrix}a_1 & a_2 & a_3\end{bmatrix}_{1\times3}$

</p>

Here $a_n$ corresponds to the value of $n^{th}$ neuron of the hidden Layer. As we had only three Neurons in the hidden layer we got three values in $A_1$.

***For the Next Layer this $A_1$ vector will behave like Input and will be passed***.

Following the same things as Above We create another Weight Matrix $W_2$ , bias Vector$B_2$ and $A_1$ will act as Input. The dimension or shape of $W_2$ will be $1 \times 3$ and $B_2$ will be $1 \times 1$ .

So,

<p align="center">

$Z_2 = W_2 . A_1 + B_2$

<br>

$A_2 = sigmoid(Z_2)$

</p>

From Linear Algebra Rules again $A_2$ will be of dimension $1 \times 1$.

You might think why didn't we used $Relu()$ ? Why $sigmoid()$ and what it is?

Actually,  for the last Layer, we generally do not use Relu. In last layer, We want to have our prediction and it will be a good idea that our predictions are in some tight range. So we Use a Function whose range is limited as per our choice and whose domain is all real numbers. One Such Activation function is $sigmoid()$ defined as 

<p align="center">

$$\Large{\sigma(x) = \frac{1}{1+e^{-x}}}$$

$\sigma$ is sigmoid function

</p>

An Important Property of this function is that its range is $(0,1)$. So it will limit our predictions in between 0 and 1.

You might ask: Do we have any more benefits of packing things in Matrices?

- All the Operations like Dot Product and additions are all vectorized and uses Multithreading to speed up the computation. Especially great when it comes to Parallelism of GPU's.
- You can do something called *batch processing*. You can pass multiple inputs stacked together in the matrix. Recall Each Input is a vector, if you stack many Input vectors together you will get a Input Matrix. You can then feed all those Inputs at the same time and get back all the outputs at the same time. We will talk more about it in batch processing. 


## Building a Neural Network : Code 

You are ready to implement you very first Neural network using [numpy](https://pypi.org/project/numpy/) .

First get the numpy if you do not already have it. By running in CMD or terminal

```bash
python -m pip install numpy
```

**Internet Connection is required for it to execute properly**

Let's first Import numpy

```python
import numpy as np
```

Let's create our sigmoid and relu functions :

```python
def sigmoid(x):
    """computes the sigmoid of x"""
    return 1/(1 + np.exp(-x))

def relu(x):
    """computes the relu of x"""
    return np.maximum(x, 0)
```

 We will be creating this Neural Network 

<p align="center"><img src="https://github.com/coder3101/coder3101.github.com/raw/master/in-post_imgs/understanding-a-complete-neural-net/full-complete-net.jpg"/>

</p>

Let's get some dummy Input data as a numpy array named `x` and its output `y` in another array.

```python
def get_dummy_data():
    """
    Our Input and Output are realated as y = (x1+x2+x3)/10
    """
    x = np.array([[1,5,3],
                  [1,1,1],
                  [4,5,1],
                  [0,0,1],
		  [1,2,3],
                  [3,1,1],
                  [2,2,1],
                  [1,0,0]])
    y = np.array([[0.9], [0.3], [1.0], [0.1], [0.5], [0.5], [0.5], [0.1]])
    return x, y
```

We need three weight matrices and three bias vectors. We will put them in a python list. **Please Know that You should never initialize weight matrix with zeros. However you can set biases to zero.** 

Setting weights to zero causes the problem of Network Symmetry. Every Neuron will be computing the same values. We will talk more about it later in some post. For Inquisitive readers [here](https://stackoverflow.com/questions/20027598/why-should-weights-of-neural-networks-be-initialized-to-random-numbers) is the reason.

```python
def create_weights_and_biases():
    """
    creates weights and biases with random and zero values of appropriate shapes or dimensions
    """
    weights = []
    biases = []
    
    # Weights filled with Random Gaussian Distribution with Zero Mean
    weights.append(np.random.randn(3,4))
    weights.append(np.random.randn(4,4))
    weights.append(np.random.randn(4,1))
    
    # Biases filled with Zero Values
    biases.append(np.zeros((1,4)))
    biases.append(np.zeros((1,4)))
    biases.append(np.zeros((1,1)))
    
    return weights, biases
```

There is a thing called [Broadcasting](https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html) in numpy universe that enables vector and matrix addition or subtraction with at least one dimension in common or 1. Actually, its much more than this but here it will help us in adding the vector of biases with the matrix.

Finally Let's do Forward propagation (i.e From Input to Output)

```python
def forward_propagation(weights, biases, x):
    """ returns the prediction of the neural network for given input x
    """
    activation = relu(np.dot(x, weights[0]) + biases[0]
    activation = relu(np.dot(activation, weights[1]) + biases[1])
    activation = sigmoid(np.dot(activation, weights[2]) + biases[2])
                      
    return activation
```

Now Let's put together all the functions and See what our Model predicts

```python
w, b = create_weights_and_biases()
x, y = get_dummy_data()
print(forward_propagation(w,b,x))
```

Our output prediction will not match with `y` for sure. Why??

We have not trained our model yet, training is done using Back-propagation.  So What's in the training that causes our Neural network to produce desired results. It is the values of biases and weights. Here we are using random values of weights and biases and hence we are getting random outputs.

You will get a different output we got :

```python
[[5.41388530e-22]
 [4.61886989e-07]
 [6.52625008e-20]
 [1.49225762e-03]]
```

Clearly No where near the desired values.

Let's give those weights and matrices some great values that will generate correct predictions.

*Please Note: These Values were computed using tensorflow*

**Simply copy paste this cell's function**

```python
def trained_weights_and_biases():
    weights = []
    weights.append(
       np.array(
       [[-0.69121563,  0.2887574 , -0.03560883, -0.18378793],
       [-0.62450933,  0.6510932 , -0.49352923, -0.14214364],
       [-0.10162438, -0.20744216, -0.17114955, -0.20024855]]))
    weights.append(
    	np.array(
       [[-0.07075   , -0.12905324,  0.42004555,  0.33115822],
       [-0.40734887, -0.7322401 , -0.22515666,  0.21993482],
       [-0.4346674 ,  0.29206783,  0.40805775, -0.31846505],
       [ 1.025652  ,  0.3762534 , -0.77794516, -0.15678851]]))
    weights.append(
    np.array(
       [[-1.6903803 ],
       [-0.39530256],
       [-0.3725053 ],
       [-0.52486736]]))
    biases = []
    biases.append(
        np.array([[ 0.08741324,  0.08013407, -0.31683022,  1.9125104 ]]))
    biases.append(
        np.array([[ 1.4733982, -0.7346   , -1.048306 , -0.9996497]]))
    biases.append(np.array([[3.2619991]]))
    return weights, biases
```

Now Let's run our Neural Network with these new values of weights and biases.

```python
w, b = trained_weights_and_biases()
new_x = np.array([[0,3,1],
                  [1,6,2]])
print(forward_propagation(w,b,new_x))
```

The Neural Network now predicts

```python
[[0.45002102]
 [0.93121636]]
```

These predictions are pretty close to actual expectations

<p align="center">

$\large{\frac{0 + 3 + 1}{10} \approx 0.45 }$

<br><br>

$\large{\frac{1 + 6 + 2}{10} \approx 0.93 }​$

</p>

Hurray!!! We Just built a Neural Network that works...

In my next post, I will talk about the Back-propagation and Loss functions and strategy to optimize the loss.

**[Here](https://github.com/coder3101/coder3101.github.com/blob/master/in-post_codes/understanding-a-complete-neural-net/post2.py) is the complete code of this post**
