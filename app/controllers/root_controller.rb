class RootController < ApplicationController
  def root; end

  def search
  @search_results = PgSearch
    .multisearch(params[:query])
    .includes(:searchable)
    .page(params[:page])

  render :search
  end
end
