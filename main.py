from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split
import numpy as np
import pandas as pd
from pythonosc import udp_client
import socket
import argparse

np.set_printoptions(suppress=True)

parser = argparse.ArgumentParser()
parser.add_argument("--ip", default="127.0.0.1",
                    help="The ip of the OSC server")
parser.add_argument("--port", type=int, default=5005,
                    help="The port the OSC server is listening on")
args = parser.parse_args()
client = udp_client.SimpleUDPClient(args.ip, args.port)
server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server_socket.bind(('', 5007))
server_socket.setblocking(1)

def print_volume_handler(unused_addr, args, volume):
    print((args, volume))
#replace with path to the dataset created in MaxMSP
#data = pd.read_csv('/Users/thomasmartinez/Desktop/samples.csv')
data = pd.read_csv('/Path/To/YourDataset.csv')
data = np.array(data);
X = data[:, :-1]
y = data[:, -1]
X_train, X_test, y_train, y_test = train_test_split(X, y,random_state=1)
clf = MLPClassifier(random_state=1, max_iter=3000).fit(X_train, y_train)

while True:
    try:
        message, address = server_socket.recvfrom(1024)
        message = (message.decode("utf-8", 'strict'))
        message = [float(value) for value in message.split(', ')]
        X_new = np.array([message])
        prediction = clf.predict_proba(X_new)
        client.send_message("/prediction", str(prediction[0]))
    except Exception as e:
        print(e)
