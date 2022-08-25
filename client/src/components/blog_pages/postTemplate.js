import React from 'react';
import ReactMarkdown from 'react-markdown';
import ReactDom from 'react-dom';

import "../pages/Blog.css";
import "./postTemplate.css";


function postTemplate() {
    return (
      <>
        <div className="Blog">
          <div className="sidebar">
            <p>5</p>
            <p>6</p>
            <p>3</p>
            <p className='sidebar-text'>Blog</p>
          </div>
          <div className='blog-text'>
            <h1>1 &mdash; Why I Write 7/5/21:</h1>

            <p>I thought for a while about how to ceremoniously begin a new blog that would immediately grab the attention of unsuspecting readers in a quirky fashion. But alas, I don&rsquo;t do clickbait.</p>

            <p>In other words, I realized I never write for others, which must sound rather peculiar? After all, a writer&rsquo;s work is rooted in the art of communication. Whether that be a story, idea, rant, poem, or some other literary form, the audience is always a writer&rsquo;s target. The reader&rsquo;s supposed to empathize with a character&rsquo;s sacrifices, to be moved by the Little Prince&rsquo;s commitment to his rose, and to be utterly revolted by Voldemort&rsquo;s lack of basic facial features.</p>

            <p>Yes, I do understand the above, but unlike other authors, I merely write to help myself. I write to clear my head of cognitive dissonance over important decisions; I write to overcome disappointments; I write to live out futures I hope to attain and wallow in past actions I regret.</p>

            <p>Stated as so, my motives may appear self-indulgent and to an extent even egotistical. And if you the reader think that is so, know the purpose of this blog entry is not to convince you one way or the other on whether I&rsquo;m too self-centered. You are free to believe whatever you interpret my writing. That in my opinion is the beauty of language&rsquo;s subjective quality; it&rsquo;s a true marvel that I as the reader can subjectively interpret another author&rsquo;s writing and contextualize it to my own experiences and apply it to my life in whatever fashion suiting me. In that vein, I may interpret the process of writing this blog entry as a means for me to concretely conceptualize what motivates me to write, whereas you the reader may interpret it as a rant that is too meta even when compared to a Rick and Morty episode.</p>

            <p>In Orwell&rsquo;s essays on why he writes, he outlines four sub-points he believes inspire most authors. They are 1) egoism 2) aesthetic enthusiasm 3) historical impulse and 4) political purpose. Frankly, my motivations do not align with sub-points 1, 3, and 4, and only barely reflect those of sub-point 2 . There&rsquo;s just something strikingly beautiful about perfectly conveying the nerve-wracking nature of a policy debate round or describing the nostalgia one has for a middle school math class (future entry for sure). In the chaos that is my everyday life, writing is the one period where everything can settle and my thoughts can grow clear, and even bloom. As for all the elements of writing concerning prose and syntax in sub point 2 Orwell details, I have no interest in refining greatly as such efforts are in my eyes pedantic.</p>

            <p>While I write blog entries in the future, I will actively attempt to minimize the number of times I instruct readers to do something. But the closing of this piece will be an exception. Please use the comment section to draft your own thinking on a specific critical essay, review, short story, or philosophical rant I decide to post. Let the spirit of writing solely to enrich your own conscience blossom into meaningful discussions with others. Believe me, it does do wonders.</p>

            <p>Honestly, this entry did not satisfyingly answer the title question. I&rsquo;ll continue it in a part 2 sometime in the future&#8230;</p>
          </div>

        </div>

        
      </>
    )
  }
  
  export default postTemplate;