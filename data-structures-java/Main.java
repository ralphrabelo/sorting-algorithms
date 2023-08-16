// Uso da árvore binária
public class Main {
    public static void main(String[] args) {
        System.out.println("binaryTreeTest");
        binaryTreeTest();
        System.out.println("linkedListTest");
        linkedListTest();
        System.out.println("queueTest");
        queueTest();
        System.out.println("stackTest");
        stackTest();
    }

    public static void queueTest() {
        Queue<Integer> queue = new Queue<>();

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        System.out.println("Dequeue: " + queue.dequeue()); // Saída: Dequeue: 1
        System.out.println("Peek: " + queue.peek()); // Saída: Peek: 2
        System.out.println("Tamanho da fila: " + queue.size()); // Saída: Tamanho da fila: 2
        System.out.println("Está vazia: " + queue.isEmpty()); // Saída: Está vazia: false
    }

    public static void stackTest() {
        Stack<Integer> stack = new Stack<>();

        stack.push(1);
        stack.push(2);
        stack.push(3);

        System.out.println("Pop: " + stack.pop()); // Saída: Pop: 3
        System.out.println("Peek: " + stack.peek()); // Saída: Peek: 2
        System.out.println("Tamanho da pilha: " + stack.size()); // Saída: Tamanho da pilha: 2
        System.out.println("Está vazia: " + stack.isEmpty()); // Saída: Está vazia: false
    }


    public static void binaryTreeTest() {
        BinaryTree<Integer> tree = new BinaryTree<>();

        tree.insert(5);
        tree.insert(3);
        tree.insert(8);
        tree.insert(1);
        tree.insert(4);
        tree.insert(7);
        tree.insert(9);

        tree.preorder(); // Saída: 5 1 3 4 7 8 9
        tree.inorder(); // Saída: 1 3 4 5 7 8 9
        tree.postorder(); // Saída: 1 3 4 7 8 9 5

        System.out.println("Contém 7: " + tree.search(7)); // Saída: Contém 7: true
        System.out.println("Contém 6: " + tree.search(6)); // Saída: Contém 6: false    
    
    }
    public static void linkedListTest() {
        LinkedList<Integer> list = new LinkedList<>();

        list.add(1);
        list.add(2);
        list.add(3);

        list.print(); // Saída: 1 2 3

        list.remove(2);

        System.out.println("Contém 2: " + list.contains(2)); // Saída: Contém 2: false
        System.out.println("Contém 3: " + list.contains(3)); // Saída: Contém 3: true

        list.print(); // Saída: 1 3
    }
}