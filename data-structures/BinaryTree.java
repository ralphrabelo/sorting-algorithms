class TreeNode<T> {
    T data;
    TreeNode<T> left;
    TreeNode<T> right;

    public TreeNode(T data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T> {
    private TreeNode<T> root;

    public BinaryTree() {
        this.root = null;
    }

    public void insert(T data) {
        root = insertRec(root, data);
    }

    private TreeNode<T> insertRec(TreeNode<T> node, T data) {
        if (node == null) {
            return new TreeNode<>(data);
        }

        if (data.hashCode() < node.data.hashCode()) {
            node.left = insertRec(node.left, data);
        } else if (data.hashCode() > node.data.hashCode()) {
            node.right = insertRec(node.right, data);
        }

        return node;
    }

    public boolean search(T data) {
        return searchRec(root, data);
    }

    private boolean searchRec(TreeNode<T> node, T data) {
        if (node == null) {
            return false;
        }

        if (data.equals(node.data)) {
            return true;
        }

        if (data.hashCode() < node.data.hashCode()) {
            return searchRec(node.left, data);
        } else {
            return searchRec(node.right, data);
        }
    }

    
    public void preorder() {
        preorderRec(root);
        System.out.println();
    }
    
    public void inorder() {
        inorderRec(root);
        System.out.println();
    }
    
    public void postorder() {
        postorderRec(root);
        System.out.println();
    }

    private void inorderRec(TreeNode<T> node) {
        if (node != null) {
            inorderRec(node.left);
            System.out.print(node.data + " ");
            inorderRec(node.right);
        }
    }

    private void postorderRec(TreeNode<T> node) {
        if (node != null) {
            inorderRec(node.left);
            inorderRec(node.right);
            System.out.print(node.data + " ");
        }
    }

    private void preorderRec(TreeNode<T> node) {
        if (node != null) {
            System.out.print(node.data + " ");
            inorderRec(node.left);
            inorderRec(node.right);
        }
    }
}

// Uso da árvore binária
public class Main {
    public static void main(String[] args) {
        BinaryTree<Integer> tree = new BinaryTree<>();

        tree.insert(5);
        tree.insert(3);
        tree.insert(8);
        tree.insert(1);
        tree.insert(4);
        tree.insert(7);
        tree.insert(9);

        tree.preorder();
        tree.inorder(); // Saída: 1 3 4 5 7 8 9
        tree.postorder();

        System.out.println("Contém 7: " + tree.search(7)); // Saída: Contém 7: true
        System.out.println("Contém 6: " + tree.search(6)); // Saída: Contém 6: false
    }
}
