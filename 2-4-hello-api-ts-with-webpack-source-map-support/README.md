## source-map-support
exception 이 발생했을 때 출력되는 stackTrace는 source-map 을 사용하지 않을 시 타입스크립트와 웹팩에 의해 변환된 코드를 기준으로 작성된다.

AS-IS
<img width="1253" alt="as-is" src="https://user-images.githubusercontent.com/15353790/214235915-87ed2d5c-cbf7-4df9-be12-4638513ef1ba.png">

TO-BE
<img width="1253" alt="to-be" src="https://user-images.githubusercontent.com/15353790/214235985-40f8dd18-dc1e-49d8-b019-0df012de2a7a.png">

---

Lambda에 업로드할 패키지를 만들 시 어떤 코드를 참조해 결과물을 만들어내는지 상세한 로그를 알 수 있다.

AS-IS
<img width="1645" alt="스크린샷 2023-01-24 오후 4 46 53" src="https://user-images.githubusercontent.com/15353790/214237705-2818ee84-4fba-4d75-818b-93885aa98f42.png">

TO-BE
<img width="1646" alt="스크린샷 2023-01-24 오후 4 47 20" src="https://user-images.githubusercontent.com/15353790/214237717-d4d96d86-ad5b-45ad-8cdc-ca67e7b26935.png">
