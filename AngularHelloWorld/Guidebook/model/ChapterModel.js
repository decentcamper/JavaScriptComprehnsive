
Guidebook.service('ChapterModel',
  function() {
    this.getChapters = function() {
      return [
        {
          id: 0,
          title: 'Chapter 1: So, What is AngularJS?',
          summary: 'Find out what separates AngularJS from the other Javascript frameworks out there, and why it just might be the best choice for your next project.'
        },
        {
          id: 1,
          title: 'Chapter 2: HelloWorld',
          summary: 'Learn how to get up and running with AngularJS, so you can start building cutting-edge web applications as soon as possible.'
        },
        {
          id: 2,
          title: 'Chapter 3: QuickStart',
          summary: 'Brush up on the Model-View-Controller paradigm, and see how to build a fast, flexible MVC application using AngularJS.'
        },
        {
          id: 3,
          title: 'Chapter 4: Key AngularJS Features',
          summary: 'Discover the strengths of AngularJS by exploring its most prominent features: Templates, Modules, Two-way Data Binding, Dependency Injection, and Directives.'
        },
        {
          id: 4,
          title: 'Chapter 5: The AngularJS Community',
          summary: 'Get to know the top contributors, bloggers, and experts on AngularJS. Visit helpful links to tutorials, forums, articles, and Twitter feeds that will keep you up-to-date on all things AngularJS.'
        }
      ]
    };
  }
);

/*
The data structure we're returning in the getChapters() function is very straightforward;
it's a simple array of JavaScript objects. The function definition is also an easy one; as usual,
we're using the application namespace, and we're defining the model as an AngularJS service.
(We'll cover AngularJS services and their brethren in the next section, when we discuss dependency injection).*/
