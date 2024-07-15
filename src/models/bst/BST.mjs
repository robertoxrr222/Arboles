import { Node } from "./Node.mjs";
//import { paintContact } from "../../controllers/script.mjs";

export class BST {
    #root

    constructor(root) {
        this.#root = root
    }

    add(value) {
        if (this.#root == null) {
            this.#root = new Node(value)
        } else {
            this.insertNode(this.#root, value)
        }

        if (this.insertNode) {
            return true
        } else {
            return false
        }
    }

    insertNode(node, value) {
        if (value.name < node.value.name) {
            if (node.left == null) {
                node.left = new Node(value)
                return true
            } else {
                this.insertNode(node.left, value)
            }
        } else {
            if (node.right == null) {
                node.right = new Node(value)
                return true
            } else {
                this.insertNode(node.right, value)
            }
        }
    }

    searchContact(value) {
        let node = this.findContact(this.#root, value)
        return node
    }
    findContact(node, value) {
        if (node == null || node.value.name == value) {
            return node
        } else if (value < node.value.name) {
            return this.findContact(node.left, value)
        } else {
            return this.findContact(node.right, value)
        }
    }

    searchMax() {
        return this.findMax(this.#root)
    }
    findMax(node) {
        if ((node == null) || (node.right == null)) {
            return node;
        } else {
            return this.findMax(node.right)
        }
    }

    searchMin() {
        return this.findMin(this.#root)
    }
    findMin(node) {
        if ((node == null) || (node.left == null)) {
            return node;
        } else {
            return this.findMax(node.left)
        }
    }

    printTree(callback) {
        this.printNode(this.#root, callback)
    }
    printNode(node, callback) {
        if (!(node == null)) {
            this.printNode(node.left, callback)
            callback(node.value)
            this.printNode(node.right, callback)
        }
    }
}