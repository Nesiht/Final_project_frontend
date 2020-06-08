import React from 'react'
import { Btn } from 'components/Btn'

// Styles
import { BgContainer, Container, CtaFocus, CtaSide, Title, Text, Svg } from 'components/style'


export const Cta = () => {
  return (
    <BgContainer>
      <Container>
        <CtaFocus>
          <Title>
            Train hard, store your thoughts with Brunka
          </Title>
          <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Btn title="Get started" />
          <Text small>Already have an account? Login here</Text>
        </CtaFocus>
        <CtaSide>
          <Svg id="Capa_1" enable-background="new 0 0 512.009 512.009" height="340" viewBox="0 0 512.009 512.009" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><circle cx="255.862" cy="255.726" fill="#dbedff" r="248.485"/><path d="m66.373 255.726c0-127.251 95.659-232.144 218.987-246.734-9.675-1.145-19.515-1.75-29.498-1.75-137.234 0-248.484 111.25-248.484 248.484s111.25 248.485 248.484 248.485c9.983 0 19.823-.606 29.498-1.751-123.328-14.59-218.987-119.483-218.987-246.734z" fill="#b5dcff"/><circle cx="255.865" cy="255.616" fill="#f87c68" r="190.492"/><path d="m124.368 255.616c0-95.173 69.797-174.038 160.994-188.216-9.614-1.495-19.465-2.276-29.498-2.276-105.206 0-190.492 85.286-190.492 190.492s85.286 190.492 190.492 190.492c10.033 0 19.884-.781 29.498-2.276-91.197-14.178-160.994-93.044-160.994-188.216z" fill="#ec625e"/><circle cx="255.865" cy="255.619" fill="#dbedff" r="132.613"/><path d="m182.248 255.619c0-63.101 44.074-115.904 103.115-129.315-9.487-2.155-19.359-3.297-29.498-3.297-73.24 0-132.613 59.373-132.613 132.613s59.373 132.613 132.613 132.613c10.139 0 20.011-1.143 29.498-3.298-59.041-13.412-103.115-66.215-103.115-129.316z" fill="#b5dcff"/><circle cx="255.864" cy="255.616" fill="#f87c68" r="74.733"/><path d="m240.127 255.616c0-30.796 18.632-57.233 45.235-68.676-9.051-3.893-19.02-6.058-29.498-6.058-41.274 0-74.733 33.459-74.733 74.733s33.459 74.733 74.733 74.733c10.478 0 20.447-2.165 29.498-6.057-26.603-11.442-45.235-37.879-45.235-68.675z" fill="#ec625e"/><path d="m401.204 90.039 28.582-28.582-18.608-42.314c-1.616-3.675-6.415-4.59-9.241-1.764l-22.702 22.702z" fill="#f4dd45"/><path d="m379.235 40.082-20.339 20.338c-4.441 4.441-5.693 11.163-3.154 16.936l17.76 40.385 27.702-27.702z" fill="#fcc101"/><path d="m421.35 110.185 28.582-28.582 42.392 18.686c3.681 1.623 4.604 6.429 1.778 9.255l-22.702 22.702z" fill="#f4dd45"/><path d="m471.399 132.246-20.338 20.338c-4.441 4.441-11.17 5.686-16.954 3.137l-40.459-17.834 27.702-27.702z" fill="#fcc101"/><path d="m433.318 57.582-187.848 187.849c-5.683 5.683-5.683 14.897 0 20.58s14.897 5.683 20.58 0l187.849-187.848c5.683-5.683 5.683-14.897 0-20.58-5.683-5.684-14.898-5.684-20.581-.001z" fill="#477b9e"/><path d="m265.969 266.011c-5.683-5.683-5.683-14.897 0-20.58l187.848-187.849c.013-.013.028-.024.041-.037-5.686-5.644-14.87-5.633-20.54.037l-187.848 187.849c-5.683 5.683-5.683 14.897 0 20.58 5.67 5.67 14.854 5.681 20.54.037-.013-.013-.028-.024-.041-.037z" fill="#3f6d8e"/></g><g><path d="m437.066 436.971c40.56-40.561 65.784-92.009 72.944-148.784 6.695-53.088-3.59-107.692-28.977-154.438l18.558-18.558c6.554-6.554 4.459-17.67-4.033-21.388l-32.802-14.362c5.024-8.453 3.941-19.509-3.368-26.819-7.312-7.312-18.368-8.39-26.819-3.368l-14.362-32.802c-3.725-8.507-14.846-10.574-21.389-4.033l-18.557 18.557c-96.091-52.182-220.22-39.031-303.22 43.97-100.044 100.045-100.053 261.971 0 362.025 100.048 100.047 261.97 100.054 362.025 0zm.286-287.725-30.184-13.215 16.313-16.314 35.032 15.338-12.569 12.57c-2.252 2.256-5.622 2.921-8.592 1.621zm-72.966-83.178 12.57-12.57 15.338 35.032-16.314 16.314c-.477-1.089-11.881-27.135-13.216-30.183-1.288-2.946-.652-6.319 1.622-8.593zm-67.894 118.265c-31.849-17.984-72.406-12.757-98.614 13.452-32.077 32.077-32.077 84.271.001 116.349 11.528 11.529 26.071 19.299 42.055 22.471.493.098.983.145 1.468.145 3.506 0 6.641-2.472 7.349-6.042.807-4.063-1.834-8.01-5.896-8.816-13.062-2.592-24.946-8.942-34.368-18.364-26.229-26.229-26.229-68.907 0-95.136 20.42-20.421 51.5-25.275 76.913-12.964l-45.046 45.046c-8.598 8.598-8.598 22.588.001 31.187 8.599 8.598 22.589 8.597 31.188 0l45.045-45.045c12.312 25.412 7.457 56.491-12.963 76.912-8.108 8.107-18.226 14.032-29.258 17.132-3.987 1.121-6.312 5.262-5.191 9.249 1.121 3.988 5.263 6.314 9.25 5.191 13.502-3.794 25.883-11.044 35.806-20.966 26.208-26.209 31.437-66.766 13.45-98.613l31.1-31.1c34.246 49.138 28.963 116.877-14.212 160.052-48.807 48.808-128.22 48.806-177.026 0-48.845-48.844-48.844-128.185 0-177.028 43.129-43.13 110.867-48.49 160.051-14.211zm173.411-60.666-35.032-15.338 17.193-17.194 35.032 15.339zm-21.121-60.436c2.755 2.755 2.758 7.216-.001 9.974-4.423 4.423-130.99 130.991-135.882 135.883 0 0-.001 0-.001.001l-51.964 51.964c-2.751 2.75-7.226 2.75-9.975 0-2.75-2.75-2.75-7.225 0-9.974 4.883-4.883 185.931-185.931 187.849-187.849h-.001c2.758-2.755 7.216-2.757 9.975.001zm-43.244-38.315 15.339 35.032-17.193 17.193-15.339-35.032zm-319.89 60.637c77.483-77.483 192.143-89.861 281.525-43.486l-13.393 13.394c-6.673 6.672-8.54 16.57-4.755 25.215l.22.503c-76.394-40.619-171.34-27.205-233.258 34.712-77.302 77.302-77.302 202.831 0 280.133 77.232 77.231 202.897 77.236 280.134 0 32.607-32.608 52.88-75.892 57.083-121.878.377-4.125-2.661-7.774-6.786-8.151-4.129-.382-7.774 2.661-8.151 6.786-3.885 42.501-22.619 82.503-52.753 112.637-71.44 71.44-187.479 71.439-258.919 0-71.441-71.441-71.439-187.48 0-258.92 63.011-63.011 161.526-70.648 233.086-21.486 1.471 3.359.482 1.1 4.913 11.22l-26.248 26.248c-55.135-40.019-132.356-34.697-181.412 14.358-54.707 54.708-54.705 143.535 0 198.241 54.654 54.653 143.583 54.657 198.241 0 49.03-49.03 54.4-126.246 14.358-181.413l26.247-26.247 11.22 4.912c17.617 25.644 28.418 55.615 31.272 86.815.377 4.125 4.037 7.162 8.151 6.786 4.125-.377 7.163-4.027 6.786-8.152-2.409-26.346-10.077-51.878-22.386-75.019 9.706 4.252 19.405 1.794 25.728-4.529l13.394-13.394c22.372 43.117 31.301 92.963 25.184 141.472-6.74 53.44-30.485 101.87-68.67 140.054-94.183 94.184-246.621 94.191-340.811 0-94.182-94.181-94.192-246.62 0-340.811z"/></g></g></Svg>
          <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </CtaSide>
      </Container>
    </BgContainer>
  )
}

