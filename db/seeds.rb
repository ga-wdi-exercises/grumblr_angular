require('buzzfeed_title_generator')

Grumble.destroy_all
Comment.destroy_all

names = %w(Jesse Adam Andy Robin Adrian Matt)
avatars = ['http://placecage.com/100/100', 'http://fillmurray.com/100/100', 'http://placebear.com/100/100', 'http://www.stevensegallery.com/100/100']
title = %w(WOW OMG SUCH AMAZE)

names.each do |name|
  current_grumble = Grumble.create!(authorName: name, title: title.sample(2).join(' '), content: BuzzfeedTitleGenerator.make_title, photoUrl: "http://placebear.com/400/400")
  (rand(4) + 2).times do
    current_grumble.comments.create!(authorName: names.sample, content: "hello")
  end
end
