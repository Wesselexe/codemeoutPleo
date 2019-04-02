import io from "socket.io-client";

let _socket = null;

export const socket = () => {
  return _socket;
};

export const initSocket = callback => {
  _socket = io("http://10.10.1.34:4001/");
  callback();
};
