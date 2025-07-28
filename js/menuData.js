/**
 * Menu Data Configuration for Boba Tea House
 * Featuring a variety of milk teas, fresh teas, and specialty drinks
 */
const MenuData = {
  'MILK TEA': [
    { id: 'm1', name: 'M1. Milk Tea', description: 'Classic milk tea with chewy tapioca pearls', price: 6.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'm2', name: 'M2. Oolong Milk Tea', description: 'Premium oolong tea with creamy milk', price: 5.75, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'm3', name: 'M3. Salted Cheese Oolong Milk Tea', description: 'Oolong milk tea topped with rich salted cheese foam', price: 6.64, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'm4', name: 'M4. Original Green Milk Tea with Sweet Oats', description: 'Green tea with milk and sweet oat topping', price: 6.75, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'm5', name: 'M5. Brown Sugar Milk Tea', description: 'Classic milk tea with brown sugar syrup', price: 6.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'm6', name: 'M6. Brown Sugar Whole Milk', description: 'Creamy whole milk with brown sugar', price: 5.75, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'm7', name: 'M7. Oreo Salted Cheese Brown Sugar Milk Tea', description: 'Brown sugar milk tea with Oreo and salted cheese foam', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'm8', name: 'M8. Cream Brulee', description: 'Rich cream brulee flavored milk tea', price: 6.75, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'm9', name: 'M9. Classic Coffee Milk Tea', description: 'Perfect blend of coffee and milk tea', price: 6.60, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'm10', name: 'M10. Coffee Brown Sugar Milk Tea', description: 'Coffee milk tea with brown sugar syrup', price: 6.60, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'm11', name: 'M11. Taro Milk Tea', description: 'Creamy taro flavored milk tea', price: 6.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'm12', name: 'M12. Strawberry Green Milk Tea', description: 'Green milk tea with strawberry flavor', price: 6.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'm13', name: 'M13. Chocolate Green Milk Tea', description: 'Green milk tea with rich chocolate', price: 6.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'm14', name: 'M14. Mango Green Milk Tea', description: 'Green milk tea with mango flavor', price: 6.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'm15', name: 'M15. Matcha Latte', description: 'Traditional matcha green tea with milk', price: 5.75, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 'm16', name: 'M16. Matcha Red Bean Latte', description: 'Matcha latte with sweet red bean', price: 6.75, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true }
  ],
  
  'FRESH TEA': [
    { id: 't1', name: 'T1. Passion Fruit Green Tea', description: 'Refreshing green tea with passion fruit flavor', price: 4.99, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 't2', name: 'T2. Strawberry Green Tea', description: 'Green tea with natural strawberry flavor', price: 4.99, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 't3', name: 'T3. Peach Green Tea', description: 'Green tea with sweet peach flavor', price: 4.99, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 't4', name: 'T4. Strawberry Peach Green Tea with Chia Seed', description: 'Green tea with strawberry, peach and chia seeds', price: 5.85, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 't5', name: 'T5. Lychee Fruit Green Tea', description: 'Green tea with sweet lychee flavor', price: 4.99, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 't6', name: 'T6. Artichoke & Honey', description: 'Artichoke tea sweetened with honey', price: 4.99, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 't7', name: 'T7. Mango and Passion Green Tea', description: 'Green tea with mango and passion fruit', price: 5.25, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 't8', name: 'T8. Lychee & Passion Green Tea', description: 'Green tea with lychee and passion fruit', price: 5.25, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 't9', name: 'T9. Strawberry & Passion Green Tea', description: 'Green tea with strawberry and passion fruit', price: 5.25, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 't10', name: 'T10. Ice Shaken Lemonade Coconut Water', description: 'Refreshing lemonade with coconut water', price: 6.25, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 't11', name: 'T11. Ice Shaken Matcha Coconut Water', description: 'Matcha green tea with coconut water', price: 6.25, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 't12', name: 'T12. Hand Crushed Lemon Iced Green Tea', description: 'Freshly crushed lemon with green tea', price: 6.25, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true }
  ],
  
  'YAKULT': [
    { id: 'y1', name: 'Y1. Yakult Strawberry Jasmine Green Tea', description: 'Yakult with strawberry and jasmine green tea', price: 6.80, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'y2', name: 'Y2. Yakult Mango Jasmine Green Tea', description: 'Yakult with mango and jasmine green tea', price: 6.80, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'y3', name: 'Y3. Yakult Peach Jasmine Green Tea', description: 'Yakult with peach and jasmine green tea', price: 6.80, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'y4', name: 'Y4. Yakult Blueberry Jasmine Green Tea', description: 'Yakult with blueberry and jasmine green tea', price: 6.80, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true }
  ],
  
  'CHEESE FOAM DRINKS': [
    { id: 'f1', name: 'F1. Salted Cheese Mango Tea Slushy', description: 'Mango slushy with salted cheese foam', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'f2', name: 'F2. Salted Cheese Strawberry Tea Slushy', description: 'Strawberry slushy with salted cheese foam', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'f3', name: 'F3. Mango & Passion Tea with Cheese Foam', description: 'Mango passion tea with cheese foam topping', price: 5.98, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'f4', name: 'F4. Lychee Tea with Cheese Foam', description: 'Lychee tea with cheese foam topping', price: 5.98, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'f5', name: 'F5. Peach Tea with Cheese Foam', description: 'Peach tea with cheese foam topping', price: 5.98, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'f6', name: 'F6. Matcha Brown Sugar Cheese Foam', description: 'Matcha with brown sugar and cheese foam', price: 6.95, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'f7', name: 'F7. Strawberry Milk Green Tea Matcha Foam', description: 'Strawberry milk tea with matcha foam', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'f8', name: 'F8. Taro Green Milk Tea Matcha Foam', description: 'Taro green milk tea with matcha foam', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'f9', name: 'F9. Brown Sugar Whole Milk Matcha Foam', description: 'Brown sugar milk with matcha foam', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true }
  ],
  
  'COFFEE': [
    { id: 'c1', name: 'Macchiato', description: 'Classic espresso with a dollop of milk foam', price: 4.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'c2', name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: 4.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'c3', name: 'Yogurt Coffee Latte', description: 'Coffee latte with yogurt', price: 5.75, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'c4', name: 'Avocado Coffee Latte (Seasonal)', description: 'Creamy avocado with coffee latte', price: 6.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'c5', name: 'Coffee Matcha Latte', description: 'Blend of coffee and matcha latte', price: 5.75, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'c6', name: 'Coffee Coconut Milk Latte', description: 'Espresso with condensed milk and coconut milk', price: 5.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'c7', name: 'Salted Foam Latte', description: 'Espresso with velvety microfoam', price: 5.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'c8', name: 'Affogato', description: 'Vanilla ice cream with a shot of hot espresso', price: 6.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'c9', name: 'Iced Caramel Macchiato', description: 'Espresso with iced milk, caramel, and foam', price: 5.99, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'c10', name: 'Brown Sugar Yogurt Milk', description: 'Brown sugar boba with yogurt and Oreo', price: 7.59, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false }
  ],
  
  'SMOOTHIES': [
    { id: 's1', name: 'S1. Strawberry with Yogurt Blended', description: 'Strawberry smoothie with yogurt', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 's2', name: 'S2. Strawberry Slushy Coconut Milk', description: 'Strawberry slushy with coconut milk', price: 7.95, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 's3', name: 'S3. Peach with Yogurt Blended', description: 'Peach smoothie with yogurt', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 's4', name: 'S4. Mango with Yogurt Blended', description: 'Mango smoothie with yogurt', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 's5', name: 'S5. Mango Slushy Coconut Milk', description: 'Mango slushy with coconut milk', price: 7.95, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 's6', name: 'S6. Muddy Taro Milk', description: 'Creamy taro milk smoothie', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 's7', name: 'S7. Coconut Slushy with Milk', description: 'Refreshing coconut slushy with milk', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 's8', name: 'S8. Cookie and Cream Slushy with Milk', description: 'Cookies and cream flavored slushy', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 's9', name: 'S9. Moche Slushy with Milk', description: 'Mochi slushy with milk', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 's10', name: 'S10. Green Tea Slushy Coconut Milk', description: 'Matcha green tea slushy with coconut milk', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 's12', name: 'S12. Chocolate Peanut Butter Slushy', description: 'Chocolate peanut butter slushy with coconut milk', price: 7.95, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 's13', name: 'S13. Strawberry Banana Slushy with Milk', description: 'Strawberry banana slushy with milk', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 's14', name: 'S14. Strawberry Mango Slushy with Milk', description: 'Strawberry mango slushy with milk', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 's15', name: 'S15. Chai Tea Slushy with Milk', description: 'Spiced chai tea slushy with milk', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 's16', name: 'S16. Honeydew Slushy with Milk', description: 'Sweet honeydew melon slushy with milk', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 's17', name: 'S17. Espresso Slushy with Milk', description: 'Coffee flavored slushy with milk', price: 7.25, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 's18', name: 'S18. Thai Tea Slushy with Coconut Milk', description: 'Thai tea slushy with coconut milk', price: 7.95, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true }
  ],
  
  'SODA': [
    { id: 'sd1', name: 'Blue Ocean', description: 'Refreshing blue soda drink', price: 4.99, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 'sd2', name: 'Red Sunset', description: 'Fruity red soda drink', price: 4.99, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 'sd3', name: 'Violet', description: 'Sweet violet flavored soda', price: 4.99, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 'sd4', name: 'Windy', description: 'Refreshing soda with a minty twist', price: 4.99, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 'sd5', name: 'Virgin Mojito Berry', description: 'Berry flavored virgin mojito', price: 5.99, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 'sd6', name: 'Mojito Passion', description: 'Passion fruit flavored virgin mojito', price: 5.99, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true }
  ],
  
  'BINGSOO': [
    { id: 'b1', name: 'Strawberry Bingsoo', description: 'Shaved ice with strawberries and toppings', price: 6.95, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: true },
    { id: 'b2', name: 'Chocolate & Oreo Bingsoo', description: 'Shaved ice with chocolate and Oreo cookies', price: 6.95, image: 'assets/images/placeholder.jpg', isVegan: false, isGlutenFree: false },
    { id: 'b3', name: 'Matcha & Red Bean Bingsoo', description: 'Matcha flavored shaved ice with sweet red beans', price: 6.95, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true },
    { id: 'b4', name: 'Watermelon Bingsoo', description: 'Refreshing watermelon flavored shaved ice', price: 6.95, image: 'assets/images/placeholder.jpg', isVegan: true, isGlutenFree: true }
  ]
};
