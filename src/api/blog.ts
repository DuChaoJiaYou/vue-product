import axios from "axios";
import { BASE_URL } from "@/constants/url-root";
/**
 * @author duchao
 * @description 博客总览接口
 *
 */
export const getBlogList = () => {
  return axios({
    method: "get",
    url: `${BASE_URL}/blog/list`,
  });
};
