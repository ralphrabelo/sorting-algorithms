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


