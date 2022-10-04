---
mathjax: true
title: Gradient Descent - The Algorithm of Intelligence
categories: NeuralNets
featured-img: gradient_descent
---

In the last post we learned about loss functions that help us determine how well or poor our neural network is performing. However We did not talked about how to cause our neural neural network to minimise that loss. In this post we will talk about Gradient descent Algorithm which slowly reduces the loss of our model. It is no big deal, you just need some basics of Derivatives and what they actually represent. It will be very good if you know these things, but if you don't you can still follow.

### Recall

Before we begin it is very important that you must know where a neural network holds its intelligence. It is the values of weight and biases. In [this](https://coder3101.github.io/understanding-a-complete-neural-net/) post I briefly discussed how intelligence is embedded in the values of weights and biases. We also talked about training our network which involves getting the perfect values of weights and biases. In this post we will learn how do we actually change the values of weights and biases during training. Let's get started



## Backpropagation

We talked about Forward Propagation in [this](https://coder3101.github.io/understanding-a-complete-neural-net/) post. Forward Propagation is the pass in which data flows from input layer to output layer. "*input times weight, add a bias, activate*" , this statement beautifully describes what  forward pass/propagation does. For More you can read [this](https://coder3101.github.io/understanding-a-complete-neural-net/) post.

Today we will talk about Backward pass or Back Propagation. As evident from the name it is opposite to forward propagation. **The data flow from the output layer to the input layer**, updating all the weights and biases of the network in such a way that minimises the loss of the network during the flow. Here is what actually happens "*output gives loss, propagate it up-to input, update all parameters in the path*". 

Following Picture Illustrates the two passes. It denotes only 1 neuron for simplicity, In reality it involves a complete neural network.

<center>
    <img src="https://github.com/coder3101/coder3101.github.com/raw/master/in-post_imgs/gradient-descent-algorithm-of-intelligence/backward_forward.png">
</center>

Forward Pass is Simple, Just two input $x$ and $y$ are used to predict the output $z$ The Backward Pass consists of just the opposite flow, from the Output side to the input side. In just a bit we will explain what those $$\frac{dL}{dz}$$ and other derivatives mean.

Just remember, **Forward Pass gives output while Backward Pass updates weights and biases of the network**.



## What does a Derivative represents?

 *This is Optional for those who know derivatives*

Derivatives are just mathematical representations of the rate of change of output with respect to the input. When we write $$ \large\frac {dy}{dx}​$$ , It represents the *rate of change of y with respect to x*

For Example, Say we have a Function :

<center>
    $$f(x) = 5x$$
</center>

*Note : $y$ is the output of the $f$*

If you wanted to know how does $y$ changes when $x$ changes. You are likely to find the derivative of this function. In this case it will be $5$ . So we will write $$\large \frac{dy}{dx} = 5$$. It implies if we increase, $x$ by 2, the value of $y$ increases to 10 (5 times the value increase in $x$).  If this value of derivative were to be negative, it means, if x increases, y decreases. The value of this derivative depends upon the function and point of evaluation. We won't talk more about it here although it is recommended you should know more about Derivatives, Have a look at [Khan Academy's Derivative Course](https://www.khanacademy.org/math/differential-calculus/dc-diff-intro) 

