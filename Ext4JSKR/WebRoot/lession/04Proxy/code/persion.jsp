
<%@page language="java" contentType="text/html" pageEncoding="UTF-8"%>
<%
	System.out.println(request.getParameter("id"));
	response.getWriter().write("{name:'uspcat.com'}");
%>