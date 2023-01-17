const RECIPES_DATA = [
  {
    recipeNum: '0001',
    createdAt: '2023-01-15T02:03:43.223Z',
    lastUpdated: '2023-01-15T02:03:43.223Z',
    title: 'Recipe 1',
    imageForMobile: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    imageForDesktop: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    description: ['I\'m describing this recipe', 'And I will keep describing it here!'],
    time: {
      activeTime: '30',
      otherTime: {
        marinatingTime: null,
        soakingTime: null
      },
      totalTime: '45'
    },
    ingredients: [
      { heading: 'Big Ingredients' },
      'Ingredient 1',
      'Ingredient 2',
      'Ingredient 3',
      { heading: 'Small Ingredients' },
      'Ingredient 4',
      'Ingredient 5'
    ],
    directions: [
      {
        heading: 'Step 1',
        description: 'Do a thing with the ingredients.'
      },
      {
        heading: 'Step 2',
        description: 'Cook that thing you just did.'
      },
      {
        heading: 'Step 3',
        description: 'Oh wow, looking good! Put it on a plate.'
      }
    ],
    ratings: [4, 5, 3.5, 4, 4.5, 5, 4, 4.5, 3, 5]
  },
  {
    recipeNum: '0002',
    createdAt: '2023-01-15T02:03:43.223Z',
    lastUpdated: '2023-01-15T02:03:43.223Z',
    title: 'Recipe 2',
    imageForMobile: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    imageForDesktop: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    description: ['I\'m describing this recipe', 'And I will keep describing it here!'],
    time: {
      activeTime: '30',
      otherTime: {
        marinatingTime: null,
        soakingTime: null
      },
      totalTime: '45'
    },
    ingredients: [
      { heading: 'Big Ingredients' },
      'Ingredient 1',
      'Ingredient 2',
      'Ingredient 3',
      { heading: 'Small Ingredients' },
      'Ingredient 4',
      'Ingredient 5'
    ],
    directions: [
      {
        heading: 'Step 1',
        description: 'Do a thing with the ingredients.'
      },
      {
        heading: 'Step 2',
        description: 'Cook that thing you just did.'
      },
      {
        heading: 'Step 3',
        description: 'Oh wow, looking good! Put it on a plate.'
      }
    ],
    ratings: [4, 5, 3.5, 4, 4.5, 5, 4, 4.5, 3, 5]
  },
  {
    recipeNum: '0003',
    createdAt: '2023-01-15T02:03:43.223Z',
    lastUpdated: '2023-01-15T02:03:43.223Z',
    title: 'Recipe 3',
    imageForMobile: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    imageForDesktop: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    description: ['I\'m describing this recipe', 'And I will keep describing it here!'],
    time: {
      activeTime: '30',
      otherTime: {
        marinatingTime: null,
        soakingTime: null
      },
      totalTime: '45'
    },
    ingredients: [
      { heading: 'Big Ingredients' },
      'Ingredient 1',
      'Ingredient 2',
      'Ingredient 3',
      { heading: 'Small Ingredients' },
      'Ingredient 4',
      'Ingredient 5'
    ],
    directions: [
      {
        heading: 'Step 1',
        description: 'Do a thing with the ingredients.'
      },
      {
        heading: 'Step 2',
        description: 'Cook that thing you just did.'
      },
      {
        heading: 'Step 3',
        description: 'Oh wow, looking good! Put it on a plate.'
      }
    ],
    ratings: [4, 5, 3.5, 4, 4.5, 5, 4, 4.5, 3, 5]
  },
  {
    recipeNum: '0004',
    createdAt: '2023-01-15T02:03:43.223Z',
    lastUpdated: '2023-01-15T02:03:43.223Z',
    title: 'Recipe 4',
    imageForMobile: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    imageForDesktop: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    description: ['I\'m describing this recipe', 'And I will keep describing it here!'],
    time: {
      activeTime: '30',
      otherTime: {
        marinatingTime: null,
        soakingTime: null
      },
      totalTime: '45'
    },
    ingredients: [
      { heading: 'Big Ingredients' },
      'Ingredient 1',
      'Ingredient 2',
      'Ingredient 3',
      { heading: 'Small Ingredients' },
      'Ingredient 4',
      'Ingredient 5'
    ],
    directions: [
      {
        heading: 'Step 1',
        description: 'Do a thing with the ingredients.'
      },
      {
        heading: 'Step 2',
        description: 'Cook that thing you just did.'
      },
      {
        heading: 'Step 3',
        description: 'Oh wow, looking good! Put it on a plate.'
      }
    ],
    ratings: [4, 5, 3.5, 4, 4.5, 5, 4, 4.5, 3, 5]
  },
  {
    recipeNum: '0005',
    createdAt: '2023-01-15T02:03:43.223Z',
    lastUpdated: '2023-01-15T02:03:43.223Z',
    title: 'Recipe 5',
    imageForMobile: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    imageForDesktop: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    description: ['I\'m describing this recipe', 'And I will keep describing it here!'],
    time: {
      activeTime: '30',
      otherTime: {
        marinatingTime: null,
        soakingTime: null
      },
      totalTime: '45'
    },
    ingredients: [
      { heading: 'Big Ingredients' },
      'Ingredient 1',
      'Ingredient 2',
      'Ingredient 3',
      { heading: 'Small Ingredients' },
      'Ingredient 4',
      'Ingredient 5'
    ],
    directions: [
      {
        heading: 'Step 1',
        description: 'Do a thing with the ingredients.'
      },
      {
        heading: 'Step 2',
        description: 'Cook that thing you just did.'
      },
      {
        heading: 'Step 3',
        description: 'Oh wow, looking good! Put it on a plate.'
      }
    ],
    ratings: [4, 5, 3.5, 4, 4.5, 5, 4, 4.5, 3, 5]
  },
  {
    recipeNum: '0006',
    createdAt: '2023-01-15T02:03:43.223Z',
    lastUpdated: '2023-01-15T02:03:43.223Z',
    title: 'Recipe 6',
    imageForMobile: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    imageForDesktop: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    description: ['I\'m describing this recipe', 'And I will keep describing it here!'],
    time: {
      activeTime: '30',
      otherTime: {
        marinatingTime: null,
        soakingTime: null
      },
      totalTime: '45'
    },
    ingredients: [
      { heading: 'Big Ingredients' },
      'Ingredient 1',
      'Ingredient 2',
      'Ingredient 3',
      { heading: 'Small Ingredients' },
      'Ingredient 4',
      'Ingredient 5'
    ],
    directions: [
      {
        heading: 'Step 1',
        description: 'Do a thing with the ingredients.'
      },
      {
        heading: 'Step 2',
        description: 'Cook that thing you just did.'
      },
      {
        heading: 'Step 3',
        description: 'Oh wow, looking good! Put it on a plate.'
      }
    ],
    ratings: [4, 5, 3.5, 4, 4.5, 5, 4, 4.5, 3, 5]
  },
  {
    recipeNum: '0007',
    createdAt: '2023-01-15T02:03:43.223Z',
    lastUpdated: '2023-01-15T02:03:43.223Z',
    title: 'Recipe 7',
    imageForMobile: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    imageForDesktop: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    description: ['I\'m describing this recipe', 'And I will keep describing it here!'],
    time: {
      activeTime: '30',
      otherTime: {
        marinatingTime: null,
        soakingTime: null
      },
      totalTime: '45'
    },
    ingredients: [
      { heading: 'Big Ingredients' },
      'Ingredient 1',
      'Ingredient 2',
      'Ingredient 3',
      { heading: 'Small Ingredients' },
      'Ingredient 4',
      'Ingredient 5'
    ],
    directions: [
      {
        heading: 'Step 1',
        description: 'Do a thing with the ingredients.'
      },
      {
        heading: 'Step 2',
        description: 'Cook that thing you just did.'
      },
      {
        heading: 'Step 3',
        description: 'Oh wow, looking good! Put it on a plate.'
      }
    ],
    ratings: [4, 5, 3.5, 4, 4.5, 5, 4, 4.5, 3, 5]
  },
  {
    recipeNum: '0008',
    createdAt: '2023-01-15T02:03:43.223Z',
    lastUpdated: '2023-01-15T02:03:43.223Z',
    title: 'Recipe 8',
    imageForMobile: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    imageForDesktop: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    description: ['I\'m describing this recipe', 'And I will keep describing it here!'],
    time: {
      activeTime: '30',
      otherTime: {
        marinatingTime: null,
        soakingTime: null
      },
      totalTime: '45'
    },
    ingredients: [
      { heading: 'Big Ingredients' },
      'Ingredient 1',
      'Ingredient 2',
      'Ingredient 3',
      { heading: 'Small Ingredients' },
      'Ingredient 4',
      'Ingredient 5'
    ],
    directions: [
      {
        heading: 'Step 1',
        description: 'Do a thing with the ingredients.'
      },
      {
        heading: 'Step 2',
        description: 'Cook that thing you just did.'
      },
      {
        heading: 'Step 3',
        description: 'Oh wow, looking good! Put it on a plate.'
      }
    ],
    ratings: [4, 5, 3.5, 4, 4.5, 5, 4, 4.5, 3, 5]
  },
  {
    recipeNum: '0009',
    createdAt: '2023-01-15T02:03:43.223Z',
    lastUpdated: '2023-01-15T02:03:43.223Z',
    title: 'Recipe 9',
    imageForMobile: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    imageForDesktop: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    description: ['I\'m describing this recipe', 'And I will keep describing it here!'],
    time: {
      activeTime: '30',
      otherTime: {
        marinatingTime: null,
        soakingTime: null
      },
      totalTime: '45'
    },
    ingredients: [
      { heading: 'Big Ingredients' },
      'Ingredient 1',
      'Ingredient 2',
      'Ingredient 3',
      { heading: 'Small Ingredients' },
      'Ingredient 4',
      'Ingredient 5'
    ],
    directions: [
      {
        heading: 'Step 1',
        description: 'Do a thing with the ingredients.'
      },
      {
        heading: 'Step 2',
        description: 'Cook that thing you just did.'
      },
      {
        heading: 'Step 3',
        description: 'Oh wow, looking good! Put it on a plate.'
      }
    ],
    ratings: [4, 5, 3.5, 4, 4.5, 5, 4, 4.5, 3, 5]
  },
  {
    recipeNum: '0010',
    createdAt: '2023-01-15T02:03:43.223Z',
    lastUpdated: '2023-01-15T02:03:43.223Z',
    title: 'Recipe 10',
    imageForMobile: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    imageForDesktop: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    description: ['I\'m describing this recipe', 'And I will keep describing it here!'],
    time: {
      activeTime: '30',
      otherTime: {
        marinatingTime: null,
        soakingTime: null
      },
      totalTime: '45'
    },
    ingredients: [
      { heading: 'Big Ingredients' },
      'Ingredient 1',
      'Ingredient 2',
      'Ingredient 3',
      { heading: 'Small Ingredients' },
      'Ingredient 4',
      'Ingredient 5'
    ],
    directions: [
      {
        heading: 'Step 1',
        description: 'Do a thing with the ingredients.'
      },
      {
        heading: 'Step 2',
        description: 'Cook that thing you just did.'
      },
      {
        heading: 'Step 3',
        description: 'Oh wow, looking good! Put it on a plate.'
      }
    ],
    ratings: [4, 5, 3.5, 4, 4.5, 5, 4, 4.5, 3, 5]
  },
  {
    recipeNum: '0011',
    createdAt: '2023-01-15T02:03:43.223Z',
    lastUpdated: '2023-01-15T02:03:43.223Z',
    title: 'Recipe 11',
    imageForMobile: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    imageForDesktop: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    description: ['I\'m describing this recipe', 'And I will keep describing it here!'],
    time: {
      activeTime: '30',
      otherTime: {
        marinatingTime: null,
        soakingTime: null
      },
      totalTime: '45'
    },
    ingredients: [
      { heading: 'Big Ingredients' },
      'Ingredient 1',
      'Ingredient 2',
      'Ingredient 3',
      { heading: 'Small Ingredients' },
      'Ingredient 4',
      'Ingredient 5'
    ],
    directions: [
      {
        heading: 'Step 1',
        description: 'Do a thing with the ingredients.'
      },
      {
        heading: 'Step 2',
        description: 'Cook that thing you just did.'
      },
      {
        heading: 'Step 3',
        description: 'Oh wow, looking good! Put it on a plate.'
      }
    ],
    ratings: [4, 5, 3.5, 4, 4.5, 5, 4, 4.5, 3, 5]
  },
  {
    recipeNum: '0012',
    createdAt: '2023-01-15T02:03:43.223Z',
    lastUpdated: '2023-01-15T02:03:43.223Z',
    title: 'Recipe 12',
    imageForMobile: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    imageForDesktop: {
      src: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
      altText: ''
    },
    description: ['I\'m describing this recipe', 'And I will keep describing it here!'],
    time: {
      activeTime: '30',
      otherTime: {
        marinatingTime: null,
        soakingTime: null
      },
      totalTime: '45'
    },
    ingredients: [
      { heading: 'Big Ingredients' },
      'Ingredient 1',
      'Ingredient 2',
      'Ingredient 3',
      { heading: 'Small Ingredients' },
      'Ingredient 4',
      'Ingredient 5'
    ],
    directions: [
      {
        heading: 'Step 1',
        description: 'Do a thing with the ingredients.'
      },
      {
        heading: 'Step 2',
        description: 'Cook that thing you just did.'
      },
      {
        heading: 'Step 3',
        description: 'Oh wow, looking good! Put it on a plate.'
      }
    ],
    ratings: [4, 5, 3.5, 4, 4.5, 5, 4, 4.5, 3, 5]
  }
]

export default RECIPES_DATA;