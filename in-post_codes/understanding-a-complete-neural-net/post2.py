import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def relu(x):
    return np.maximum(x, 0)

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


def forward_propagation(weights, biases, x):
    """ produces the prediction of the neural network for given input x
    """
    num_layers = len(weights)
    activation = None
    for i in range(num_layers):
        if i == 0:
    	    activation = relu(np.dot(x, weights[i]) + biases[i])
        elif i == num_layers-1:
            activation = sigmoid(np.dot(activation, weights[i]) + biases[i])
        else:
            activation = relu(np.dot(activation, weights[i]) + biases[i])
    return activation


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

new_x = np.array([[0,3,1],
                  [1,6,2]])
print('With Random weights and biases)
w, b = create_weights_and_biases()
print(forward_propagation(w,b,new_x))

print('With trained Weights')
w, b = trained_weights_and_biases()
print(forward_propagation(w,b,new_x))
