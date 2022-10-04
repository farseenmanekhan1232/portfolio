---
title: Understanding a Neuron in Neural Networks
categories: NeuralNets
mathjax: true
featured-img: sleek
---

Neural Networks are widely used in deep learning today. You will hardly find a benchmark not dominated by Neural Networks. Everything from Image recognition to Machine Translation. It is the same Neural Network with some variations, that achieves or surpasses Human-Level Performance. Here, I will explain the building block of a Neural Network called **Neuron**.

##  Neuron

Neurons are the most fundamental unit of a neural network. Before we begin with an Artificial Neuron. Let's have a look at biological Neuron or Nerve Cell.

From Wikipedia

> *A **neuron**  is an electrically excitable cell that receives, processes, and transmits information through electrical and chemical signals.*

The biological definition is pretty acceptable for Artificial Neurons as well because Artificial Neurons also receives some values, processes and then transmits the results.

There is no standard way of visualizing a neuron in artificial neural networks. But, You can assume a **neuron as a mathematical function that gets some input and produces some output**. So, stick to this Idea, It will get more clear as you progress.



## Neuron's Components

As I mentioned  **a neuron is a mathematical function**. So what is the input to that neuron, what is the output and what mathematical relation converts the input to output?

This Picture depicts a neuron getting input(s) and producing output(s) with all of its component.

<p align="center"><img src="https://github.com/coder3101/coder3101.github.com/raw/master/in-post_imgs/understanding-ff-nn/NeuronExpl.jpg"/>

</p>

There are some terms called *weights* which are `w1,w2,w3` *inputs* `x1,x2,x3` and *bias* `b`.

***Weight(s)*** are the imaginary lines that connect the neurons together. You can assume them as pipes through which input flows. When an input flows through that pipe the input is scaled by a number `w`. Such that in the end, the result is `w * x`. This `w` is uniquely associated with each weight (pipe) and can be any real number.  Say `x1` = 5 and `w1` = 0.5, then the value that reaches the neuron is `x1 * w1` = 2.5

***Inputs(s)*** are the **values we feed into the neuron or the outputs of the previous neurons**. In the above example, we assume that `x1, x2, x3` are the inputs to our neuron. We can also feed the output `z1` produced by this neuron as input for the next neuron. 

***Bias*** as it means adds some bias to the decision(output) that our neuron will produce. It is a real number that is added or subtracted to neurons. Each neuron is associated with one unique bias value. We can even skip this term in some cases.

There is one more thing called Activation Function which determines  `z1` the final output of the neuron.

***Activation Function*** is a function whose Domain is { ${-\infty, +\infty}$ } and are continuous and differentiable everywhere. *In very simple words, the activation function must be defined for all values of input and the graph of which should not break or abruptly change directions*. Most widely used activation function today is Relu expanded as **Rectified Linear Unit**.

Mathematically,

<p align="center">

​						$relu(x) = x^+ = max(0, x)$

</p>

The output of relu is very simple. For all the positive values the result is the identity (same as input) for negative values it is always zero. 

Here is the graph of Relu.

<p align="center">

<img src="https://github.com/coder3101/coder3101.github.com/raw/master/in-post_imgs/understanding-ff-nn/relu.jpeg"/>

</p>



*Note: Relu function is a non-linear function and is not differentiable at x=0, So, we assume derivative of relu at x=0 as zero.*



## Neuron's Calculation

A Neuron represents a simple function that takes in weight-scaled input value(s)  and adds all the values including the bias term and then applies the *activation function*.

Here is how it looks mathematically,

<p align="center">

$w^{out}_1 =  x_1 * w_1$

<br><br>

$w^{out}_2 =  x_2 * w_2$

<br>

<br>

$w^{out}_3 =  x_3 * w_3$

</p>

From our analogy of weights as pipes when `x1, x2, x3` flow through the weights `w1, w2, w3` the outputs that will reach to the neuron are denoted as $w^{out}_1$ , $w^{out}_2$ , $w^{out}_3$ respectively. The above mathematical calculations denote these operations.

Inside the neuron following calculations take place.

<p align="center">

$a_1 = w_1^{out} + w_2^{out} + w_3^{out} + b$

<br><br>

$z_1 = relu (a_1)$

</p>



In a more generalized way, it is all represented as

<p align="center">

$a_1 = \sum_{i=1}^n x_i * w_i + b$

$$z_1 = relu( a_1)$$

</p>

Here `n` is the number of inputs to the neuron. 

*Note : $a_1$ is referred to as logit.*

##  The Reality

This article was intended for someone who is very new in neural networks. So, it talks about some analogies that such as pipes for weights which are purely the production of author. In reality, the things are not that easy like *pipes* and input flowing one by one. Rather all the things are encapsulated under the shades of mathematics for faster computations.

We use Linear Algebra that simplifies the complete computation and brings down the computation speed.

We always  we represent `input` as a matrix of values like $\begin {bmatrix}x_1 & x_2 & x_3 \end{bmatrix}$  of dimension $(1,3)$. We also pack all the `weights` as a matrix of values like $\begin{bmatrix}w_1 \\\ w_2 \\\ w_3 \end{bmatrix}$ of shape $(3,1)$.

Now we matrix multiply `input * weights` .  The output will be of dimension $(1,1)$ followed by the bias addition followed by the element-wise relu to $(1,1)$. We finally get one output `z1` in a matrix of $(1,1)$

In future  when I explain the Complete Neural Network it will be more clear as to why packing things in matrices and vectors makes sense.

Stay tuned.






