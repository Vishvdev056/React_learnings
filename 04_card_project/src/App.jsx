
  import Card from "./components/Card"
 
 
  const App = () => {

    
const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/jkbMhUzFlfiqzmU4cnbqA5ScYzzLfJqTT1pJXORG2CM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bangalore, India",
  },

  {
    brandLogo: "https://imgs.search.brave.com/_opwAgY4GyasSwE70tgklfC55bl3UxFFcWIu1E_Dwa4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC1s/b2dvLWltYWdlLTIz/LnBuZw",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Hyderabad, India",
  },

  {
    brandLogo: "https://imgs.search.brave.com/wCsXkphbgTVitOK7NR_O8ZwD54_tPmUxKCDNQ7XMQY8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFtYXpvbi1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy00/NDk3ODE2LnBuZz9m/PXdlYnAmdz0xMjg",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Mumbai, India",
  },

  {
    brandLogo: "https://imgs.search.brave.com/QpQQaUkD0bIAekvPR1Y9cIRFHxNbH1rwZlIsi2kz2D4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/MjEwLzg5MC9zbWFs/bC9tZXRhLWxvZ28t/c3F1YXJlLXJvdW5k/ZWQtbWV0YS1sb2dv/LW1ldGEtbG9nby1m/cmVlLWRvd25sb2Fk/LWZyZWUtcG5nLnBu/Zw",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Gurgaon, India",
  },

  {
    brandLogo: "https://imgs.search.brave.com/DzF429iIjcgfhk0pJCKDMQYDLonOYkei9DZ_3Yl8s8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hour",
    location: "Bangalore, India",
  },

  {
    brandLogo: "https://imgs.search.brave.com/hAiypPNDgbK6Kb8JyK8JFh-zXXBBL-UMaPg5XDuqvtk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ1LzIvbmV0Zmxp/eC1sb2dvLXBuZ19z/ZWVrbG9nby00NTE5/ODEucG5n",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Mumbai, India",
  },

  {
    brandLogo: "https://imgs.search.brave.com/ckZOd-P8UQtRtvJ0HtVtJp2HhSyVCkYCKgOdyLDbE-4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9uZXctTnZp/ZGlhLWxvZ28tUE5H/LW1lZGl1bS1zaXpl/LnBuZw",
    companyName: "NVIDIA",
    datePosted: "1 week ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Pune, India",
  },

  {
    brandLogo: "https://imgs.search.brave.com/26ahKGn5zFKUZ6qMkuUy4d_pJ_aFZyNTJgHUTj1nZsA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDYvQWRvYmUtTG9n/by0xOTkzLTIwMTQt/NzAweDM5NC5wbmc",
    companyName: "Adobe",
    datePosted: "3 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hour",
    location: "Noida, India",
  },

  {
    brandLogo: "https://imgs.search.brave.com/73PZU6J7hZT_iMP45Ak5JVAqV92tNe-bTCMdm7Y-h2A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/Yi53aWtpbWVkaWEu/b3JnL3dpa2lwZWRp/YS9jb21tb25zL3Ro/dW1iLzUvNTEvSUJN/X2xvZ28uc3ZnLzk2/MHB4LUlCTV9sb2dv/LnN2Zy5wbmc_dXRt/X3NvdXJjZT1jb21t/b25zLndpa2ltZWRp/YS5vcmcmdXRtX2Nh/bXBhaWduPWluZGV4/JnV0bV9jb250ZW50/PXRodW1ibmFpbCZf/PTIwMjYwNTAzMDEz/MjQ3",
    companyName: "IBM",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Bangalore, India",
  },

  {
    brandLogo: "https://imgs.search.brave.com/NiboZG35JUkM91k0uvjRY3hsdxuDZCYnUHrxL-HkfMo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvT3Jh/Y2xlLUxvZ28tUE5H/LUZpbGUucG5n",
    companyName: "Oracle",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Hyderabad, India",
  },
];
console.log(jobOpenings)

    
    return (
      <div className='parent'>
       {jobOpenings.map(function(elem,idx){
          console.log(idx)
        return <div key={idx}>
          <Card company={elem.companyName}
        datePosted={elem.datePosted}
        brandLogo={elem.brandLogo}
        post={elem.post}
        pay={elem.pay}
        location={elem.location}
        duration={elem.tag1}
        level={elem.tag2}/>
        </div>
       })}
      </div>
    
    )
  }
  
export default App





